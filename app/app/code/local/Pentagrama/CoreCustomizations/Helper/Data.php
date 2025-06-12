<?php
/*
 * @Author: Warley Elias
 * @Email: warley.elias@pentagrama.com.br
 * @Date: 2022-07-08 16:14:23
 * @Last Modified by:   Warley Elias
 * @Last Modified time: 2022-07-08 16:14:23
 */

class Pentagrama_CoreCustomizations_Helper_Data extends Mage_Core_Helper_Abstract {
	public function isBoletoBancarioActive() {
		return (bool) Mage::getStoreConfig('payment/pagarme_boleto/active') || (bool) Mage::getStoreConfig('payment/mercadopago_ticket/active');
	}

	public function isCreditCardActive() {
		return (bool) Mage::getStoreConfig('payment/pagarme_cc/active');
	}

	public function isMercadoPagoCreditCardActive() {
		return (bool) Mage::getStoreConfig('payment/mercadopago_creditcard/active');
	}

	public function getParcelamento() {
		return Mage::getStoreConfig('payment/pagarme_cc/max_installments');
	}

	public function getValorMinParcela() {
		return Mage::getStoreConfig('payment/pagarme_cc/min_installment_value');
	}

	public function getParcelasSemJuros() {
		return Mage::getStoreConfig('payment/pagarme_cc/free_installments');
	}

	public function getContactsRecipientEmail() {
		return Mage::getStoreConfig('contacts/email/recipient_email');
	}

	public function getStoreInformationPhone() {
		return Mage::getStoreConfig('general/store_information/phone');
	}

	public function getStoreInformationWhastapp() {
		return Mage::getStoreConfig('general/store_information/whatsapp');
	}

	public function getStoreInformationWhastappFormatedForLink() {
		$whatsappFormated = '+55' . str_replace(['(', ')', ' ', '-'], '', Mage::getStoreConfig('general/store_information/whatsapp'));
		return $whatsappFormated;
	}

	public function getStoreInformationOpenHours() {
		return Mage::getStoreConfig('general/store_information/hours');
	}
}