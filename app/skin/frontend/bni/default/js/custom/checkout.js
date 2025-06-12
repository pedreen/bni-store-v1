/*
* @Author: Warley Elias
* @Email: warley.elias@pentagrama.com.br
* @Date: 2022-07-11 16:58:34
 * @Last Modified by: Warley Eliass
 * @Last Modified time: 2022-07-11 17:06:488
*/

jQuery( document ).ready(function($) {
    /*********************AUTHENTICATION**************************/
    var $btnAuthenticationOSC = $('.onestepcheckout .onestepcheckout-login .login');
    if ($btnAuthenticationOSC.length) {
        $btnAuthenticationOSC.magnificPopup({
            items: [
                {
                    src: '#onestepcheckout-authentification',
                    type: 'inline'
                }
            ],
            removalDelay: 500,
            mainClass: 'mfp-fade',
        });
    }
	/*********************AUTHENTICATION**************************/
});