$(document).ready(function(){
    $('#scroll').hide(); 
    /*--- menu ----*/ 
    $('#menu-mobile').on('click',function(){
        $('#menus').css("width","100%");
    });
    $('#close').on('click',function(){
        $('#menus').css("width","0%");
    }); 

   

/*var media  = window.matchMedia("(min-width: 765px)")
    myFunction(media) // Call listener function at run time
    media.addListener(myFunction)
function myFunction(media) {
    var media  = window.matchMedia("(max-width: 765px)")
       if (media.matches &&  document.documentElement.scrollTop >50  ) { // If media query matches
        // $('#scroll-cero').hide();
        // $('#scroll').hide();
           //$('#menu-mobile').hide();
           console.log('media');
      } else {
          $('#menu-mobile').show();
           console.log('query');
      }
   }*/
  function myScrollOne() {
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop >50  ) {
        
         $('#scroll-cero').hide();
         $('#scroll').show();
         console.log('atroabajo');
     } else {
        
        $('#scroll-cero').show();
        $('#scroll').hide();
        console.log('otroarriba');
                
     }
  }
  
/*function myScrollTwo() {
   
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50  ) {

       // $('#scroll-cero').hide;
        $('#scroll').show();
        
        console.log('abajo');
    } else {
        $('#scroll-cero').show();
        $('#scroll').hide();
        
        console.log('arriba');
    }
}*/
window.onscroll = function() {
    myScrollOne();
    //myScrollTwo();
   // myFunction(media)
};

});




