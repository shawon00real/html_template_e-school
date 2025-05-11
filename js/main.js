$(document).ready(function(){

	     $('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:3000,
	    dots:false,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	     $('.counter').counterUp({
	    delay: 10,
	    time: 1000
    });


});