//Add bx-slider to gallery
//bxslider-1 (exterior)
$(document).ready(function () {
    'use strict';

    $('.bxslider-exterior').bxSlider({
        slideWidth: 400,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        response: true,
        slideMargin: 5,
        pause: 4000,
        // autoHover: true,
        controls: true,
        captions: true,
        touchEnabled: true,
        swipeThreshold: 300,
        oneToOneTouch: true
    });
});

//bxslider-2 (interior)
$(document).ready(function () {
    'use strict';

    $('.bxslider-interior').bxSlider({
        slideWidth: 400,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        response: true,
        slideMargin: 5,
        pause: 5000,
        // autoHover: true,
        controls: true,
        captions: true,
        touchEnabled: true,
        swipeThreshold: 300,
        oneToOneTouch: true
    });
});

//bxslider-3 (other)
$(document).ready(function () {
    'use strict';

    $('.bxslider-other').bxSlider({
        slideWidth: 400,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        response: true,
        slideMargin: 5,
        pause: 6000,
        // autoHover: true,
        controls: true,
        captions: true,
        touchEnabled: true,
        swipeThreshold: 300,
        oneToOneTouch: true
    });
});

//add smooth scrolling
$(document).ready(function () {
    'use strict';

    $('.nav-item, #scroll-to-top, #copyright-YKT-Link, .navbar-brand, .navbar-company-name > a, #header-slider-content-more-details-id').click(function() {
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

//active menu item on click
$(document).ready(function () {
    'use strict';

    $('.nav-item').click(function () {
        'use strict';

        $('.nav-item').parent().removeClass("active");
        $(this).parent().addClass("active");

    });

});

//highlight menu item on scroll
$(document).ready(function () {
    'use strict';

    $(window).scroll(function () {
        'use strict';

        $('section').each(function () {
            'use strict';

            var bb = $(this).attr("id"); //HOME, ABOUT, CONTACT, etc...
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;

            if( $(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei ) {
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
            }

        });

    });

});