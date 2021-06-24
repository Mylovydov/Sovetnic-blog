// ОСНОВНЫЕ СКРПИТЫ ================================================
// $(document).ready(function() {
// 	$('.burger').click(function(event) {
// 		$('.burger, .nav').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// });

$(document).ready(function () {
	$('.articles-slider__slider').slick({
		dots: true,
		appendArrows: $('.controls-slider-articles__body'),
		appendDots: $('.controls-slider-articles__body'),
		swipe: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					swipe: true
				}
			}
		]
	});
});

$(document).ready(function () {
	$('.slider-services').slick({
		dots: true,
		appendArrows: $('.control-services__body'),
		appendDots: $('.control-services__body'),
		swipe: true
	});
});



if (document.querySelectorAll('.comments-article__body').length>0){
	let mixer = mixitup('.comments-article__body');
}
// ================================================
