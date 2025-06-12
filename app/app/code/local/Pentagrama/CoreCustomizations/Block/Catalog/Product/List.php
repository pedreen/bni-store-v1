<?php
/*
 * @Author: Warley Elias
 * @Email: warley.elias@pentagrama.com.br
 * @Date: 2022-07-11 10:59:47
 * @Last Modified by: Warley Elias
 * @Last Modified time: 2022-07-11 11:00:10
 */

class Pentagrama_CoreCustomizations_Block_Catalog_Product_List extends Mage_Catalog_Block_Product_List {
    protected function _construct() {
        $this->_priceBlockDefaultTemplate = 'catalog/product/price_list.phtml';
        parent::_construct();
    }

    public function getDiscountLabel($_product) {
        $html = '';
        if ($_product->getFinalPrice() < $_product->getPrice()) {
            $porcentagemDesconto = ((1 - $_product->getFinalPrice() / $_product->getPrice()) * 100);
            if ($porcentagemDesconto) {
                $html = '<div class="product-list percent">';
                $html .= '<span class="lable-discount">-' . round($porcentagemDesconto) . '%</span>';
                $html .= '</div>';
            }
        }
        return $html;
    }

    public function getHighlightsLabel($_product) {
        $html = '';
        if ($_product->getFinalPrice() < $_product->getPrice()) {
            $html = '<div class="highlight-label offer">' . $this->__('Offer') . '</div>';
        } else {
            $newsFromDate = $_product->getNewsFromDate();
            $newsToDate   = $_product->getNewsToDate();
            if (!$newsFromDate && !$newsToDate) {
                $isNew = false;
            } else {
                $isNew = Mage::app()->getLocale()
                ->isStoreDateInInterval($_product->getStoreId(), $newsFromDate, $newsToDate);
            }
            if ($isNew) {
                $html = '<div class="highlight-label new-release">' . $this->__('New Release') . '</div>';
            }
        }
        return $html;
    }

    public function getHoverImage($_product, $_imgSize) {
        $attributes = $_product->getTypeInstance(true)->getSetAttributes($_product);
        $media_gallery = $attributes['media_gallery'];
        $backend = $media_gallery->getBackend();
        $backend->afterLoad($_product);
        $mediaGallery = $_product->getMediaGalleryImages();
        $imagePostionTwo = $mediaGallery->getItemByColumnValue('position', 2);
        if ($imagePostionTwo) {
            return $this->helper('catalog/image')->init($_product, 'hover', $imagePostionTwo->getFile())->resize($_imgSize);
        }
        return $this->helper('catalog/image')->init($_product, 'small_image')->resize($_imgSize);
    }
}