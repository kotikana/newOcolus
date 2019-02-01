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


  $('._timer').countdown('2019/10/10', function(event) {
    $(this).html(event.strftime(
      '<span class="timer_clock-item">%D</span>' + 
      '<span class="timer_clock-item">%H</span>' + 
      '<span class="timer_clock-item">%M</span> ' + 
      '<span class="timer_clock-item">%S</span>'
      ));
  });




$('._minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 0 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('._plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
});

(function($) {
  $(function() {
    $("ul.tabs_caption").on("click", ".tabs_title:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()//выполнять поиск по элементам этих элементов в дереве DOM и создавать новый объект jQuery из соответствующих элементов.
        .removeClass("active")
        .closest(".tabs")
        .find(".tabs_content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);