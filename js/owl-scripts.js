(function ($) {
  "use strict";

  /* ==============================================
CAROUSEL -->
=============================================== */
  $(document).ready(function () {
    $("#owl-portfolio-related").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });

    $("#owl-single-portfolio").owlCarousel({
      margin: 0,
      nav: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    $("#owl-testi-2").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      dots: false,
      navText: [
        "<i class='fa-solid fa-angle-left'></i>",
        "<i class='fa-solid fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
    $("#owl-client").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
    $("#testimonials1").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    $("#testimonials").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    $("#slider_carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    $("#owl-portfolio").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
  });

  setTimeout(console.log("test"), 3000);
})(jQuery);
