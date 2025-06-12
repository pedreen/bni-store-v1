/*
 * @Author: Warley Elias
 * @Email: warley.elias@pentagrama.com.br
 * @Date: 2022-07-11 16:59:40
 * @Last Modified by: Warley Elias
 * @Last Modified time: 2022-07-11 17:13:02
 */

jQuery(document).ready(function ($) {
    /*********** PRODUCT CAROUSEL ***********/
    var $productCarousel = $('.product-image-gallery .owl-carousel');
    if ($productCarousel.length) {
        $productCarousel.owlCarousel({
            items: 1,
            nav: true,
            loop: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        });
    }
    /*********** PRODUCT CAROUSEL ***********/

    /***********TOUCH WIPE IMAGENS PRODUCT VIEW***********/
    if (isMobile) {
        var $productImgBox = $('.product-img-box .product-image .product-image-gallery');

        if ($productImgBox.length > 0) {
            var i = 0;

            function nextImage() {
                if ($(".more-views-slider-container .product-image-thumbs a[data-image-index='" + (i + 1) + "']").length) {
                    i++;
                    $(".more-views-slider-container .product-image-thumbs a[data-image-index='" + i + "']").trigger("click");
                    $(".more-views-slider-container .product-image-thumbs a").removeClass("active");
                    $(".more-views-slider-container .product-image-thumbs a[data-image-index='" + i + "']").addClass("active");
                }
            }
            function prevImage() {
                if ($(".more-views-slider-container .product-image-thumbs a[data-image-index='" + (i - 1) + "']").length) {
                    i--;
                    $(".more-views-slider-container .product-image-thumbs a[data-image-index='" + i + "']").trigger("click");
                    $(".more-views-slider-container .product-image-thumbs a").removeClass("active");
                    $(".more-views-slider-container .product-image-thumbs a[data-image-index='" + i + "']").addClass("active");
                }
            }

            $('.more-views-slider-container .product-image-thumbs a').trigger("click", function () {
                i = $(this).data('image-index');
                $(".more-views-slider-container .product-image-thumbs a").removeClass("active");
                $(".more-views-slider-container .product-image-thumbs a[data-image-index='" + i + "']").addClass("active");
            });

            $productImgBox.on("swipeleft", function () {
                nextImage();
            });

            $productImgBox.on("swiperight ", function () {
                prevImage();
            });
        }
    }
    /***********TOUCH WIPE IMAGENS PRODUCT VIEW***********/

    /*********** PRODUCT VIEW RELATED ***********/
    var $productRelatedCarousel = $('.catalog-product-view .products-grid-related .owl-carousel');
    if ($productRelatedCarousel.length) {
        $productRelatedCarousel.owlCarousel({
            nav: false,
            dots: true,
            loop: false,
            mouseDrag: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                360: {
                    items: 2,
                },
                576: {
                    items: 3,
                    nav: true,
                    dots: false,
                },
                992: {
                    items: 4,
                    margin: 30,
                }
            }
        });
    }
    /*********** PRODUCT VIEW RELATED ***********/

    /*********** REVIEW SUMMARY ANCHOR TO LIST ***********/
    var $productTabsComments = $(".product-collateral ul.toggle-tabs li span:contains('Comentários')");
    var $producRatingSummary = $(".catalog-product-view .ratings .amount a");
    if ($productTabsComments.length && $producRatingSummary.length) {
        $producRatingSummary.on("click", function () {
            $productTabsComments.trigger("click");
        });
    }
	/*********** REVIEW SUMMARY ANCHOR TO LIST ***********/

    /*********************MORE VIEWS SLIDE**************************/
    var $moreViewsSlides = $('.more-views-slider-container .owl-carousel');
    if (!isMobile && $moreViewsSlides.length) {
        $moreViewsSlides.owlCarousel({
            items: 4,
            nav: true,
            margin: 16,
            dots: false,
            loop: false,
            mouseDrag: false
        });
    }

    var $moreViewsSlides = $('.product-image-gallery .owl-carousel');
    if (isMobile && $moreViewsSlides.length) {
        $moreViewsSlides.owlCarousel({
            items: 1,
            nav: true,
            loop: true,
            dots: false,
        });
    }
	/*********************MORE VIEWS SLIDE**************************/
});