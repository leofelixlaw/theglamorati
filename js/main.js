(function ($) {
  "use strict";
  $(window).on('load', function () {
    $('body').addClass('loaded');
  });
  $(function () {
    var header = $("#header"),
      brand = $("#navbrand"),
      yOffset = 0,
      triggerPoint = 200;
    $(window).on('scroll', function () {
      yOffset = $(window).scrollTop();
      if (yOffset >= triggerPoint) {
        brand.removeClass("invisible");
        header.addClass("navbar-fixed-top");
      } else {
        brand.addClass("invisible");
        header.removeClass("navbar-fixed-top");
      }
    });
  });
  $('.menu-wrap ul.nav').slicknav({
    prependTo: '.header-section .navbar',
    label: '',
    allowParentLinks: true
  });

  function getSlide() {
    var wW = $(window).width();
    if (wW < 991) {
      return 1;
    } else if (wW < 1170) {
      return 3;
    } else {
      return 5;
    }
  }

  function getSlideSpace() {
    var wW = $(window).width();
    if (wW < 991) {
      return 0;
    }
    return 20;
  }
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: getSlide(),
    loop: true,
    autoplay: true,
    centeredSlides: true,
    speed: 800,
    spaceBetween: 300,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    spaceBetween: getSlideSpace()
  });
  $('#review-carousel').owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    smartSpeed: 500,
    items: 1,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      }
    }
  });
  smoothScroll.init({
    offset: 60
  });

  $('.img_popup').venobox({
    share: ['facebook', 'twitter', 'download', 'linkedin'],
    numeratio: false,
    infinigall: false,
    autoplay: true
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll-to-top').fadeIn();
    } else {
      $('#scroll-to-top').fadeOut();
    }
  });

  var wow = new WOW({
    mobile: false,
    offset: 150
  });
  wow.init();
  
  function mailchimpCallback(resp) {
    if (resp.result === 'success') {
      $('#subscribe-result').addClass('subs-result');
      $('.subscription-success').text(resp.msg).fadeIn();
      $('.subscription-error').fadeOut();
    } else if (resp.result === 'error') {
      $('#subscribe-result').addClass('subs-result');
      $('.subscription-error').text(resp.msg).fadeIn();
    }
  }
  $.ajaxChimp.translations.es = {
    'submit': 'Submitting...',
    0: 'We have sent you a confirmation email',
    1: 'Please enter your email',
    2: 'An email address must contain a single @',
    3: 'The domain portion of the email address is invalid (the portion after the @: )',
    4: 'The username portion of the email address is invalid (the portion before the @: )',
    5: 'This email address looks fake or invalid. Please enter a real email address'
  };
})(jQuery);