
function ibg(){

	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
	ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
	}
	}
	
	ibg();
// ОСНОВНЫЕ СКРПИТЫ ================================================
$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger, .nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

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


// СКРИПТ ДЛЯ РЕЙТИНГА ====================================================

const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}

// основная функция
function initRatings() {
	let ratingActive, ratingValue;
	// Бегаем по всем рейтингам на странице
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}

	// Инициализирует конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();

		if (rating.classList.contains('rating--set')) {
			setRating(rating);
		}
	}

	// Инициализация переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}

	// Тзиеняем ширину аутивных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}

	// Возможность указать оценку
	function setRating(rating) {
		const ratingItems = rating.querySelectorAll('.rating__item');
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener("mouseenter", function (e) {
				// обновление переменных
				initRatingVars(rating);
				// Обмновление активных звезд
				setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener("mouseleave", function (e) {
				// Обмновление активных звезд
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function (e) {
				// обновление переменных
				initRatingVars(rating);

				if (rating.dataset.ajax) {
					// "Отправить" на сервер
					setRatingValue(ratingItem.value, rating);
				} else {
					// отобразить указанную оценку
					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth();
				}
			});
		}
	}
	

	async function setRatingValue(value, rating) {
		if (!rating.classList.contains('rating--sending')) {
			rating.classList.add('rating--sending');

			// Отправка данных (value) на сервер
			let response = await fetch('rating.json', {
				method: 'GET',

				// body: JSON.stringify({
				// 	userRating: value
				// }),
				// headers: {
				// 	'content-type': 'application/json'
				// }
			});
			if (response.ok) {
				const result = await response.json();
				
				// Получаем новый рейтинг
				const newRating = result.newRating;

				// Вывод нового среднего результата
				ratingValue.innerHTML = newRating;

				// Обмновление активных звезд
				setRatingActiveWidth();

				rating.classList.remove('rating--sending');
			} else {
				alert("Ошибка");

				rating.classList.remove('rating--sending');
			}
		}
	}
}

// ================================================