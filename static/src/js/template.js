 //var jQuery = jQuery.noConflict(true);

(function(jQuery){
	jQuery(document).ready(function(){

		jQuery(window).load(function() {
			jQuery("body").addClass("wide");
            jQuery("body").addClass("front");

           // jQuery("body").addClass("fixed-header-on");
		});

		// Enable Smooth Scroll only on Chrome and only on Win and Linux Systems
		var platform = navigator.platform.toLowerCase();
		if ((platform.indexOf('win') == 0 || platform.indexOf('linux') == 0) && !Modernizr.touch) {
			if (jQuery.browser.webkit) {
				//jQuery.webkitSmoothScroll();
				console.log("hello webkit");
			}
		};
		//Show dropdown on hover only for desktop devices
		//-----------------------------------------------
		var delay=0, setTimeoutConst;
		if ((Modernizr.mq('only all and (min-width: 768px)') && !Modernizr.touch) || jQuery("html.ie8").length>0) {
			jQuery('.main-navigation .navbar-nav>li.dropdown, .main-navigation li.dropdown>ul>li.dropdown').hover(
			function(){
				var jQuerythis = jQuery(this);
				setTimeoutConst = setTimeout(function(){
					jQuerythis.addClass('open').slideDown();
					jQuerythis.find('.dropdown-toggle').addClass('disabled');
				}, delay);

			},	function(){
				clearTimeout(setTimeoutConst );
				jQuery(this).removeClass('open');
				jQuery(this).find('.dropdown-toggle').removeClass('disabled');
			});
		};



		//Show dropdown on click only for mobile devices
		//-----------------------------------------------
		if (Modernizr.mq('only all and (max-width: 767px)') || Modernizr.touch) {
			jQuery('.main-navigation [data-toggle=dropdown], .header-top [data-toggle=dropdown]').on('click', function(event) {
			// Avoid following the href location when clicking
			event.preventDefault();
			// Avoid having the menu to close when clicking
			event.stopPropagation();
			// close all the siblings
			jQuery(this).parent().siblings().removeClass('open');
			// close all the submenus of siblings
			jQuery(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
			// opening the one you clicked on
			jQuery(this).parent().toggleClass('open');
			});
		};

		//Main slider
		//-----------------------------------------------

		//Revolution Slider
		if (jQuery(".slider-banner-container").length>0) {

			jQuery(".tp-bannertimer").show();

			jQuery('.slider-banner-container .slider-banner').show().revolution({
				delay:10000,
				startwidth:1140,
				startheight:520,

				navigationArrows:"solo",

				navigationStyle: "round",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				fullWidth:"on",

				spinner:"spinner0",

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});

			jQuery('.slider-banner-container .slider-banner-2').show().revolution({
				delay:10000,
				startwidth:1140,
				startheight:520,

				navigationArrows:"solo",

				navigationStyle: "preview4",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				fullWidth:"on",

				spinner:"spinner0",

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});

			jQuery('.slider-banner-container .slider-banner-3').show().revolution({
				delay:10000,
				startwidth:1140,
				startheight:520,
				dottedOverlay: "twoxtwo",

				parallax:"mouse",
				parallaxBgFreeze:"on",
				parallaxLevels:[3,2,1],

				navigationArrows:"solo",

				navigationStyle: "preview5",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				fullWidth:"on",

				spinner:"spinner0",

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});

			if (jQuery(".transparent.header").length>0 || jQuery(".offcanvas-container").length>0) {
				jQuery('.slider-banner-container .slider-banner-fullscreen').show().revolution({
					delay:10000,
					startwidth:1140,
					startheight:520,
					fullWidth:"off",
					fullScreen:"on",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "",

					navigationArrows:"solo",

					navigationStyle: "preview4",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					spinner:"spinner4",

					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					onHoverStop: "off",

					shuffle:"off",
					hideTimerBar:"on",

					autoHeight:"off",
					forceFullWidth:"off",

					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResolution:0,

					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					startWithSlide:0
				});
			} else {
				jQuery('.slider-banner-container .slider-banner-fullscreen').show().revolution({
					delay:10000,
					startwidth:1140,
					startheight:520,
					fullWidth:"off",
					fullScreen:"on",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "82px",

					navigationArrows:"solo",

					navigationStyle: "preview4",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					spinner:"spinner4",

					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					onHoverStop: "off",

					shuffle:"off",
					hideTimerBar:"on",

					autoHeight:"off",
					forceFullWidth:"off",

					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResolution:0,

					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					startWithSlide:0
				});
			};

			if (jQuery(".transparent.header").length>0 || jQuery(".offcanvas-container").length>0) {
				jQuery('.slider-banner-container .slider-banner-fullscreen-alt-nav').show().revolution({
					delay:10000,
					startwidth:1140,
					startheight:520,
					fullWidth:"off",
					fullScreen:"on",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "",

					navigationArrows:"solo",

					navigationStyle: "preview2",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					spinner:"spinner4",

					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					onHoverStop: "off",

					shuffle:"off",
					hideTimerBar:"on",

					autoHeight:"off",
					forceFullWidth:"off",

					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResolution:0,

					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					startWithSlide:0
				});
			} else {
				jQuery('.slider-banner-container .slider-banner-fullscreen-alt-nav').show().revolution({
					delay:10000,
					startwidth:1140,
					startheight:520,
					fullWidth:"off",
					fullScreen:"on",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "82px",

					navigationArrows:"solo",

					navigationStyle: "preview2",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					spinner:"spinner4",

					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					onHoverStop: "off",

					shuffle:"off",
					hideTimerBar:"on",

					autoHeight:"off",
					forceFullWidth:"off",

					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResolution:0,

					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					startWithSlide:0
				});
			};

		};

		//Owl carousel
		//-----------------------------------------------

		if (jQuery('.owl-carousel').length>0) {
			jQuery(".owl-carousel.carousel").owlCarousel({
				items: 4,
				pagination: false,
				navigation: true,
				navigationText: false
			});
			jQuery(".owl-carousel.carousel-autoplay").owlCarousel({
				items: 4,
				autoPlay: 5000,
				pagination: false,
				navigation: true,
				navigationText: false
			});
			jQuery(".owl-carousel.clients").owlCarousel({
				items: 4,
				autoPlay: true,
				pagination: false,
				itemsDesktopSmall: [992,5],
				itemsTablet: [768,4],
				itemsMobile: [479,3]
			});
			jQuery(".owl-carousel.content-slider").owlCarousel({
				singleItem: true,
				autoPlay: 5000,
				navigation: false,
				navigationText: false,
				pagination: false
			});
			jQuery(".owl-carousel.content-slider-with-controls").owlCarousel({
				singleItem: true,
				autoPlay: false,
				navigation: true,
				navigationText: false,
				pagination: true
			});
			jQuery(".owl-carousel.content-slider-with-controls-autoplay").owlCarousel({
				singleItem: true,
				autoPlay: 5000,
				navigation: true,
				navigationText: false,
				pagination: true
			});
			jQuery(".owl-carousel.content-slider-with-controls-bottom").owlCarousel({
				singleItem: true,
				autoPlay: false,
				navigation: true,
				navigationText: false,
				pagination: true
			});
		};

		// Animations
		//-----------------------------------------------
		if ((jQuery("[data-animation-effect]").length>0) && !Modernizr.touch) {
			jQuery("[data-animation-effect]").each(function() {
				var item = jQuery(this),
				animationEffect = item.attr("data-animation-effect");

				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					item.appear(function() {
						if(item.attr("data-effect-delay")) item.css("effect-delay", delay + "ms");
						setTimeout(function() {
							item.addClass('animated object-visible ' + animationEffect);

						}, item.attr("data-effect-delay"));
					}, {accX: 0, accY: -130});
				} else {
					item.addClass('object-visible');
				}
			});
		};

		// Text Rotators
		//-----------------------------------------------
		if (jQuery(".text-rotator").length>0) {
			jQuery(".text-rotator").each(function() {
				var tr_animationEffect = jQuery(this).attr("data-rotator-animation-effect");
				jQuery(this).Morphext({
					animation: ""+tr_animationEffect+"", // Overrides default "bounceIn"
					separator: ",", // Overrides default ","
					speed: 5000 // Overrides default 2000
				});
			});
		};

		// Stats Count To
		//-----------------------------------------------
		if (jQuery(".stats [data-to]").length>0) {
			jQuery(".stats [data-to]").each(function() {
				var stat_item = jQuery(this),
				offset = stat_item.offset().top;
				if(jQuery(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
					stat_item.addClass('counting');
					stat_item.countTo();
				};
				jQuery(window).scroll(function() {
					if(jQuery(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
						stat_item.addClass('counting');
						stat_item.countTo();
					}
				});
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if (jQuery('.isotope-container').length>0 || jQuery('.masonry-grid').length>0 || jQuery('.masonry-grid-fitrows').length>0) {
			jQuery(window).load(function() {
				jQuery('.masonry-grid').isotope({
					itemSelector: '.masonry-grid-item',
					layoutMode: 'masonry'
				});
				jQuery('.masonry-grid-fitrows').isotope({
					itemSelector: '.masonry-grid-item',
					layoutMode: 'fitRows'
				});
				jQuery('.isotope-container').fadeIn();
				var jQuerycontainer = jQuery('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				jQuery('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = jQuery(this).attr('data-filter');
					jQuery(".filters").find("li.active").removeClass("active");
					jQuery(this).parent().addClass("active");
					jQuerycontainer.isotope({ filter: filterValue });
					return false;
				});
			});
		};


		//hc-tabs
		//-----------------------------------------------
		if (jQuery('.hc-tabs').length>0) {
			jQuery(window).load(function() {
				var currentTab = jQuery(".hc-tabs .nav.nav-tabs li.active a").attr("href"),
				tabsImageAnimation = jQuery(".hc-tabs-top").find("[data-tab='" + currentTab + "']").attr("data-tab-animation-effect");
				jQuery(".hc-tabs-top").find("[data-tab='" + currentTab + "']").addClass("current-img show " + tabsImageAnimation + " animated");

				jQuery('.hc-tabs .nav.nav-tabs li a').on('click', function(event) {
					var currentTab = jQuery(this).attr("href"),
					tabsImageAnimation = jQuery(".hc-tabs-top").find("[data-tab='" + currentTab + "']").attr("data-tab-animation-effect");
					jQuery(".current-img").removeClass("current-img show " + tabsImageAnimation + " animated");
					jQuery(".hc-tabs-top").find("[data-tab='" + currentTab + "']").addClass("current-img show " + tabsImageAnimation + " animated");
				});
			});

		}

		// Animated Progress Bars
		//-----------------------------------------------
		if (jQuery("[data-animate-width]").length>0) {
			jQuery("[data-animate-width]").each(function() {
				jQuery(this).appear(function() {
					jQuery(this).animate({
						width: jQuery(this).attr("data-animate-width")
					}, 800 );
				}, {accX: 0, accY: -100});
			});
		};

		// Animated Progress Bars
		//-----------------------------------------------
		if (jQuery(".knob").length>0) {
			jQuery(".knob").knob();
		}

		// Charts
		//-----------------------------------------------
		if (jQuery(".graph").length>0) {
			// Creates random numbers you don't need this for real graphs
			var randomScalingFactor = function(){ return Math.round(Math.random()*500)};

			if (jQuery(".graph.line").length>0) {
				// Data for line charts
				var lineChartData = {
					labels : ["January","February","March","April","May","June","July"],
					datasets : [
					{
						label: "First dataset",
						fillColor : "rgba(188,188,188,0.2)",
						strokeColor : "rgba(188,188,188,1)",
						pointColor : "rgba(188,188,188,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(188,188,188,1)",
						data : [250,300,250,200,250,300,250]
					},
					{
						label: "Second dataset",
						fillColor : "rgba(126,187,205,0.2)",
						strokeColor : "rgba(126,187,205,1)",
						pointColor : "rgba(126,187,205,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(126,187,205,1)",
						data : [300,250,200,250,300,250,200]
					},
					{
						label: "Third dataset",
						fillColor : "rgba(98,187,205,0.2)",
						strokeColor : "rgba(98,187,205,1)",
						pointColor : "rgba(98,187,205,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(98,187,205,1)",
						data : [0,100,200,300,400,500,400]
					}
					]
				}

				// Line Charts Initialization
				jQuery(window).load(function() {
					var ctx = document.getElementById("lines-graph").getContext("2d");
					window.newLine = new Chart(ctx).Line(lineChartData, {
						responsive: true,
						bezierCurve : false
					});
				});
			}
			if (jQuery(".graph.bar").length>0) {
				// Data for bar charts
				var barChartData = {
					labels : ["January","February","March","April","May","June","July"],
					datasets : [
						{
							fillColor : "rgba(188,188,188,0.5)",
							strokeColor : "rgba(188,188,188,0.8)",
							highlightFill: "rgba(188,188,188,0.75)",
							highlightStroke: "rgba(188,188,188,1)",
							data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
						},
						{
							fillColor : "rgba(168,187,205,0.5)",
							strokeColor : "rgba(168,187,205,0.8)",
							highlightFill : "rgba(168,187,205,0.75)",
							highlightStroke : "rgba(168,187,205,1)",
							data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
						}
					]
				}

				// Bar Charts Initialization
				jQuery(window).load(function() {
					var ctx = document.getElementById("bars-graph").getContext("2d");
					window.myBar = new Chart(ctx).Bar(barChartData, {
						responsive : true
					});
				});
			}
			if (jQuery(".graph.pie").length>0) {
				// Data for pie chart
				var pieData = [
					{
						value: 120,
						color:"#09afdf",
						highlight: "#6BD5F4",
						label: "Blue"
					},
					{
						value: 120,
						color: "#FDB45C",
						highlight: "#FFC870",
						label: "Yellow"
					},
					{
						value: 120,
						color: "#4D5360",
						highlight: "#616774",
						label: "Dark Grey"
					}
				];

				// Pie Chart Initialization
				jQuery(window).load(function() {
					var ctx = document.getElementById("pie-graph").getContext("2d");
					window.myPie = new Chart(ctx).Pie(pieData);
				});
			}
			if (jQuery(".graph.doughnut").length>0) {
				// Data for doughnut chart
				var doughnutData = [
					{
						value: 120,
						color:"#09afdf",
						highlight: "#6BD5F4",
						label: "Blue"
					},
					{
						value: 120,
						color: "#FDB45C",
						highlight: "#FFC870",
						label: "Yellow"
					},
					{
						value: 120,
						color: "#4D5360",
						highlight: "#616774",
						label: "Dark Grey"
					}
				];

				// Doughnut Chart Initialization
				jQuery(window).load(function() {
					var ctx = document.getElementById("doughnut-graph").getContext("2d");
					window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
				});
			}
		};

		// Magnific popup
		//-----------------------------------------------
		if ((jQuery(".popup-img").length > 0) || (jQuery(".popup-iframe").length > 0) || (jQuery(".popup-img-single").length > 0)) {
			jQuery(".popup-img").magnificPopup({
				type:"image",
				gallery: {
					enabled: true,
				}
			});
			jQuery(".popup-img-single").magnificPopup({
				type:"image",
				gallery: {
					enabled: false,
				}
			});
			jQuery('.popup-iframe').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				preloader: false,
				fixedContentPos: false
			});
		};

		// Fixed header
		//-----------------------------------------------

		var	headerTopHeight = jQuery(".header-top").outerHeight(),
		headerHeight = jQuery("header.header.fixed").outerHeight();
		jQuery(window).scroll(function() {
			if ((jQuery(".header.fixed").length > 0)) {
				if((jQuery(this).scrollTop() > headerTopHeight+headerHeight) && (jQuery(window).width() > 767)) {
					jQuery("body").addClass("fixed-header-on");
					jQuery(".header.fixed").addClass('animated object-visible fadeInDown');
					if (!(jQuery(".header.transparent").length>0)) {
						if (jQuery(".banner:not(.header-top)").length>0) {
							jQuery(".banner").css("marginTop", (headerHeight)+"px");
						} else if (jQuery(".page-intro").length>0) {
							jQuery(".page-intro").css("marginTop", (headerHeight)+"px");
						} else if (jQuery(".page-top").length>0) {
							jQuery(".page-top").css("marginTop", (headerHeight)+"px");
						} else {
							jQuery("section.main-container").css("marginTop", (headerHeight)+"px");
						}
					}
				} else {
					jQuery("body").removeClass("fixed-header-on");
					jQuery("section.main-container").css("marginTop", (0)+"px");
					jQuery(".banner").css("marginTop", (0)+"px");
					jQuery(".page-intro").css("marginTop", (0)+"px");
					jQuery(".page-top").css("marginTop", (0)+"px");
					jQuery(".header.fixed").removeClass('animated object-visible fadeInDown');
				}
			};
		});


		// Sharrre plugin
		//-----------------------------------------------
		if (jQuery('#share').length>0) {
			jQuery('#share').sharrre({
				share: {
					twitter: true,
					facebook: true,
					googlePlus: true
				},
				template: '<ul class="social-links clearfix"><li class="facebook"><a href="#"><i class="fa fa-facebook"></i></a></li><li class="twitter"><a href="#"><i class="fa fa-twitter"></i></a></li><li class="googleplus"><a href="#"><i class="fa fa-google-plus"></i></a></li></ul>',
				enableHover: false,
				enableTracking: true,
				render: function(api, options){
					jQuery(api.element).on('click', '.twitter a', function() {
						api.openPopup('twitter');
					});
					jQuery(api.element).on('click', '.facebook a', function() {
						api.openPopup('facebook');
					});
					jQuery(api.element).on('click', '.googleplus a', function() {
						api.openPopup('googlePlus');
					});
				}
			});
		};

		// Contact forms validation
		//-----------------------------------------------
		if(jQuery("#contact-form").length>0) {
			jQuery("#contact-form").validate({
				submitHandler: function(form) {
					jQuery('.submit-button').button("loading");
					jQuery.ajax({
						type: "POST",
						url: "php/email-sender.php",
						data: {
							"name": jQuery("#contact-form #name").val(),
							"email": jQuery("#contact-form #email").val(),
							"subject": jQuery("#contact-form #subject").val(),
							"message": jQuery("#contact-form #message").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.sent == "yes") {
								jQuery("#MessageSent").removeClass("hidden");
								jQuery("#MessageNotSent").addClass("hidden");
								jQuery(".submit-button").removeClass("btn-default").addClass("btn-success").prop('value', 'Message Sent');
								jQuery("#contact-form .form-control").each(function() {
									jQuery(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
								});
							} else {
								jQuery("#MessageNotSent").removeClass("hidden");
								jQuery("#MessageSent").addClass("hidden");
							}
						}
					});
				},
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertBefore( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					subject: {
						required: true
					},
					message: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					subject: {
						required: "Please enter a subject"
					},
					message: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					jQuery(element).parent().removeClass("has-success").addClass("has-error");
					jQuery(element).siblings("label").addClass("hide");
				},
				success: function (element) {
					jQuery(element).parent().removeClass("has-error").addClass("has-success");
					jQuery(element).siblings("label").removeClass("hide");
				}
			});
		};

		/*if(jQuery("#footer-form").length>0) {
			jQuery("#footer-form").validate({
				submitHandler: function(form) {
					jQuery('.submit-button').button("loading");
					jQuery.ajax({
						type: "POST",
						url: "php/email-sender.php",
						data: {
							"name": jQuery("#footer-form #name2").val(),
							"email": jQuery("#footer-form #email2").val(),
							"subject": "Message from contact form",
							"message": jQuery("#footer-form #message2").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.sent == "yes") {
								jQuery("#MessageSent2").removeClass("hidden");
								jQuery("#MessageNotSent2").addClass("hidden");
								jQuery(".submit-button").removeClass("btn-default").addClass("btn-success").prop('value', 'Message Sent');
								jQuery("#footer-form .form-control").each(function() {
									jQuery(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
								});
							} else {
								jQuery("#MessageNotSent2").removeClass("hidden");
								jQuery("#MessageSent2").addClass("hidden");
							}
						}
					});
				},
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertAfter( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name2: {
						required: true,
						minlength: 2
					},
					email2: {
						required: true,
						email: true
					},
					message2: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name2: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email2: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					message2: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					jQuery(element).parent().removeClass("has-success").addClass("has-error");
					jQuery(element).siblings("label").addClass("hide");
				},
				success: function (element) {
					jQuery(element).parent().removeClass("has-error").addClass("has-success");
					jQuery(element).siblings("label").removeClass("hide");
				}
			});
		}; */

		/*if(jQuery("#sidebar-form").length>0) {

			jQuery("#sidebar-form").validate({
				submitHandler: function(form) {
					jQuery('.submit-button').button("loading");
					jQuery.ajax({
						type: "POST",
						url: "php/email-sender.php",
						data: {
							"name": jQuery("#sidebar-form #name3").val(),
							"email": jQuery("#sidebar-form #email3").val(),
							"subject": "Message from FAQ page",
							"category": jQuery("#sidebar-form #category").val(),
							"message": jQuery("#sidebar-form #message3").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.sent == "yes") {
								jQuery("#MessageSent3").removeClass("hidden");
								jQuery("#MessageNotSent3").addClass("hidden");
								jQuery(".submit-button").removeClass("btn-default").addClass("btn-success").prop('value', 'Message Sent');
								jQuery("#sidebar-form .form-control").each(function() {
									jQuery(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
								});
							} else {
								jQuery("#MessageNotSent3").removeClass("hidden");
								jQuery("#MessageSent3").addClass("hidden");
							}
						}
					});
				},
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertAfter( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name3: {
						required: true,
						minlength: 2
					},
					email3: {
						required: true,
						email: true
					},
					message3: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name3: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email3: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					message3: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					jQuery(element).parent().removeClass("has-success").addClass("has-error");
				},
				success: function (element) {
					jQuery(element).parent().removeClass("has-error").addClass("has-success");
				}
			});

		}; */
/*
		// Affix plugin
		//-----------------------------------------------
		if (jQuery("#affix").length>0) {
			jQuery(window).load(function() {

				var affixBottom = jQuery(".footer").outerHeight(true) + jQuery(".subfooter").outerHeight(true) + jQuery(".blogpost footer").outerHeight(true),
				affixTop = jQuery("#affix").offset().top;

				if (jQuery(".comments").length>0) {
					affixBottom = affixBottom + jQuery(".comments").outerHeight(true);
				}

				if (jQuery(".comments-form").length>0) {
					affixBottom = affixBottom + jQuery(".comments-form").outerHeight(true);
				}

				if (jQuery(".footer-top").length>0) {
					affixBottom = affixBottom + jQuery(".footer-top").outerHeight(true);
				}

				if (jQuery(".header.fixed").length>0) {
					jQuery("#affix").affix({
				        offset: {
				          top: affixTop-150,
				          bottom: affixBottom+100
				        }
				    });
				} else {
					jQuery("#affix").affix({
				        offset: {
				          top: affixTop-35,
				          bottom: affixBottom+100
				        }
				    });
				}

			});
		}
		if (jQuery(".affix-menu").length>0) {
			setTimeout(function () {
				var jQuerysideBar = jQuery('.sidebar')

				jQuerysideBar.affix({
					offset: {
						top: function () {
							var offsetTop      = jQuerysideBar.offset().top
							return (this.top = offsetTop - 65)
						},
						bottom: function () {
							var affixBottom = jQuery(".footer").outerHeight(true) + jQuery(".subfooter").outerHeight(true)
							if (jQuery(".footer-top").length>0) {
								affixBottom = affixBottom + jQuery(".footer-top").outerHeight(true)
							}
							return (this.bottom = affixBottom+50)
						}
					}
				})
			}, 100)
		}
*/ /*
		//Smooth Scroll
		//-----------------------------------------------
		if (jQuery(".smooth-scroll").length>0) {
			if(jQuery(".header.fixed").length>0) {
				jQuery('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = jQuery(this.hash);
						target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
						if (target.length) {
							jQuery('html,body').animate({
								scrollTop: target.offset().top-65
							}, 1000);
							return false;
						}
					}
				});
			} else {
				jQuery('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = jQuery(this.hash);
						target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
						if (target.length) {
							jQuery('html,body').animate({
								scrollTop: target.offset().top
							}, 1000);
							return false;
						}
					}
				});
			}
		}

		//Scroll Spy
		//-----------------------------------------------
		if(jQuery(".scrollspy").length>0) {
			jQuery("body").addClass("scroll-spy");
			if(jQuery(".fixed.header").length>0) {
				jQuery('body').scrollspy({
					target: '.scrollspy',
					offset: 85
				});
			} else {
				jQuery('body').scrollspy({
					target: '.scrollspy',
					offset: 20
				});
			}
		}
*/
		//Video Background
		//-----------------------------------------------
		if(jQuery(".video-background").length>0) {
			if (Modernizr.touch) {
				jQuery(".video-background").vide({
					mp4: "videos/background-video.mp4",
					webm: "videos/background-video.webm",
					poster: "videos/video-fallback.jpg"
				}, {
					volume: 1,
					playbackRate: 1,
					muted: true,
					loop: true,
					autoplay: true,
					position: "50% 60%", // Similar to the CSS `background-position` property.
					posterType: "jpg", // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
					resizing: true
				});
			} else {
				jQuery(".video-background").vide({
					mp4: "videos/background-video.mp4",
					webm: "videos/background-video.webm",
					poster: "videos/video-poster.jpg"
				}, {
					volume: 1,
					playbackRate: 1,
					muted: true,
					loop: true,
					autoplay: true,
					position: "50% 60%", // Similar to the CSS `background-position` property.
					posterType: "jpg", // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
					resizing: true
				});
			};

		};

		//Scroll totop
		//-----------------------------------------------
		jQuery(window).scroll(function() {
			if(jQuery(this).scrollTop() != 0) {
				jQuery(".scrollToTop").fadeIn();
			} else {
				jQuery(".scrollToTop").fadeOut();
			}
		});

		jQuery(".scrollToTop").click(function() {
			jQuery("body,html").animate({scrollTop:0},800);
		});

		//Modal
		//-----------------------------------------------
		if(jQuery(".modal").length>0) {
			jQuery(".modal").each(function() {
				jQuery(".modal").prependTo( "body" );
			});
		}

		// Pricing tables popovers
		//-----------------------------------------------
		if (jQuery(".pricing-tables").length>0) {
			jQuery(".plan .pt-popover").popover({
				trigger: 'hover'
			});
		};

		// Parallax section
		//-----------------------------------------------
		if ((jQuery(".parallax").length>0)  && !Modernizr.touch ){
			jQuery(".parallax").parallax("50%", 0.2, false);
		};

		if ((jQuery(".parallax-2").length>0)  && !Modernizr.touch ){
			jQuery(".parallax-2").parallax("50%", 0.2, false);
		};
		if ((jQuery(".parallax-text").length>0)  && !Modernizr.touch ){
			jQuery(window).scroll(function() {
				//Get the scoll position of the page
				scrollPos = jQuery(this).scrollTop();

				//Scroll and fade out the banner text
				jQuery('.parallax-text').css({
					'opacity' : 1-(scrollPos/400)
				});
			});
		};

		// Remove Button
		//-----------------------------------------------
		jQuery(".btn-remove").click(function() {
			jQuery(this).closest(".remove-data").remove();
		});

		// Shipping Checkbox
		//-----------------------------------------------
		if (jQuery("#shipping-info-check").is(':checked')) {
			jQuery("#shipping-information").hide();
		}
		jQuery("#shipping-info-check").change(function(){
			if (jQuery(this).is(':checked')) {
				jQuery("#shipping-information").slideToggle();
			} else {
				jQuery("#shipping-information").slideToggle();
			}
		});

		//This will prevent the event from bubbling up and close the dropdown when you type/click on text boxes (Header Top).
		//-----------------------------------------------
		jQuery('.header-top .dropdown-menu input').click(function(e) {
			e.stopPropagation();
		});

		// Offcanvas side navbar
		//-----------------------------------------------

		if (jQuery("#offcanvas").length>0) {
			jQuery('#offcanvas').offcanvas({
				disableScrolling: false,
				toggle: false
			});
		};

		if (jQuery("#offcanvas").length>0) {
			jQuery('#offcanvas [data-toggle=dropdown]').on('click', function(event) {
			// Avoid following the href location when clicking
			event.preventDefault();
			// Avoid having the menu to close when clicking
			event.stopPropagation();
			// close all the siblings
			jQuery(this).parent().siblings().removeClass('open');
			// close all the submenus of siblings
			jQuery(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
			// opening the one you clicked on
			jQuery(this).parent().toggleClass('open');
			});
		};

	}); // End document ready

})(this.jQuery);

if (jQuery(".btn-print").length>0)
{
	function print_window() {
		var mywindow = window;
		mywindow.document.close();
		mywindow.focus();
		mywindow.print();
		mywindow.close();
	}
}


if (jQuery(window).ready(function() {

        //Make categorie the first
        //var ch=jQuery('#products_attributes_filters');
        //var ch2=jQuery('#category-widget');
        //jQuery('#products_grid_before').html(ch2);
        //jQuery('#products_grid_before').append(ch);





    }));





  function cart() {
      jQuery('#refresh-cart').removeClass('hidden');

  }

  function removeContenteditable()
  {
      jQuery("body").removeAttr("contenteditable");
  }

  if (jQuery(window).ready(function()
      {
          url=window.location.href;
          result = url.split("/");
          shop_url=result[result.length-2];
          cart_url=result[result.length-1];
          if(shop_url=="shop" && cart_url=="cart")
          {setInterval("cart()", 3000)}

          setInterval("removeContenteditable()", 3000)
      }));
 jQuery('#menu_odoo').remove();

 jQuery(document).ready(function() {
 var owl = jQuery("#owl-related-products");
        owl.owlCarousel({
            items: 4,
            transitionStyle: "fadeUp",
            itemsCustom: false,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            autoPlay: true,
            stopOnHover: true,
            pagination: true,


        });
        var owl = jQuery("#owl-new-products");
        owl.owlCarousel({
            items: 4,
            transitionStyle: "fadeUp",
            itemsCustom: false,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            autoPlay: true,
            stopOnHover: true,
            pagination: true,


        });

     if (jQuery('.payment_method_list')) {
         var payment_html = jQuery('.payment_method_list');
         jQuery('.payment_block').html(payment_html);
     }

     if (jQuery('.zoom-product')) {

         jQuery('.zoom-product').elevateZoom(
             {
                 zoomType: "lens",
                 lensShape: "round",
                 lensSize: 200
             }
         );

     }

      jQuery("#category-widget li.active").each(function (index) {
            jQuery(this).parents('ul').css('display','block');
            jQuery(this).parents('ul').parent('li').addClass("open");
			jQuery(this).parents('ul').parent('li').find('a .category-widget-btn').addClass("open");

        });




 });

