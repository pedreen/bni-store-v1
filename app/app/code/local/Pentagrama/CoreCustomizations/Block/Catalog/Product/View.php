<?php
/*
 * @Author: Warley Elias
 * @Email: warley.elias@pentagrama.com.br
 * @Date: 2022-07-11 11:00:36
 * @Last Modified by:   Warley Elias
 * @Last Modified time: 2022-07-11 11:00:36
 */

class Pentagrama_CoreCustomizations_Block_Catalog_Product_View extends Mage_Catalog_Block_Product_View {
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
}