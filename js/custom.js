(function ($) {
  "use strict";

  /* ==============================================
ANIMATION -->
=============================================== */

  new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  }).init();

  /* ==============================================
    Progress Bar (Skills Bar)
=============================================== */

  /* ==============================================
FUN -->
=============================================== */

  function count($this) {
    var current = parseInt($this.html(), 10);
    current = current + 10;
    $this.html(++current);
    if (current > $this.data("count")) {
      $this.html($this.data("count"));
    } else {
      setTimeout(function () {
        count($this);
      }, 10);
    }
  }
  $(".stat-count").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("0");
    count($(this));
  });

  /* ==============================================
BACK TOP -->
=============================================== */

  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
      jQuery(".backtotop").css({ bottom: "auto" });
    } else {
      jQuery(".backtotop").css({ bottom: "auto" });
    }
  });
  jQuery(".backtotop").click(function () {
    jQuery("html, body").animate({ scrollTop: "0px" }, 800);
    return false;
  });
  /* ==============================================
MENU HOVER -->
=============================================== */

  $(".dropdown").hover(
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn(300);
    },
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(300);
    }
  );

  /* ==============================================
SEARCH -->
=============================================== */

  /* ==============================================
    Tooltip
=============================================== */

  /* ---------------------------------------------
WINDOWS HEIGHT JS -->
 --------------------------------------------- */
  $(".js-height-full").height($(window).height());
  $(".js-height-parent").each(function () {
    $(this).height($(this).parent().first().height());
  });

  /* ==============================================
    Loader Effect
=============================================== */

  $(window).load(function () {
    $("#preloader").delay(500).fadeOut();
    $(".preloader").delay(600).fadeOut("slow");
  });
})(jQuery);

$(".schedule-filter li").on("click", function () {
  var tsfilter = $(this).data("tsfilter");
  $(".schedule-filter li").removeClass("active");
  $(this).addClass("active");
  if (tsfilter == "all") {
    $(".schedule-table").removeClass("filtering");
    $(".ts-item").removeClass("show");
  } else {
    $(".schedule-table").addClass("filtering");
  }
  $(".ts-item").each(function () {
    $(this).removeClass("show");
    if ($(this).data("tsmeta") == tsfilter) {
      $(this).addClass("show");
    }
  });
});

console.log("custom");

setTimeout(console.log("aaa"), 3000);

(function ($) {})(jQuery);

(function ($) {})(jQuery);

// jQuery(document).ready(function () {
//   jQuery(".tp-banner")
//     .show()
//     .revolution({
//       dottedOverlay: "none",
//       delay: 16000,
//       startwidth: 1170,
//       startheight: 700,
//       hideThumbs: 200,
//       thumbWidth: 100,
//       thumbHeight: 50,
//       thumbAmount: 5,
//       navigationType: "none",
//       navigationArrows: "solo",
//       navigationStyle: "preview3",
//       touchenabled: "on",
//       onHoverStop: "on",
//       swipe_velocity: 0.7,
//       swipe_min_touches: 1,
//       swipe_max_touches: 1,
//       drag_block_vertical: false,
//       parallax: "mouse",
//       parallaxBgFreeze: "on",
//       parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
//       keyboardNavigation: "off",
//       navigationHAlign: "center",
//       navigationVAlign: "bottom",
//       navigationHOffset: 0,
//       navigationVOffset: 20,
//       soloArrowLeftHalign: "left",
//       soloArrowLeftValign: "center",
//       soloArrowLeftHOffset: 20,
//       soloArrowLeftVOffset: 0,
//       soloArrowRightHalign: "right",
//       soloArrowRightValign: "center",
//       soloArrowRightHOffset: 20,
//       soloArrowRightVOffset: 0,
//       shadow: 0,
//       fullWidth: "off",
//       fullScreen: "on",
//       spinner: "spinner4",
//       stopLoop: "off",
//       stopAfterLoops: -1,
//       stopAtSlide: -1,
//       shuffle: "off",
//       autoHeight: "off",
//       forceFullWidth: "off",
//       hideThumbsOnMobile: "off",
//       hideNavDelayOnMobile: 1500,
//       hideBulletsOnMobile: "off",
//       hideArrowsOnMobile: "off",
//       hideThumbsUnderResolution: 0,
//       hideSliderAtLimit: 0,
//       hideCaptionAtLimit: 0,
//       hideAllCaptionAtLilmit: 0,
//       startWithSlide: 0,
//       fullScreenOffsetContainer: "",
//     });
// });

//courses tabs

// $(document).ready(function () {
//   $("#myTab a").click(function (e) {
//     e.preventDefault();
//     $(this).tab("show");
//   });
// });

// $('#myTab a[href="#german"]').tab("show");
// $('#myTab a[href="#english"]').tab("show");
// $('#myTab a[href="#italian"]').tab("show");

// $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
//   e.target; // newly activated tab
//   e.relatedTarget; // previous active tab
// });

// PARLLAX
/*!
 * parallax.js v1.3.1 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2015 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!(function (t, i, e, s) {
  function o(i, e) {
    var h = this;
    "object" == typeof e &&
      (delete e.refresh, delete e.render, t.extend(this, e)),
      (this.$element = t(i)),
      !this.imageSrc &&
        this.$element.is("img") &&
        (this.imageSrc = this.$element.attr("src"));
    var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
    return (
      r.length < 1 && r.push("center"),
      1 == r.length && r.push(r[0]),
      ("top" == r[0] ||
        "bottom" == r[0] ||
        "left" == r[1] ||
        "right" == r[1]) &&
        (r = [r[1], r[0]]),
      this.positionX != s && (r[0] = this.positionX.toLowerCase()),
      this.positionY != s && (r[1] = this.positionY.toLowerCase()),
      (h.positionX = r[0]),
      (h.positionY = r[1]),
      "left" != this.positionX &&
        "right" != this.positionX &&
        (this.positionX = isNaN(parseInt(this.positionX))
          ? "center"
          : parseInt(this.positionX)),
      "top" != this.positionY &&
        "bottom" != this.positionY &&
        (this.positionY = isNaN(parseInt(this.positionY))
          ? "center"
          : parseInt(this.positionY)),
      (this.position =
        this.positionX +
        (isNaN(this.positionX) ? "" : "px") +
        " " +
        this.positionY +
        (isNaN(this.positionY) ? "" : "px")),
      navigator.userAgent.match(/(iPod|iPhone|iPad)/)
        ? (this.iosFix &&
            !this.$element.is("img") &&
            this.$element.css({
              backgroundImage: "url(" + this.imageSrc + ")",
              backgroundSize: "cover",
              backgroundPosition: this.position,
            }),
          this)
        : navigator.userAgent.match(/(Android)/)
        ? (this.androidFix &&
            !this.$element.is("img") &&
            this.$element.css({
              backgroundImage: "url(" + this.imageSrc + ")",
              backgroundSize: "cover",
              backgroundPosition: this.position,
            }),
          this)
        : ((this.$mirror = t("<div />").prependTo("body")),
          (this.$slider = t("<img />").prependTo(this.$mirror)),
          this.$mirror.addClass("parallax-mirror").css({
            visibility: "hidden",
            zIndex: this.zIndex,
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden",
          }),
          this.$slider.addClass("parallax-slider").one("load", function () {
            (h.naturalHeight && h.naturalWidth) ||
              ((h.naturalHeight = this.naturalHeight || this.height || 1),
              (h.naturalWidth = this.naturalWidth || this.width || 1)),
              (h.aspectRatio = h.naturalWidth / h.naturalHeight),
              o.isSetup || o.setup(),
              o.sliders.push(h),
              (o.isFresh = !1),
              o.requestRender();
          }),
          (this.$slider[0].src = this.imageSrc),
          void (
            ((this.naturalHeight && this.naturalWidth) ||
              this.$slider[0].complete) &&
            this.$slider.trigger("load")
          ))
    );
  }
  function h(s) {
    return this.each(function () {
      var h = t(this),
        r = "object" == typeof s && s;
      this == i || this == e || h.is("body")
        ? o.configure(r)
        : h.data("px.parallax") ||
          ((r = t.extend({}, h.data(), r)),
          h.data("px.parallax", new o(this, r))),
        "string" == typeof s && o[s]();
    });
  }
  !(function () {
    for (
      var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0;
      s < e.length && !i.requestAnimationFrame;
      ++s
    )
      (i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"]),
        (i.cancelAnimationFrame =
          i[e[s] + "CancelAnimationFrame"] ||
          i[e[s] + "CancelRequestAnimationFrame"]);
    i.requestAnimationFrame ||
      (i.requestAnimationFrame = function (e) {
        var s = new Date().getTime(),
          o = Math.max(0, 16 - (s - t)),
          h = i.setTimeout(function () {
            e(s + o);
          }, o);
        return (t = s + o), h;
      }),
      i.cancelAnimationFrame ||
        (i.cancelAnimationFrame = function (t) {
          clearTimeout(t);
        });
  })(),
    t.extend(o.prototype, {
      speed: 0.2,
      bleed: 0,
      zIndex: -100,
      iosFix: !0,
      androidFix: !0,
      position: "center",
      overScrollFix: !1,
      refresh: function () {
        (this.boxWidth = this.$element.outerWidth()),
          (this.boxHeight = this.$element.outerHeight() + 2 * this.bleed),
          (this.boxOffsetTop = this.$element.offset().top - this.bleed),
          (this.boxOffsetLeft = this.$element.offset().left),
          (this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight);
        var t = o.winHeight,
          i = o.docHeight,
          e = Math.min(this.boxOffsetTop, i - t),
          s = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
          h = (this.boxHeight + (e - s) * (1 - this.speed)) | 0,
          r = ((this.boxOffsetTop - e) * (1 - this.speed)) | 0;
        if (h * this.aspectRatio >= this.boxWidth) {
          (this.imageWidth = (h * this.aspectRatio) | 0),
            (this.imageHeight = h),
            (this.offsetBaseTop = r);
          var n = this.imageWidth - this.boxWidth;
          this.offsetLeft =
            "left" == this.positionX
              ? 0
              : "right" == this.positionX
              ? -n
              : isNaN(this.positionX)
              ? (-n / 2) | 0
              : Math.max(this.positionX, -n);
        } else {
          (this.imageWidth = this.boxWidth),
            (this.imageHeight = (this.boxWidth / this.aspectRatio) | 0),
            (this.offsetLeft = 0);
          var n = this.imageHeight - h;
          this.offsetBaseTop =
            "top" == this.positionY
              ? r
              : "bottom" == this.positionY
              ? r - n
              : isNaN(this.positionY)
              ? (r - n / 2) | 0
              : r + Math.max(this.positionY, -n);
        }
      },
      render: function () {
        var t = o.scrollTop,
          i = o.scrollLeft,
          e = this.overScrollFix ? o.overScroll : 0,
          s = t + o.winHeight;
        (this.visibility =
          this.boxOffsetBottom > t && this.boxOffsetTop < s
            ? "visible"
            : "hidden"),
          (this.mirrorTop = this.boxOffsetTop - t),
          (this.mirrorLeft = this.boxOffsetLeft - i),
          (this.offsetTop =
            this.offsetBaseTop - this.mirrorTop * (1 - this.speed)),
          this.$mirror.css({
            transform: "translate3d(0px, 0px, 0px)",
            visibility: this.visibility,
            top: this.mirrorTop - e,
            left: this.mirrorLeft,
            height: this.boxHeight,
            width: this.boxWidth,
          }),
          this.$slider.css({
            transform: "translate3d(0px, 0px, 0px)",
            position: "absolute",
            top: this.offsetTop,
            left: this.offsetLeft,
            height: this.imageHeight,
            width: this.imageWidth,
            maxWidth: "none",
          });
      },
    }),
    t.extend(o, {
      scrollTop: 0,
      scrollLeft: 0,
      winHeight: 0,
      winWidth: 0,
      docHeight: 1 << 30,
      docWidth: 1 << 30,
      sliders: [],
      isReady: !1,
      isFresh: !1,
      isBusy: !1,
      setup: function () {
        if (!this.isReady) {
          var s = t(e),
            h = t(i);
          h
            .on("resize.px.parallax load.px.parallax", function () {
              (o.winHeight = h.height()),
                (o.winWidth = h.width()),
                (o.docHeight = s.height()),
                (o.docWidth = s.width()),
                (o.isFresh = !1),
                o.requestRender();
            })
            .on("scroll.px.parallax load.px.parallax", function () {
              var t = o.docHeight - o.winHeight,
                i = o.docWidth - o.winWidth;
              (o.scrollTop = Math.max(0, Math.min(t, h.scrollTop()))),
                (o.scrollLeft = Math.max(0, Math.min(i, h.scrollLeft()))),
                (o.overScroll = Math.max(
                  h.scrollTop() - t,
                  Math.min(h.scrollTop(), 0)
                )),
                o.requestRender();
            }),
            (this.isReady = !0);
        }
      },
      configure: function (i) {
        "object" == typeof i &&
          (delete i.refresh, delete i.render, t.extend(this.prototype, i));
      },
      refresh: function () {
        t.each(this.sliders, function () {
          this.refresh();
        }),
          (this.isFresh = !0);
      },
      render: function () {
        this.isFresh || this.refresh(),
          t.each(this.sliders, function () {
            this.render();
          });
      },
      requestRender: function () {
        var t = this;
        this.isBusy ||
          ((this.isBusy = !0),
          i.requestAnimationFrame(function () {
            t.render(), (t.isBusy = !1);
          }));
      },
    });
  var r = t.fn.parallax;
  (t.fn.parallax = h),
    (t.fn.parallax.Constructor = o),
    (t.fn.parallax.noConflict = function () {
      return (t.fn.parallax = r), this;
    }),
    t(e).on("ready.px.parallax.data-api", function () {
      t('[data-parallax="scroll"]').parallax();
    });
})(jQuery, window, document);

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".gallery-img");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
    img.classList.add("gallery-img-modal");
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});

// lightbox.addEventListener("keydown", (e) => {
//   let keyCode = e.keyCode;
//   if (keyCode === 27) {
//     lightbox.classList.remove("active");
//   }
// });
