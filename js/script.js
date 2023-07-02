/*Слайдер*/

$(document).ready(function () {
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});


/*Выплывающая менюшка*/

function firstFunction() {
	document.getElementById("firstDropdown").classList.toggle("show");
}

function secondFunction() {
	document.getElementById("secondDropdown").classList.toggle("show");
}

(function ($) {
	'use strict';
	$('.lock').siblings('li').on('click', function (e) {
		e.preventDefault();
		$(this).next('.lock').toggle();
	})
})(jQuery);

