//animation - initialize animation
$(document).ready(function () {
    'use strict';

    new WOW().init();
});


//navbar hide and show
$(document).ready(function () {
    'use strict';

    $('#follow-as-scroll').hide();

});
$(document).ready(function () {
    'use strict';

    $(window).scroll(function () {
        'use strict';

        if( $(window).scrollTop() < 80 ) {

            $('.navbar-fixed-top').show();
            $('#follow-as-scroll').hide();

        }

        else {

            $('.navbar-fixed-top').hide();
            $('#follow-as-scroll').show();

        }

    });

    $('#follow-as-scroll').click(function () {
        'use strict';

        $('.navbar-fixed-top').show();
        $('#follow-as-scroll').hide();

    });

});

//add smooth scrolling
$(document).ready(function () {
    'use strict';

    $('.nav-item, #scroll-to-top, #copyright-YKT-Link, .navbar-brand, .navbar-company-name > a, .header-slider-content-other-services-para, .header-slider-bottom-text h1 a').click(function() {
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

//highlight menu item on scroll
$(document).ready(function () {
    'use strict';

    $(".navbar-nav li a[href='#HOME']").parent().addClass("active");

    $(window).scroll(function () {
        'use strict';

        $('section,header').each(function () {
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

//active menu item on click
$(document).ready(function () {
    'use strict';

    $('.nav-item').click(function () {
        'use strict';

        $('.nav-item').parent().removeClass("active");
        $(this).parent().addClass("active");

    });

});


//Add bx-slider to gallery
//bxslider-1 (exterior)
$(document).ready(function () {
    'use strict';

    $('.bxslider-exterior').bxSlider({
        slideWidth: 400,
        minSlides: 1,
        maxSlides: 3,
        responsive: true,
        slideMargin: 5,
        controls: true,
        captions: true,
        infiniteLoop: false,
        hideControlOnEnd: true,
        touchEnabled: true,
        swipeThreshold: 0
    });
});

//bxslider-2 (interior)
$(document).ready(function () {
    'use strict';

    $('.bxslider-interior').bxSlider({
        slideWidth: 400,
        minSlides: 1,
        maxSlides: 3,
        responsive: true,
        slideMargin: 5,
        controls: true,
        captions: true,
        infiniteLoop: false,
        hideControlOnEnd: true,
        touchEnabled: true,
        swipeThreshold: 0
    });
});

//bxslider-3 (other)
$(document).ready(function () {
    'use strict';

    $('.bxslider-other').bxSlider({
        slideWidth: 400,
        minSlides: 1,
        maxSlides: 3,
        responsive: true,
        slideMargin: 5,
        controls: true,
        captions: true,
        infiniteLoop: false,
        hideControlOnEnd: true,
        touchEnabled: true,
        swipeThreshold: 0
    });
});


//gmaps - google maps
$(document).ready(function () {
    'use strict';

    var map2 = new GMaps({
        div: '#location-map-2',
        lat: '43.772297',
        lng: '-79.412849',
        zoom: 17,
        minZoom: 17,
        maxZoom: 18,
        zoomControl: false,
        panControl : false,
        streetViewControl : true,
        mapTypeControl: false,
        overviewMapControl: false
    });

    map2.addMarker({
        lat: '43.772297',
        lng: '-79.412849',
        title: 'yonge Kleen Tech',
        infoWindow: {
            content: '<h4>Yonge Kleen Tech</h4><p>Hand Car Wash</p>' +
            '<p>5255 Yonge Street,<br/>Parking Level P4,<br/>Level P4<br/>Toronto, ON<br/>M2N 5P8</p>'
        }
    });
});