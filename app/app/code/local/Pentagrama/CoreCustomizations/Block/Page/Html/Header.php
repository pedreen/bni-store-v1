<?php 
/*
 * @Author: Warley Elias
 * @Email: warley.elias@pentagrama.com.br
 * @Date: 2022-07-08 15:15:44
 * @Last Modified by:   Warley Elias
 * @Last Modified time: 2022-07-08 15:15:44
 */

 class Pentagrama_CoreCustomizations_Block_Page_Html_Header extends Mage_Page_Block_Html_Header {
	const LOGO_DIR              = 'header/logo/';

	public function getLogoSrc() {
		if (empty($this->_data['logo_src'])) {
			if(file_exists(Mage::getBaseDir('media') . DS . self::LOGO_DIR . Mage::getStoreConfig('design/header/logo_src'))) {
				$mediaBaseUrl = Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_MEDIA);
				$this->_data['logo_src'] = $mediaBaseUrl . self::LOGO_DIR . Mage::getStoreConfig('design/header/logo_src');
			} else {
				$this->_data['logo_src'] = parent::getLogoSrc();
			}
		}
		return $this->_data['logo_src'];
	}

	public function getLogoSrcSmall() {
		return $this->getLogoSrc();
	}
}