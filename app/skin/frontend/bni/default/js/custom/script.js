/*
* @Author: Warley Elias
* @Date:   2020-11-05 13:31:23
 * @Last Modified by: Warley Elias
 * @Last Modified time: 2022-07-11 15:20:544
*/

jQuery( document ).ready(function($) {
	/*********************Meio Mask****************************/
	$('input[alt]').setMask();

	$('input[alt="phone"]').each(function(){
		$(this).setMask("(99) 9999-99999").on("blur", function(event) {
			var phone = $(this).val(),
				unmaskedPhone = $(this).val().replace(/\D/g, ''),
				mask;

			$(this).unsetMask();
			if(unmaskedPhone.length > 10) {
				mask = "(99) 99999-9999";
			} else {
				mask = "(99) 9999-99999";
			}
			$(this).setMask(mask);

			phone = $(this).val(); // get new masked value
			//var self = $(this);
			if (phone.length < 14 && phone.length != 0){
				alert("Telefone inserido é invalido, tente novamente utilizando um telefone correto.");
				$(this).val('');
				event.preventDefault();
				$(this).trigger("focus");
			}
		}).trigger("blur");
	});
	/*********************Meio Mask****************************/

	/*********** CAROUSEL ADDITIONAL INFORMATION HOME ***********/
	var $carouselAdditionalInformation = $('.informacoes-adicionais-wrapper .carousel');
	if (isMobile && $carouselAdditionalInformation.length)
	{
		$carouselAdditionalInformation.owlCarousel({
			loop: true,
			dots: true,
			responsiveClass: true,
			items: 1,
			//margin: 25,
			nav: false,
			center: false,
			autoplay: true,
			slideBy: 2
		});
	}
	/*********** CAROUSEL ADDITIONAL INFORMATION HOME ***********/

	/*********** USER RATING ***********/

	$('#review-form .ratings input').on('click', function() {
		$(this).parent().find('.rating-box').addClass('select');
		$(this).parent().prevAll().find('.rating-box').addClass('select');
		$(this).parent().nextAll().find('.rating-box').removeClass('select');
	});

	/*********** USER RATING ***********/

	/********************* Header Fixed ****************************/

	function scrollMenu() {
		if (!isMobile){
			if ($(window).scrollTop() > 180) {
				$('#header').addClass('fixed');
			} else {
				$('#header').removeClass('fixed');
			}
		}
		if (isMobile){
			if ($(window).scrollTop() > 100) {
				$('#header').addClass('fixed');
			} else {
				$('#header').removeClass('fixed');
			}
		}
	}

	$(window).on("scroll", scrollMenu);
	$(window).on("resize", scrollMenu);

	/********************* Header Fixed ****************************/

	/*********** BRAND CAROUSEL ***********/
	var $brandCarousel = $('.brand-carousel .owl-carousel');
	if ($brandCarousel.length)
	{
		$brandCarousel.owlCarousel({
			nav: true,
			margin: 30,
			loop: true,
			dots: false,
			navText: ['', ''],
			responsive: {
			    0: {
			    	items: 1,
			    },
			    375: {
			    	items: 2,
			    },
			    576: {
			    	items: 3,
			    },
			    992: {
			    	items: 4,
			    },
			    1200: {
			    	items: 5,
			    },
			}
		});
	}
	/*********** BRAND CAROUSEL ***********/
});
