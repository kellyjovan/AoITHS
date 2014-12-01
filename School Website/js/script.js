$(document).ready(function(){

  // $('.back_to_top').click(function(){
  //   alert("Clicked");
  // })

  // function scroll() {
  //       if ($(window).scrollTop() >= origOffsetY) {
  //           $('.back_to_top').addClass('visible');
  //       } else {
  //         $('.back_to_top').removeClass('visible');
  //       }
  //   }

  $('.anchor').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
    });
})