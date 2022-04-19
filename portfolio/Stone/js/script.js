$(document).ready(function(){
    
    // ******scroll
  
    $(window).scroll(function() {
  
      if ($(this).scrollTop() > 800) {
          $('.scroll_up').fadeIn();
      } else {
          $('.scroll_up').fadeOut();
      }
      
      nav.removeClass('active');
       
    });
  
  
    // ******burger-menu
  
    let nav = $('#nav');
    let navToggle = $('#navToggle');
  
    navToggle.on('click', function(){
      nav.toggleClass('active');
     
  
    })
    
    AOS.init();
    
  });
  
