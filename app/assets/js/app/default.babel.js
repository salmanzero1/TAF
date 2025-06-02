(function ($) {
  const app = {
    windowHeight: $(window).height(),
    windowWidth: $(window).width(),
    isMobile: false,
    isTouch: false,
    resizeTimeoutID: null,
    $body: $("body"),
    culture: "en",
    isIe: false,
    responsiveBreakpointValue: "(max-width: 1200px)",
    responsiveBreakpointBoolean: false,
    hamburgerBoolean: false,
    hamburgerBoolean2: false,
    successSwiper: false,
    tabSwiper: null,
    disableAnimation: false,
    lifestyleSwiper: null,
    markersArray: [],
    //	gallerySlider: '',
    detectDevice() {
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        ) {
          app.isMobile = true;
        }
      })(navigator.userAgent || navigator.vendor || window.opera);
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        app.isTouch = true;
        app.$body.addClass("touch");
      } else {
        app.$body.addClass("no-touch");
      }
    },

    detectCulture() {
      if ($("body").hasClass("ar")) {
        app.culture = "ar";
      }
    },

    windowResize() {
      app.windowHeight = $(window).height();
      app.windowWidth = $(window).width();
      $(".spotlight__slide.swiper-slide").height(
        $(".swiper-spacer").outerHeight()
      );
    },

    resizeListner() {
      if (!app.isMobile) {
        $(window).resize(() => {
          clearTimeout(app.resizeTimeoutID);
          app.resizeTimeoutID = setTimeout(app.windowResize, 500);
        });
      } else {
        window.addEventListener("orientationchange", () => {
          app.windowResize();
        });
      }
    },

    addEventListner() {
      $(".header__menu").click(function () {
        $("header.header").toggleClass("active");
        $("body").toggleClass("menu-open");

        $(".header.active .nav-link").click(function () {
          $("header.header").removeClass("active");
          $("body").removeClass("menu-open");
        });
      });

      $(".menu__close").click(function () {
        $(".header.header").removeClass("active");
        $("body").removeClass("menu-open");
      });

      $(document).ready(function () {
        // Cache selectors for better performance
        var $navLinks = $(".header__nav-list .nav-link");

        // Function to update the active class
        function setActiveNavLink() {
          var scrollPos = $(document).scrollTop(); // Get the current scroll position
          var isAnySectionActive = false; // Flag to track if any section is active

          $navLinks.each(function () {
            var section = $(this).attr("href"); // Get the target section ID from the link href
            var $targetSection = $(section); // Select the target section element

            if ($targetSection.length) {
              var sectionOffsetTop = $targetSection.offset().top - 60; // Adjust for sticky header (if any)
              var sectionHeight = $targetSection.outerHeight(); // Get section height

              // Check if the section is in view (adjust offset for sticky header if needed)
              if (
                scrollPos >= sectionOffsetTop &&
                scrollPos < sectionOffsetTop + sectionHeight
              ) {
                $navLinks.removeClass("active"); // Remove active class from all
                $(this).addClass("active"); // Add active class to the current section's link
                isAnySectionActive = true; // Mark that a section is active
              }
            }
          });

          // If no section is active, remove all active classes
          if (!isAnySectionActive) {
            $navLinks.removeClass("active");
          }
        }

        // Run the function on page scroll and on page load
        $(window).on("scroll", setActiveNavLink);
        setActiveNavLink();
      });
    },

    lazyLoad: function () {
      var lazyLoadInstance = new LazyLoad({
        // Your custom settings go here
      });
    },

    swiper: function () {
      const swiperLeadership = new Swiper(".swiper-leadership", {
        slidesPerView: "auto",
        spaceBetween: 16,

        navigation: {
          nextEl: ".swiper-button-next-leader",
          prevEl: ".swiper-button-prev-leader",
        },
      });

      let aboutSwiperText = new Swiper(".swiper-about-text", {
        slidesPerView: 1,
        // spaceBetween: 20,

        navigation: {
          nextEl: ".swiper-button-next-about",
          prevEl: ".swiper-button-prev-about",
        },
      });

      let aboutSwiperImage = new Swiper(".swiper-about-image", {
        slidesPerView: 1,
        effect: "fade",
      });

      let syncing = false;

      aboutSwiperText.on("slideChangeTransitionStart", () => {
        if (!syncing) {
          syncing = true;
          aboutSwiperImage.slideTo(aboutSwiperText.activeIndex);
          syncing = false;
        }
      });

      aboutSwiperImage.on("slideChangeTransitionStart", () => {
        if (!syncing) {
          syncing = true;
          aboutSwiperText.slideTo(aboutSwiperImage.activeIndex);
          syncing = false;
        }
      });
    },

    tabs() {
      const tabNav = $(".tabs__head");
      const activeClass = "active";
      let $this;
      let currentIndex;

      $.each(tabNav, function (index, elem) {
        const selector = $(elem);
        const tabNavList = selector.find("> ul > li");
        const tabPane = selector.parent().find(".tabs__pane");
        tabNavList.eq(0).find("> a").addClass(activeClass);
        tabPane.eq(0).addClass(activeClass);

        tabNavList.on("click", function (e) {
          $this = $(this);

          if (app.isMobile) {
            //	$this.find('a').get(0).scrollIntoView(true)
          } else {
            //	$this.find('a').get(0).scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
          }

          // if (!$this.parent().hasClass('js-hash-clickable')) {
          // 	// debugger
          // 	e.preventDefault()
          // }
          currentIndex = $this.index();
          if ($this.parent().hasClass("js-has-slide-to"))
            app.tabSwiper.slideTo(currentIndex);

          tabPane.removeClass(activeClass);
          if ($this.closest(".tabs__head").next(".tabs__body").length) {
            $this
              .closest(".tabs__head")
              .next(".tabs__body")
              .find("> .tabs__pane")
              .eq(currentIndex)
              .addClass(activeClass);
          } else {
            $this
              .closest(".tabs__head")
              .next(".tabs__outer")
              .find("> .tabs__body")
              .find("> .tabs__pane")
              .eq(currentIndex)
              .addClass(activeClass);
          }

          // console.log($this.closest('.tabs__head').next().find('.tabs__pane').eq(currentIndex).find('.tabs-nav__list .tabs-nav__link').eq(0).trigger('click'))
          tabNavList.find("> a").removeClass(activeClass);

          if (!$this.find("> a").hasClass(activeClass)) {
            $this.find("> a").addClass(activeClass);
          }

          if ($this.parents(".tabs__body").length === 0) {
            $(".tabs__pane.active")
              .find(".tabs-nav__list .tabs-nav__link")
              .eq(0)
              .trigger("click");
          }
          // console.log("clicked")
        });
      });
      let url = window.location;
      let qs = url.hash;
      let qsText = qs.slice(1, qs.length);

      if (qsText) {
        $('[href="#' + qsText + '"]').click();

        // if ($('.js-hash-clickable').length) {
        // 	$('[href="#' + qsText + '"]').click();
        // 	$('html, body').animate({
        // 		scrollTop: $('[href="#' + qsText + '"]').offset().top - 100
        // 	}, 300);
        // } else {
        // 	$('.tabs-nav__list').each(function (i, elem) {
        // 		if ($(elem).find('.tabs-nav__link').text().toLowerCase() === qsText) {
        // 			$(elem).find('.tabs-nav__link').click();
        // 			$('html, body').animate({
        // 				scrollTop: $('.tabs__body').offset().top
        // 			}, 300);
        // 		}
        // 	});
        // }
      }
    },

    rangeSlider() {
      let homeLoanAmount = $("#home-loan-amount").attr("data-min");
      let homeLoanTenure = $("#home-loan-tenure").attr("data-min");
      let personalLoanAmount = $("#personal-loan-amount").attr("data-min");
      let personalLoanTenure = $("#personal-loan-tenure").attr("data-min");
      let autoLoanAmount = $("#auto-loan-amount").attr("data-min");
      let autoLoanTenure = $("#auto-loan-tenure").attr("data-min");

      var $range = $(".js-range-slider"),
        min = 1,
        max = 10;

      $range.ionRangeSlider({
        skin: "modern",
        type: "single",
        min: min,
        max: max,
        from: 10,
        prettify: function (num) {
          var tmp_min = min,
            tmp_max = max,
            tmp_num = num;

          if (min < 0) {
            tmp_min = 0;
            tmp_max = max - min;
            tmp_num = num - min;
            tmp_num = tmp_max - tmp_num;
            return tmp_num + min;
          } else {
            num = max - num;
            return num;
          }
        },
      });

      $(".range-slider").each(function () {
        var $this = $(this),
          rangeInput = $(this);

        var min =
          $this.data("min") === "" || $this.data("min") === undefined
            ? 5
            : $this.data("min");
        var max =
          $this.data("max") === "" || $this.data("max") === undefined
            ? 30
            : $this.data("max");

        // debugger

        //console.log(min + ' : min');
        //console.log(max + ' : max');

        var reverse = function (num) {
          return max - (num - min);
        };

        rangeInput.ionRangeSlider({
          prettify_enabled: true,
          prettify_separator: ",",

          from: app.culture === "ar" ? max : min,

          prettify: function (num) {
            if (app.culture === "ar") {
              return (num = reverse(num));
              /* var tmp_min = min,
								tmp_max = max,
								tmp_num = num;

							if (min < 0) {
								tmp_min = 0;
								tmp_max = max - min;
								tmp_num = num - min;
								tmp_num = tmp_max - tmp_num;
								return tmp_num + min;
							} else {
								num = max - num;
								return num + 1;
							} */
            } else {
              return num;
            }
          },

          /* prettify: function (num) {
						//console.log(num);

						if (app.isRTL) {
							num = reverse(num);
						}

						var tmp_min = min,
							tmp_max = max,
							tmp_num = num;

						if (min < 0) {
							tmp_min = 0;
							tmp_max = max - min;
							tmp_num = num - min;
							tmp_num = tmp_max - tmp_num;
							return tmp_num + min;
						} else {
							num = max - num;
							return num;
						}




					}, */

          /* 	onStart: function (data) {
							fixPosition(data.slider, 0);
						}, */

          onChange: function (data) {
            if ($(data.input).attr("id") === "home-loan-amount") {
              homeLoanAmount = data.from_pretty;
            }
            if ($(data.input).attr("id") === "home-loan-tenure") {
              homeLoanTenure = data.from_pretty;
            }
            if ($(data.input).attr("id") === "personal-loan-amount") {
              personalLoanAmount = data.from_pretty;
            }
            if ($(data.input).attr("id") === "personal-loan-tenure") {
              personalLoanTenure = data.from_pretty;
            }
            if ($(data.input).attr("id") === "auto-loan-amount") {
              autoLoanAmount = data.from_pretty;
            }
            if ($(data.input).attr("id") === "auto-loan-tenure") {
              autoLoanTenure = data.from_pretty;
            }

            app._calculateLoan(
              homeLoanAmount,
              homeLoanTenure,
              parseFloat($("#home-loan-values").attr("data-interest")),
              $("#home-loan-values")
            );
            app._calculateLoan(
              personalLoanAmount,
              personalLoanTenure,
              parseFloat($("#personal-loan-values").attr("data-interest")),
              $("#personal-loan-values")
            );
            app._calculateLoan(
              autoLoanAmount,
              autoLoanTenure,
              parseFloat($("#auto-loan-values").attr("data-interest")),
              $("#auto-loan-values")
            );
          },
        });
      });

      $(".range-slider-100").ionRangeSlider({
        prettify_enabled: true,
        prettify_separator: ",",
        onChange: function (data) {
          if ($(data.input).attr("id") === "home-loan-amount") {
            homeLoanAmount = data.from;
          }
          if ($(data.input).attr("id") === "home-loan-tenure") {
            homeLoanTenure = data.from;
          }
          if ($(data.input).attr("id") === "personal-loan-amount") {
            personalLoanAmount = data.from;
          }
          if ($(data.input).attr("id") === "personal-loan-tenure") {
            personalLoanTenure = data.from;
          }
          if ($(data.input).attr("id") === "auto-loan-amount") {
            autoLoanAmount = data.from;
          }
          if ($(data.input).attr("id") === "auto-loan-tenure") {
            autoLoanTenure = data.from;
          }

          app._calculateLoan(
            homeLoanAmount,
            homeLoanTenure,
            parseFloat($("#home-loan-values").attr("data-interest")),
            $("#home-loan-values")
          );
          app._calculateLoan(
            personalLoanAmount,
            personalLoanTenure,
            parseFloat($("#personal-loan-values").attr("data-interest")),
            $("#personal-loan-values")
          );
          app._calculateLoan(
            autoLoanAmount,
            autoLoanTenure,
            parseFloat($("#auto-loan-values").attr("data-interest")),
            $("#auto-loan-values")
          );
        },
      });
    },

    accordion: function () {
      var elem = $(".accordion"),
        elemTarget = elem.find(".accordion__heading"),
        activeClass = "accordion--active",
        contentClass = ".accordion__content",
        headerHeight = $(".header").height(),
        topOffsetValue;
      $(".tabs__cont").on("click", ".accordion__heading", function (e) {
        e.stopPropagation();
        // //console.log("accordion");
        var $this = $(this);
        $this.parent(elem).toggleClass(activeClass);
        if ($this.parent(elem).hasClass(activeClass)) {
          $this.parent(elem).find(contentClass).stop().slideDown(200);
          $this
            .parent(elem)
            .siblings()
            .find(contentClass)
            .stop()
            .slideUp(500, function () {
              //	topOffsetValue = $this.offset().top;
              //$("html").scrollTop(topOffsetValue - headerHeight)
            });
          $this.parent(elem).siblings().removeClass(activeClass);
        } else {
          $this.parent(elem).find(contentClass).stop().slideUp();
        }
      });

      $(".accordion__icon").click(function () {
        $(this).next(".accordion__heading").trigger("click");
      });
      // multi accordion
      $(".multi-toggle__icon").click(function (e) {
        var $this = $(this);

        $this.parent().find(".inner").eq(0).slideToggle().toggleClass("show");
        $this.toggleClass("active");
        e.stopPropagation();
        console.log($this);
        // if ($this.next().hasClass('show')) {
        // 	$this.removeClass('active');
        // 	$this.next().removeClass('show');
        // 	$this.next().slideUp(350);
        // } else {
        // 	$this.parent().parent().find('li .inner').removeClass('show');
        // 	$this.parent().parent().find('li .inner').slideUp(350);
        // 	$this.addClass('active');
        // 	$this.next().toggleClass('show');
        // 	$this.next().slideToggle(350);
        // }
      });
    },

    spotlight: function () {
      $(document).ready(function () {
        // Get both video elements
        var desktopVideo = $("video.desktop_video").get(0);
        var mobileVideo = $("video.mobile_video").get(0);

        // Initially hide the unmute icon since videos are muted by default
        $("#muteButton .icon-unmute").hide();

        $("#muteButton").on("click", function () {
          // Check if the desktop video is visible
          if ($("video.desktop_video").is(":visible")) {
            toggleMute(desktopVideo);
          }
          // Check if the mobile video is visible
          else if ($("video.mobile_video").is(":visible")) {
            toggleMute(mobileVideo);
          }
        });

        // Function to toggle mute/unmute
        function toggleMute(video) {
          if (video.muted) {
            video.muted = false;
            $("#muteButton .icon-mute").hide(); // Hide mute icon
            $("#muteButton .icon-unmute").show(); // Show unmute icon
          } else {
            video.muted = true;
            $("#muteButton .icon-unmute").hide(); // Hide unmute icon
            $("#muteButton .icon-mute").show(); // Show mute icon
          }
        }
      });
    },

    random() {},

    init() {
      app.detectCulture();
      app.detectDevice();
      app.resizeListner();
      app.addEventListner();
      app.lazyLoad();
      app.swiper();
      app.tabs();
      // app.customSelect();
      app.accordion();
      app.spotlight();
      app.random();
    },
  };
  window.app = app;
})(jQuery);

$(document).ready(() => {
  window.app.init();
});
