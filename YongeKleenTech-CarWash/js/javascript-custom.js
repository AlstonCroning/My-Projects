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

//gmaps - google maps
$(document).ready(function () {
    'use strict';

    var map = new GMaps({
        div: '#location-map-1',
        lat: '43.772257',
        lng: '-79.412886',
        zoom: 17,
        minZoom: 17,
        maxZoom: 18,
        zoomControl: false,
        panControl : false,
        streetViewControl : true,
        mapTypeControl: false,
        overviewMapControl: false
    });

    map.addMarker({
        lat: '43.772257',
        lng: '-79.412886',
        title: 'yonge Kleen Tech',
        infoWindow: {
            content: '<h4>Yonge Kleen Tech</h4><p>Hand Car Wash</p>'
        }
    });

    var map2 = new GMaps({
        div: '#location-map-2',
        lat: '43.772257',
        lng: '-79.412886',
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
        lat: '43.772257',
        lng: '-79.412886',
        title: 'yonge Kleen Tech',
        infoWindow: {
            content: '<h4>Yonge Kleen Tech</h4><p>Hand Car Wash</p>'
        }
    });
});