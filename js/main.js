
var OnePageNav = function() {
	var navToggler = $('.navbar-toggler');

	$(".smoothscroll[href^='#'], #pb-navbar ul li a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;

		$('html, body').animate(
			{
			scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function(){
			window.location.hash = hash;
		});
	});

	$("#pb-navbar ul li a[href^='#']").on('click', function(e){
		if ( navToggler.is(':visible') ) {
			navToggler.click();
		}
	});

	$('body').on('activate.bs.scrollspy', function () {
		console.log('nice');
	})
};

var smoothScroll = function() {
	var $root = $('html, body');

	$('.smoothscroll').click(function () {
		$root.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});
};

$(function(){
	OnePageNav();
	smoothScroll();
});
