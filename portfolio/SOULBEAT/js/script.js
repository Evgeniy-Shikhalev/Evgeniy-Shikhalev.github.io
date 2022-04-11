$(document).ready(function(){
    
    // ******scroll
  
    $(window).scroll(function() {
  
      if ($(this).scrollTop() > 1000) {
          $('.scroll_up').fadeIn();
      } else {
          $('.scroll_up').fadeOut();
      }
      
      nav.removeClass('active');
       
    });
  
  
    // ******burger-menu
  
    let nav = $('#nav');
    let burger = $('#burger');
  
    burger.on('click', function(){
      nav.toggleClass('active');
     
  
    })
  
  });
  