/*
 * @Author: Warley Elias
 * @Email: warley.elias@pentagrama.com.br
 * @Date: 2022-07-11 17:01:25
 * @Last Modified by: Warley Elias
 * @Last Modified time: 2022-07-11 17:02:59
 */

jQuery(document).ready(function ($) {
    /*********************INFINITE SCROLLING**************************/
    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }
    var page = 2, pcsLoadingAjax = false;

    if (isMobile && ($('.catalog-category-view').length ||
        $('.catalogsearch-result-index').length)) {
        var $pcsLoader = $(this).find('.toolbar-bottom .products-grid-loader');
        $(window).on('touchmove scroll', function (e) {
            var currentHeight = $(window).height() + $(window).scrollTop();
            docHeight = getDocHeight();
            currentHeaderHeight = $(window).height() + $('header').height() + $('header').offset().top;

            if ($('.btn-last-page').data('page') + 1 == page && $('.products-grid-loader').length) {
                if (!pcsLoadingAjax) {
                    $pcsLoader.addClass('no-results');
                    $pcsLoader.find('span').text(Translator.translate('No more results'));
                }
                return true;
            }

            if (pcsLoadingAjax) {
                return true;
            }

            if (currentHeight >= (docHeight - $('.main-footer').height() - 20)) {
                var url = location.href.replace(/&p=[0-9]*/, '').replace(/p=[0-9]*&/, '').replace(/p=[0-9]*/, '');

                if (url.indexOf('?') < 0) {
                    url += '?';
                } else {
                    url += '&';
                }

                url += 'p=' + page;

                $pcsLoader.addClass('loading');
                $pcsLoader.find('span').text(Translator.translate('Loading...'));

                pcsLoadingAjax = true;

                $.ajax({
                    url: url,
                    method: 'GET',
                    dataType: 'json'
                }).done(function (content) {
                    var html = content.productlist;
                    var $products = $(html).find('.products-grid > .item');
                    $('.products-grid').append($products);

                    $pcsLoader.removeClass('loading');
                    $pcsLoader.find('span').text(Translator.translate('See More'));

                    if ($('.btn-last-page').data('page') + 1 == page) {
                        $pcsLoader.addClass('no-results');
                        $pcsLoader.find('span').text(Translator.translate('No more results'));
                        return true;
                    }

                    pcsLoadingAjax = false;
                });
                page++;
            }
        });
    }
    /*********************INFINITE SCROLLING**************************/

    /*******************Botões de Adição ou Substração de Quantidade - Página de Produto********************/
    var $minusPlus = $('.add-to-cart .qty-wrapper .minus, .add-to-cart .qty-wrapper .plus');
    if ($minusPlus.length > 0) {
        $minusPlus.on("click", function () {
            var $button = $(this);
            var $input = $button.parent().find("input.qty");

            $input.val(function (i, value) {
                if ($button.data('multi') < 0 && value > 1) {
                    return + value + (1 * + $button.data('multi'));
                }
                if ($button.data('multi') > 0) {
                    return + value + (1 * + $button.data('multi'));
                }
                return value;
            });
        });
    }
	/*******************Botões de Adição ou Substração de Quantidade - Página de Produto********************/
});