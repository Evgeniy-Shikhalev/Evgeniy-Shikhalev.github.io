$(document).ready(function(){
    
  // ******scroll

  $(window).scroll(function() {

    if ($(this).scrollTop() > 1000) {
        $('.scroll_up').fadeIn();
    } else {
        $('.scroll_up').fadeOut();
    }
    
    nav.removeClass('show');
    
  });


  // ******burger-menu

  let nav = $('#nav');
  let navToggle = $('#navToggle');

  navToggle.on('click', function(){
    nav.toggleClass('show');
   

  })

  

});
