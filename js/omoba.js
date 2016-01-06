$( document ).ready(function(){
/*********************** Top Menu *********************************/
    $(".button-collapse").sideNav();
/*********************** Slider *********************************/
    $('.slider').slider({full_width: true,
    height:680});

$('.navbar').pushpin({ top: $('.navbar-fixed').offset().top });
})
