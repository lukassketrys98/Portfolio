

// CLOSE MOBILE NAV ON CLICK
$(document).ready(function(){
    $(document).click(function(event){
        var clickOver = $(event.target);
        var _opened = $('.navbar-collapse').hasClass('show');
        if(_opened === true && !clickOver.hasClass("navbar-toggler")){
            $('.navbar-toggler').click();
        } 
    });
});




// MODERN SLIDER

    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: 100000,
        coverflowEffect: {
          rotate: 60,
          stretch: 0,
          depth: 40,
          modifier: 3,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });


      $(function() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
                $('.navorange').addClass('nonedisplayed')
            }
            if ($(this).scrollTop() < 400) {
                $('.navorange').removeClass('nonedisplayed')
            }
        });
    });