
$('#sliderHead').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  	autoplaySpeed: 30000,
  	fade: true,
});

$('#sliderProject').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '<i class="icon-right-open-1" aria-hidden="true"></i>',
  prevArrow: '<i class="icon-left-open-1" aria-hidden="true"></i>',
});
