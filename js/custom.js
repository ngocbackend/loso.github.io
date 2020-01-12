/* Show and hiden menu */
$(document).ready(function(){

	$(document).scroll(function(){
		if ($(window).scrollTop() < 80) {
			$('.navbar').css({
				'margin-top': '-100px',
				'opacity': 0
			});
		}else{
			$('.navbar').css({
				'margin-top': '0',
				'opacity': 1
			});
			$('.navbar-defaut').css({
				'background': 'rgba(59,59,59,0.7)'
			});
			$('.navbar-brand img').css({
				'height': '37px',
				'padding-bottom': '15px'
			});
		}
	});
});

// smooth scroll
$(document).ready(function(){

	$('.nav-link,#scroll-top-a').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 1000);
	            return false;
	        }
	    }
	});

});


