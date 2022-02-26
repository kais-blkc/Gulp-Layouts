$(document).ready(function(){

  // Burger - Открытие и закрытие моб. меню
  const closeBtn = $('#close-navbar');
  const burger = $('#burger');
  const navbar = $('#navbar');

  $(burger).click(function() {
    navbar.addClass('active');
  });
  $(closeBtn).click(function() {
    navbar.removeClass('active');
  });
  navbar.click(function (e) {
    if (e.target.tagName === 'A') {
      navbar.removeClass('active');
    }
  });


  // Slick slider
  $('.hmi-slider').slick({
    lazyLoad: 'ondemand',
    fade: true,
  });

  $('.img-slider').slick({
    lazyLoad: 'ondemand',
  });
  $('.def-slider').slick({
    lazyLoad: 'ondemand',
  });


  // Tabs
  $('section.cases').each(function() {
    let ths = $(this);
    ths.find('.cases__list-item').not(':first').hide();
    ths.find('.cases__tabs-item').click(function() {
      ths.find('.cases__tabs-item').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.cases__list-item').hide().eq($(this).index()).fadeIn()

      $(".img-slider").slick('reinit');
    }).eq(0).addClass('active');
  });


  // Hide / Show text review
  $('.five-years__reviews').on('click', '.five-years__item-full', function (e) {
      const target = $(e.target);
      const curItem = target.closest('.five-years__reviews-item');
      const curText = curItem.find('.five-years__item-text');
      
      curText.toggleClass('active');
  });

  // QA - accordion
  //прикрепляем клик по заголовкам acc-head
  $('#qa__list .qa__item-question').on('click', f_acc);

  //скрываем все кроме того, что должны открыть
  $('#qa__list .qa__item-answer').slideUp();
  
  function f_acc(){
    // открываем или скрываем блок под заголовком, по которому кликнули
      $(this).next().slideToggle(300);
      $(this).toggleClass('active');
  }

});

