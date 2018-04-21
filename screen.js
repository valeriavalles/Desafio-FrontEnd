$(document).ready(function(){
    $('#scroll').hide(); 
    /*--- menu ----*/ 
    $('#open').on('click',function(){
        $('#menus').css("width","100%");
    });
    $('#close').on('click',function(){
        $('#menus').css("width","0%");
    }); 



   
window.onscroll = function() {
    myScrollOne();
    myScrollTwo();
};
  function myScrollOne() {
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop >50) {
        
         $('#scroll-cero').hide();
         console.log('atroabajo');
     } else {
         // $('#scroll-cero').show();
        console.log('otroarriba');
                
     }
  }
function myScrollTwo() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $('#scroll-cero').hide;
        $('#scroll').show();
        
        console.log('abajo');
    } else {
        $('#scroll-cero').show();
        $('#scroll').hide();
        
        console.log('arriba');
    }
}

});




