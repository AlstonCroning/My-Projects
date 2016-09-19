//Add bx-slider to gallery
//bxslider-1 (exterior)
$(document).ready(function () {
    $('.bxslider-exterior').bxSlider({
        slideWidth: 400,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        response: true,
        slideMargin: 5,
        pause: 4000,
        autoHover: true,
        controls: true,
        captions: true,
        touchEnabled: true
    });
});

//bxslider-2 (interior)
$(document).ready(function () {
    $('.bxslider-interior').bxSlider({
        slideWidth: 400,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        response: true,
        slideMargin: 5,
        pause: 5000,
        autoHover: true,
        controls: true,
        captions: true,
        touchEnabled: true
    });
});

//bxslider-3 (other)
$(document).ready(function () {
    $('.bxslider-other').bxSlider({
        slideWidth: 400,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        response: true,
        slideMargin: 5,
        pause: 6000,
        autoHover: true,
        controls: true,
        captions: true,
        touchEnabled: true
    });
});

//add smooth scrolling
$(document).ready(function () {
    'use strict';

    $('.nav-item, #scroll-to-top').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});