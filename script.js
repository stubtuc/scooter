$(document).ready(function() {

	var step = 1;
	var rate = 0;

	$('.rate-section').css({'display' : 'none'});
	$('.buy-section').css({'display' : 'none'});

	jQuery.extend(jQuery.validator.messages, {
	    required: "Это поле обязательно.",
	    remote: "Пожалуйста, исправьте это поле.",
	    email: "Пожалуйста, введите правильный email адрес.",
	    url: "Пожалуйста, введите правильный URL.",
	    date: "Пожалуйста, введите правильную дату.",
	    dateISO: "Пожалуйста, введите правильную дату (ISO).",
	    number: "Пожалуйста, введите правильный номер.",
	    digits: "Пожалуйста, вводите только числа.",
	    creditcard: "Пожалуйста, правильный номер карты.",
	    equalTo: "Пожалуйста, введите то же значение.",
	    accept: "Пожалуйста, введите выражение с правильным значением.",
	    maxlength: jQuery.validator.format("Пожалуйста, введите больше {0} символов."),
	    minlength: jQuery.validator.format("Пожалуйста, введите ещё {0} символов."),
	    rangelength: jQuery.validator.format("Пожалуйста, введите от {0} до {1} символов."),
	    range: jQuery.validator.format("Пожалуйста, введите значение между {0} и {1}."),
	    max: jQuery.validator.format("Пожалуйста, введите значение, которое меньше или равно {0}."),
	    min: jQuery.validator.format("Пожалуйста, введите значение, которое больше или равно {0}.")
	});

	$('#form-name, #form-email, #form-phone').validate();

	$('.buy-form, .buy-space, .exit, .chat').css({'display' : 'none', 'visibility' : 'visible'});
	$('.phone-num').mask('+7 (000) 000-00-00');

	$(".more-button").mousedown(function() {

	    $('.page').animate(
	    {

	        scrollTop: $(".screen:nth-child(2)").offset().top

	    },
	    700);

	});

	$("#power").mousedown(function() {

	    $('.page').animate(
	    {

	        scrollTop: $(".screen:nth-child(4)").offset().top

	    },
	    2000);

	});

	$("#safety").mousedown(function() {

	    $('.page').animate(

	    {

	        scrollTop: $(".safety-block").offset().top

	    }, 
	    2000);

	});

	$("#style").mousedown(function() {

	    $('.page').animate({
	        scrollTop: $(".screen:nth-child(6)").offset().top
	    }, 2000);

	});

	function stepRender(draw) {

		$('.buy-section .buy-form:nth-child(' + (step - 1) + ')').css({'display' : 'none'});
		$('.buy-section .buy-form:nth-child(' + (step + 1) + ')').css({'display' : 'none'});
		$('.buy-section .buy-form:nth-child(' + step + ')').css({'display' : 'block', 'animation' : 'block ease-in-out .5s'});

		if (step > 1 && draw == 1) {

			$('.buy-space .chat').append('<div class="message" data-aos="fade-right"><p><span>' + 
				$('.buy-form:nth-child(' + (step - 1) + ') .step-name').text() + '</span></p></div>');
			$('.buy-space .chat').append('<div class="you" data-aos="fade-left" data-aos-delay="300"><p><span>' 
				+ $('.buy-form:nth-child(' + (step - 1) + ') input').val() + '</span></p></div>');
			$('.chat').animate({
		        scrollTop: $(this).height()
		    }, 400);

		}

	}

	$('.buy-button').mousedown(function(){

		$('.buy-section').css({'display' : 'block'});
		$('.buy-space, .exit, .chat').css({'display' : 'block'});
		$('.buy-container, .exit, .chat').css({'animation' : 'block ease-in-out .5s'});
		stepRender(0);

	});


	$('.prev').mousedown(function(){

		if (step == 1)
			$('.buy-space').css({'display' : 'none'});

		else {

			$('.buy-space .chat div:last-child').remove();
			$('.buy-space .chat div:last-child').remove();
			step--;
			stepRender(0);

		}

	});



	$('.next').mousedown(function(){

		if (step != 6) {

			if ($('.buy-section .buy-form:nth-child(' + step + ') input').val() != '' && $('.buy-section .buy-form:nth-child(' + step + ') input').valid()) {

				if (step < 6) {

					$('.buy-section .buy-form:nth-child(' + step + ')').css({'display' : 'none'});
					step++;
				    stepRender(1);

				}

				else
					$('.buy-space').css({'display' : 'none'});

				if (step == 3) {

					var name = $('.buy-section .buy-form:nth-child(2) input').val();
					$('.buy-section .buy-form:nth-child(3) .step-name').html('Отлично, ' + name
					 + '! Напишите Вашу почту для связи');

				}

				if (step == 6)
					$('.buy-space .chat div').remove();

				$('.buy-form:nth-child(' + step + ') input[type="text"]').focus();

			}

			else
			{

				$('.buy-section .buy-form:nth-child(' + step + ') input').css({'animation' : 'error .s ease-in-out 1',
					'animation-play-state' : 'running'});

			}

		}

		else
			$('.buy-space').css({'display' : 'none'});

	});

	$('.buy-space').on('keyup keypress', function(e) {

	  var keyCode = e.keyCode || e.which;

	  if (keyCode === 13) { 

	    $('.next').mousedown();
	    return false;

	  }

	});

	$('.buy-space').on('keyup keypress', function(e) {

	  var keyCode = e.keyCode || e.which;

	  if (keyCode === 27) { 

	    $('.prev').mousedown();
	    return false;

	  }

	});

	$('.exit').mousedown(function(){

		if (rate >= 1) {

			$('.rate-section').css({'display' : 'none'});
			rate = -1;

		}

		$('.buy-space').css({'display' : 'none'});

	});


	$(window).on("load", function () {

		AOS.init({

		  disable: false, 
		  startEvent: 'DOMContentLoaded', 
		  initClassName: 'aos-init', 
		  animatedClassName: 'aos-animate',
		  useClassNames: false, 
		  disableMutationObserver: false,
		  debounceDelay: 50,
		  throttleDelay: 99, 
		  offset: 150, 
		  delay: 0, 
		  duration: 400,
		  easing: 'ease', 
		  once: false, 
		  mirror: false, 
		  anchorPlacement: 'top-bottom', 

		});

		$('.owl-carousel').owlCarousel({

		    navigation : false,
		    slideSpeed : 300,
		    items: 1,
		    dotsContainer: '.slider',
		    loop: true

		});

		$('.carousel').owlCarousel({

		    nav: true,
		    navText: ["<img src='arrow2.png'>","<img src='arrow2.png'>"],
		    dots : false,
		    slideSpeed : 300,
		    items: 2,
		    responsive: {

		    	1000: {
		    		items: 2
		    	},

		    	768: {
		    		items: 1
		    	},

		    	450: {
		    		items: 1
		    	}

		    }

		});

		$('.owl-next, .owl-prev').css({'display' : 'none'});

		$('.cnxt').click(function() {

		    $('.carousel').trigger('next.owl.carousel');

		})

		$('.cprv').click(function() {

		    $('.carousel').trigger('prev.owl.carousel', [300]);

		})

	});

	function rateMe() {

		$('.rate-section .buy-form:nth-child(1)').css({'display' : 'block', 'animation' : 'block ease-in-out .5s'});
		$('.buy-section').css({'display' : 'none'});
		$('.chat').css({'display' : 'none'});
		$('.rate-section').css({'display' : 'block'});
		$('.buy-space, .exit').css({'display' : 'block'});
		$('.buy-container, .exit').css({'animation' : 'block ease-in-out .5s'});

	}

	$('.ooops').mousedown(function(){

		$('.exit').mousedown();

	});

	$('.rateme').mousedown(function(){

		if (rate == 2) {

			$('.rate-section').css({'display' : 'none'});
			rate = -1;
			$('.exit').mousedown();

		}

		else if (rate == 1) {

			$('.buy-form:nth-child(1)').css({'display' : 'none'});
			$('.buy-form:nth-child(2)').css({'display' : 'block', 'animation' : 'block ease-in-out .5s'});
			rate = 2;

		}

	});

	$('.page').scroll(function() {

		AOS.refresh();

		if ($(".screen:nth-child(6)").offset().top < 0 && rate != -1) {

			rate = 1;

		}

		if (rate == 1) {

			rateMe();

		}

	});

	$('.owl-dot').click(function () {

	  $('.owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);

	});

	$('.no-padding').css({'padding' : '0px 0px 0px 0px'});

});