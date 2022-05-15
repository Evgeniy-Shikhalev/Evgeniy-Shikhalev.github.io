$(document).ready(function(){  
    
  $(window).scroll(function() {
  
  
    nav.removeClass('active');
     
  });


    // ******burger-menu
  
    let nav = $('#nav');
    let burger = $('#burger');
  
    burger.on('click', function(){
      nav.toggleClass('active');
    }); 
    
});     
  
