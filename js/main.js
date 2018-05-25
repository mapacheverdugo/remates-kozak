$(document).ready(function() {
  var carruselHeader = $('header .owl-carousel');
  carruselHeader.owlCarousel({
      items: 1,
      loop: true,
      navigation: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true
  });

  $('.play').on('click',function() {
      carruselHeader.trigger('play.owl.autoplay',[5000])
  })
  $('.stop').on('click',function() {
      carruselHeader.trigger('stop.owl.autoplay')
  });

  var carruselProductos = $('main .owl-carousel');
  carruselProductos.owlCarousel({
      items: 4,
      loop: true,
      navigation: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      margin: 10
  });

  $('.play').on('click',function() {
      carruselProductos.trigger('play.owl.autoplay',[3000])
  })
  $('.stop').on('click',function() {
      carruselProductos.trigger('stop.owl.autoplay')
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() > 30) {
      $('header .main-bar').addClass('fixed-top');
      $('header .bottom-bar').css("margin-top", "78px")
    }

    if ($(window).scrollTop() < 30) {
      $('header .main-bar').removeClass('fixed-top');
      $('header .bottom-bar').css("margin-top", "0")
    }
  });
});
