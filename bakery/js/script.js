$(document).ready(function(){
	$('.header__burger').click(function(){
		$('.header__burger, .navigation__list').toggleClass('active');
        $('body').toggleClass('lock');
	});

    $('.navigation__link').click(function(){
        if ($('.navigation__list').hasClass('active')) {
            $('.header__burger, .navigation__list').removeClass('active');
            $('body').removeClass('lock');
        }
    });

    $('.navigation__link, .navigation-footer__link, .header__button, .primary__button').on('click', function(e) {
		e.preventDefault();
		
		var target = $(this).attr('href');
		var offset = 140;
		var duration = 1000;
		
		var targetOffset = $(target).offset().top - offset;
		
		$('html,body').stop().animate({ scrollTop: targetOffset }, duration);
	});
});