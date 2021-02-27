


// window.onscroll = function () {
//   if (window.scrollY > 50) {
//       document.getElementsByClassName('nav').addClass = 'scrolld';
//       console.log('scrolld');
//   } else {
//       document.getElementsByClassName('nav').removeClass = 'scrolld';
//       console.log('no scrolld');
//   }
// };


$(function(){
  'use strict';
  $(window).on('scroll', function (){
      if ($(window).scrollTop() > 50 ){
        $('.nav').addClass('scrolld');
      }else {
        $('.nav').removeClass('scrolld');
      }
      if ($(window).scrollTop() > 100){
        $('.toUp').fadeIn();
      } else {
        $('.toUp').fadeOut();
      }

      // console.log($($('a.nav_links-a[href^="#"]').attr('href')).offset().top);

      // $('a[href^="#"]').toggleClass('active', $(window).scrollTop() >= $($(this).attr('href')).offset().top);
      // $('a[href^="#"]').toggleClass(function () {
      //   if ($(window).scrollTop() == $($(this).attr('href')).offset().top) {
      //     return 'active';
      //   }
      // });

      $.fn['mena'] = function () {
        var that = $(this);
        that.attr('bla', $($(this).attr('href')).offset().top);
        if ($(window).scrollTop() <= $($(this).attr('href')).offset().top) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      }

      $('a.nav_links-a[href^="#"]').mena();
  });

});
