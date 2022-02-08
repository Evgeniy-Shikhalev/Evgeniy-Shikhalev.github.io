$(document).ready(function(){
    $('.slider').slick({
        // autoplay: true,
        fade: true,
        speed: 2000,
        prevArrow: false,
        nextArrow: '<button type="button" class="slick-next"><img class="arrow-right" src="images/appart/right.png" alt="arrow-right"></button>',
        responsive: [
            
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]
    });
  });