$(document).ready(function() {
  var carruselProductos = $('main .owl-carousel');
  carruselProductos.owlCarousel({
      items: 2,
      loop: true,
      navigation: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      margin: 10,
      responsive: {
        480: {
          items: 3
        },
        768: {
          items: 4
        },
        1024: {
          items: 5
        }
      }
  });

  $('.play').on('click',function() {
      carruselProductos.trigger('play.owl.autoplay',[3000])
  })
  $('.stop').on('click',function() {
      carruselProductos.trigger('stop.owl.autoplay')
  });
});
