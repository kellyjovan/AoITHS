$(document).ready(function(){

  $('.back_to_top').click(function(){
    alert("Clicked");
  })
  $('.back_top_top').hide();
  function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
          $('.back_to_top').fadeIn();
        } else {
          $('.back_to_top').fadeOut();
        }
    }

  $('.anchor').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
    });
})