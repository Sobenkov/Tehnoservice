$(document).ready(function() {
  var menuBtn = $('.top-nav-btn');
  var serviceBtnS = $('#iconSer');
  var serviceBtnC = $('#iconCat');
  var menu = $('.top-nav-menu');
  var serviceMenuS = $('.main-barSer');
  var serviceMenuC = $('.main-barCat');

  menuBtn.on('click',  function(event) {
    event.preventDefault();
    menu.toggleClass('top-nav-menu_active');
  });

  serviceBtnS.on('click',  function(event) {
    event.preventDefault();
    serviceBtnS.toggleClass('icon-up-open');
    serviceMenuS.toggleClass('main-barSer_active');
  });

  serviceBtnC.on('click',  function(event) {
    event.preventDefault();
    serviceBtnC.toggleClass('icon-up-open');
    serviceMenuC.toggleClass('main-barCat_active');
  });

});

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
  responsive: [
          {
          breakpoint: 600,
          settings:{
            slidesToShow: 1
          }
          },

          {
          breakpoint: 1024,
          settings:{
            slidesToShow: 2
          }
          },
              ]
});
