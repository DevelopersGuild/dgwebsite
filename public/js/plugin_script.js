new WOW().init();
$(window).load(function() {
    $('.flexslider').flexslider({
        slideshowSpeed: 700,
        animationSpeed: 50,
        controlNav: false,
        directionNav: false, 
    });

    // parallax code. to optimize for mobile devices, this has been temporarily deactivated.
    /*$('.landing').parallax("30%", .5);
    $('.traits').parallax("30%", .5);
    $('.faq').parallax("30%", .5);*/
});


//go to top button function
$("#gotop").mouseenter(function(){
   $("#gotop").fadeTo("fast", 0.8);
}); 
$("#gotop").mouseleave(function(){
   $("#gotop").fadeTo("fast", 0.3);  
});
   
$(window).scroll(function() {
  var windowHeight = window.innerHeight;
  if ($(this).scrollTop() > windowHeight){
    $('#gotop').fadeIn("fast");
  } else {
    $('#gotop').stop().fadeOut("fast");
  }
});

var windowHeight = window.innerHeight;
if ($(this).scrollTop() > windowHeight) {
  $('#gotop').show();
}

$("#gotop").click(function(){
    $("html, body").animate({ scrollTop: 0}, 1000);
});