$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    fade: true,
    asNavFor: '.slider2'
  });

  $('.slider2').slick({
    slidesToShow: 4,
    slidesToScroll:1,
    asNavFor: '.slider',

    focusOnSelect: true,
    prevArrow:'<img  class="prev" src="img/img_service/arrow_left.jpg">',
    nextArrow:'<img class="next" src="img/img_service/arrow_right.jpg">',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
        // variableWidth:true,
        centerMode: true,
        variableWidth: true
      }
    },]
  });
});


