$(document).ready(function(){

  /*--- Redes Sociales ---*/

  $('#inst').on('mouseover', function(){
    $('#inst').attr("src","assets/iconos-img/inst2.png");
  });
  $('#wt').on('mouseover', function(){
    $('#wt').attr("src","assets/iconos-img/wt2.png");
  });
  $('#wt').on('mouseleave', function(){
    $('#wt').attr("src","assets/iconos-img/wt1.png");
  });
  $('#inst').on('mouseleave', function(){
    $('#inst').attr("src","assets/iconos-img/inst1.png");
  });

  /*--- Slider ---*/
$("#slider-cont").slick({
  // normal options...
    dots: true,
    infinite: true,
    speed: 300,
    autoplay:3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
});

  $('.iso-text').hide();
  $('.iso-text-two').hide();
  $('.iso-text-three').hide();
  $('.iso-text-four').hide();

  $('#cont-text-iso').on('click', function(){
    $('.iso-text').toggle();
    $('.iso-text-two').hide();
    $('.iso-text-three').hide();
    $('.iso-text-four').hide(); 
    console.log('aqui esta el texto');
  });
  $('#cont-text-2').on('click', function(){
    $('.iso-text-two').toggle();
    $('.iso-text').hide();
    $('.iso-text-three').hide();
    $('.iso-text-four').hide();

  });
  $('#cont-text-3').on('click', function(){
    $('.iso-text-three').toggle(); 
    $('.iso-text').hide();
    $('.iso-text-two').hide();
    $('.iso-text-four').hide();
  });
  $('#cont-text-4').on('click', function(){
    $('.iso-text-four').toggle(); 
    $('.iso-text').hide();
    $('.iso-text-two').hide();
    $('.iso-text-three').hide();
  });
});
