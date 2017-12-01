var parallaxImages = [];
var imageIndex = 0;

parallaxImages[0] = "images/Website Images/parallax_index_1.jpg";
parallaxImages[1] = "images/Website Images/parallax_index_2.jpg";
parallaxImages[2] = "images/Website Images/parallax_index_3.jpg";
parallaxImages[3] = "images/Website Images/parallax_index_4.jpg";
parallaxImages[4] = "images/Website Images/parallax_index_5.jpg";
parallaxImages[5] = "images/Website Images/parallax_index_6.jpg";
parallaxImages[6] = "images/Website Images/parallax_index_7.jpg";
parallaxImages[7] = "images/Website Images/parallax_index_8.jpg";

/***********NAVBAR COLOR CHANGE FOR SCROLLING AND SCREEN RESIZING*********/

/***********NAVBAR COLOR CHANGE FOR SCROLLING AND SCREEN RESIZING*********/
/***********CHANGING PARALLAX IMAGE*****************/

$(document).ready(function() {
	var random = Math.floor((Math.random() * 7) + 0); // random numbers between 0-7 (8 items)
  //$('#index_parallax.parallax-window').parallax({imageSrc: parallaxImages[random]});
	$('.carousel').carousel();
  fixForParallax();
});
/***********CHANGING {ARALLAX IMAGE*****************/
/*********THIS FIXES ANY PROBLEM RELATED TO PARALLAX NOT UPDATING AFTER SCROLL OR DOM UPDATES************/
function fixForParallax(){
	jQuery(window).trigger('resize').trigger('scroll');
}
/*********THIS FIXES ANY PROBLEM RELATED TO PARALLAX NOT UPDATING AFTER SCROLL OR DOM UPDATES************/
/*********FOR SMOOTH SCROLLING************/
//minsan mag error na Cannot read property 'top' of undefined kasi ung anchored link na dapat puntahan, ay wala sa whole document
/*$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});*/
/*********FOR SMOOTH SCROLLING************/