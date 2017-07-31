(function($) {
    "use strict";
    
	/*--
	Preloader
	------------------------*/
	var win = $(window);
	win.on('load', function() {
		$('.preloader').fadeOut('slow');;
	});

    /*--
     Menu Sticky
    -----------------------------------*/
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 245) { 
            $(".sticker").removeClass("stick");
        }else{
            $(".sticker").addClass("stick");
        }
    }); 
    
    /*--
     One Page Menu
    -----------------------------------*/
    var TopOffsetId = $('.header-area').height() - 25;
    $('#main-menu nav').onePageNav({
        currentClass: 'active',
        scrollThreshold: 0.2,
        scrollSpeed: 1000,
        scrollOffset: TopOffsetId,
    });
       
    /*--
    Bootstrap Menu Fix For Mobile
    -----------------------------------*/
    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });
    
    /*--
	ImagesLoaded & isotope active
	------------------------------------*/
    $('.grid').imagesLoaded(function() {
        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });
    });
    
    /*--
	Portfolio menu active
	------------------------------------*/
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
     
    /*--
	Slider active
	------------------------------------*/
    $('.slider-active').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
      
    /*OwlCarousels testimonial Start*/
    $('#testimonial-carousel').owlCarousel({
        loop:true,
        items: 1,
        margin: 10, 
        autoplay:true,
        autoplayTimeout:3000,
        responsiveClass: true,
    });
         
    /*--
    Magnific Popup
    ------------------------*/
    $('.img-poppu').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
        
    /*--
    Smooth Scroll
    -----------------------------------*/
    $('.scroll-down').on('click', function(e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            offset: -80,
            scrollTarget: link.hash
        });
    });

    /* scrollUp jquery active
    --------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


	
        $(document).ready(function() {
          $('.progress .progress-bar').css("width",
                    function() {
                        return $(this).attr("aria-valuenow") + "%";
                    }
            )
        });
      
})(jQuery);