<?php
/**
 * OpenMage
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available at https://opensource.org/license/osl-3-0-php
 *
 * @category   Mage
 * @package    Mage
 * @copyright  Copyright (c) 2006-2020 Magento, Inc. (https://www.magento.com)
 * @copyright  Copyright (c) 2018-2023 The OpenMage Contributors (https://www.openmage.org)
 * @license    https://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

define('MAGENTO_ROOT', getcwd());

$mageFilename = MAGENTO_ROOT . '/app/Mage.php';
$maintenanceFile = 'maintenance.flag';
$maintenanceIpFile = 'maintenance.ip';


require MAGENTO_ROOT . '/app/bootstrap.php';
require_once $mageFilename;

#Varien_Profiler::enable();

umask(0);

/* Store or website code */
$mageRunCode = $_SERVER['MAGE_RUN_CODE'] ?? '';

/* Run store or run website */
$mageRunType = $_SERVER['MAGE_RUN_TYPE'] ?? 'store';

if (file_exists($maintenanceFile)) {
    $maintenanceBypass = false;

    if (is_readable($maintenanceIpFile)) {
        /* Use Mage to get remote IP (in order to respect remote_addr_headers xml config) */
        Mage::init($mageRunCode, $mageRunType);
        $currentIp = Mage::helper('core/http')->getRemoteAddr();
        $allowedIps = preg_split('/[\ \n\,]+/', file_get_contents($maintenanceIpFile), 0, PREG_SPLIT_NO_EMPTY);
        $maintenanceBypass = in_array($currentIp, $allowedIps, true);
    }
    if (!$maintenanceBypass) {
        include_once __DIR__ . '/errors/503.php';
        exit;
    }

    // remove config cache to make the system check for DB updates
    $config = Mage::app()->getConfig();
    $config->getCache()->remove($config->getCacheId());
}

$httpHost = explode(".", $_SERVER['HTTP_HOST']);
switch ($httpHost[0]) {
    case "bnz":
    case "chernobyl":
    case "localhost:8074":
    case "baal":
        $requestUri = explode("/", $_SERVER['REQUEST_URI']);
        $mageRunCode = $requestUri[2];
        if ($mageRunCode == 'magento') {
            $mageRunCode = "bni";
        }
        if ($mageRunCode == 'b2b') {
            $mageRunCode = "b2b";
        }
        break;
    default:
        switch ($_SERVER['HTTP_HOST']) {
            case 'loja.bnibrasil.com.br':
            case 'bniloja.pentagrama.net.br':
                $mageRunCode = "bni";
                break;
            case 'store.bnibrasil.com.br':
            case 'bnilojab2b.pentagrama.net.br':
                $mageRunCode = "b2b";
                break;
            default:
                $mageRunCode = "bni";
                break;
        }
        break;
}

Mage::run($mageRunCode, $mageRunType);
