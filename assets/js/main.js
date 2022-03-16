$(document).ready(function(){
    $('#slider-home').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    })
    });

    /* close menu resp */
    $(".close-navbar").click(function(){
        $('.navbar-collapse').removeClass('show')
    });

    /* sticky menu */
    
    $(window).scroll(function () {
        if($(window).scrollTop() > 140 && $(window).width() > 991 ) {
            $("header").addClass('sticky');
        } else {
            $("header").removeClass('sticky');
        }
});