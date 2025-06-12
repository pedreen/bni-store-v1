<?php
/*
 * @Author: Warley Elias
 * @Email: warley.elias@pentagrama.com.br
 * @Date: 2022-07-12 12:55:20
 * @Last Modified by:   Warley Elias
 * @Last Modified time: 2022-07-12 12:55:20
 */

class Pentagrama_CoreCustomizations_Block_Customer_Account_Navigation extends Mage_Customer_Block_Account_Navigation {
	public function removeLinkByName($name) {
		unset($this->_links[$name]);
	}
}