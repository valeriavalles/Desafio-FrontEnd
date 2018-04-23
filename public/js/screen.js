$(document).ready(function(){
    $('#scroll').hide(); 

    /*--- menu ----*/ 
    $('#menu').on('click',function(){
        $('#menus').css("width","100%");
    });
    $('#close').on('click',function(){
        $('#menus').css("width","0%");
    }); 

   /* --- Scroll Efectos-Header ---*/ 
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
  
window.onscroll = function() {
    myScrollOne();

};  
});





