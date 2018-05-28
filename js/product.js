$(document).ready(function() {
  var carruselProductos = $('main .owl-carousel');
  carruselProductos.owlCarousel({
      items: 5,
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
});
