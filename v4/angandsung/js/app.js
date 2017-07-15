$(document).ready(function() {
	$('.gotop').each(function(){
		$(this).click(function(){ 
			$('html,body').animate({ scrollTop: 0 }, 'slow');
        	return false; 
    	});
	});

	$('.godown').click(function() {
		$('html, body').animate({
        scrollTop: $("#details").offset().top
    }, 2000);
	});

	$(window).scroll( function(){
		$('.fade').each( function(i){
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			if( bottom_of_window > bottom_of_object ){
				$(this).animate({'opacity':'1'},500);
			}  
		}); 
	});
    
})