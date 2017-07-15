$(document).ready(function(){
	var sections = $('section'),
		nav = $('nav'),
		nav_height = nav.outerHeight();

	$(window).on('scroll', function(){
		var current_pos = $(this).scrollTop();

		sections.each(function(){
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();

			if (current_pos >= top && current_pos <= bottom) {
				nav.find('a').removeClass('active');
				sections.removeClass('active');

				$(this).addClass('active');
				nav.find('a[href="#' + $(this).attr('id')+'"]').addClass('active');
			}
		});
	});

	nav.find('a').on('click', function() {
		var $el = $(this),
			id = $el.attr('href');

		$('html, body').animate({
			scrollTop: $(id).offset().top - nav_height}, 500);

		return false;
	});

	$('.gotop').each(function(){
		$(this).click(function(){ 
			$('html,body').animate({ scrollTop: 0 }, 'slow');
		return false; 
    	});
	});   
})