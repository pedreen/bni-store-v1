<?php
/*
 * @Author: Warley Elias
 * @Email: warley.elias@pentagrama.com.br
 * @Date: 2022-07-08 15:19:17
 * @Last Modified by:   Warley Elias
 * @Last Modified time: 2022-07-08 15:19:17
 */

 class Pentagrama_CoreCustomizations_Model_Adminhtml_System_Config_Backend_Header_Logo extends Mage_Adminhtml_Model_System_Config_Backend_Image {
	/**
	* The tail part of directory path for uploading
	*/
	const UPLOAD_DIR				= 'header/logo';

	/**
	* Token for the root part of directory path for uploading
	*/
	const UPLOAD_ROOT_TOKEN			= 'system/filesystem/media';

	/**
	* Upload max file size in kilobytes
	*
	* @var int
	*/
	protected $_maxFileSize			= 2048;

	/**
	* Return path to directory for upload file
	*
	* @return string
	*/
	protected function _getUploadDir() {
		$uploadDir  = $this->_appendScopeInfo(self::UPLOAD_DIR);
		$uploadRoot = $this->_getUploadRoot(self::UPLOAD_ROOT_TOKEN);
		$uploadDir  = $uploadRoot . DS . $uploadDir;
		return $uploadDir;
	}

	/**
	* Makes a decision about whether to add info about the scope
	*
	* @return boolean
	*/
	protected function _addWhetherScopeInfo() {
		return true;
	}
}