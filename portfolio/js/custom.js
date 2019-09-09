// NAVBAR TRANSPARENT TO SOLID

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $('.navbar').addClass('solid');
        }
        else{
            $('.navbar').removeClass('solid');
        }
    });
});

$(document).ready(function(){
    $('#hamburger-effect').click(function(){
        $('#hamburger-effect').toggleClass('pressed');
    })
})


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

// SMOOTH SCROLLING TO LINKS

$(document).ready(function(){
    $('a').on('click',function(event){
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

// BOUNCING DOWN ARROW
$(document).ready(function(){
    $(window).scroll(function(){
        $('arrow').css("opacity",1 - $(window).scrollTop / 250);
    });
});

// MEET THE TEAM SECTION

$(document).ready(function(){
    $("#team-slider").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        576 : {
            items: 2
        },
        768:{
            items: 3
        }
        }
    }
    );
});


// SKILLS COUNTER

$(document).ready(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 1800
    });
});


// OUR CLIENTS

$(document).ready(function(){
    $("#clients-slider").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 1700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768:{
            items: 3
        }
        }
    }
    );
});
