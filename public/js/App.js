$('#slider-cont').slick({

    // normal options...
    infinite: false,
    
    // the magic
    responsive: [{
    
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        infinite: false
      }
    }, 
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        // dots: true
    }
    }, 
    {
      breakpoint: 300,
      // settings: "unslick" // destroys slick
    
    }]
  });