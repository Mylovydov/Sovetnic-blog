// ОСНОВНЫЕ СКРПИТЫ ================================================
// $(document).ready(function() {
// 	$('.burger').click(function(event) {
// 		$('.burger, .nav').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// });

$(document).ready(function(){
	$('.articles-preview__slider').slick({
		dots: true,
		appendArrows:$('.control-slider__body'),
		appendDots:$('.control-slider__body'),
		swipe: false
	});
});

$(document).ready(function(){
	$('.slider-services').slick({
		dots: true,
		appendArrows:$('.control-services__body'),
		appendDots:$('.control-services__body'),
		swipe: true
	});
});

var mixer = mixitup('.comments-article__body');

// ================================================