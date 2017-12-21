$(document).ready(function () {
    "use strict";

    /* Owl Slider For Banner 
    ======================================================*/
    if ($('#tl-banner-slider').length) {
        $('#tl-banner-slider').owlCarousel({
            loop:true,
            dots: false,
            nav:false,
            navText:'',
            items:1,
            autoplay: true,
            smartSpeed:2000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplayHoverPause:false,

        });
    }

     /* Owl Slider For Featured Slider
    ======================================================*/
    if ($('#tl-blog-slider').length) {
        $('#tl-blog-slider').owlCarousel({
            loop:true,
            dots: false,
            nav:true,
            navText:'',
            items:3,
            smartSpeed:1000,
            padding:0,
            margin: 30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:1,
                },
                992:{
                    items:1,
                },
                1199:{
                    items:1,
                }
            }
        });
    }

     /* Owl Slider For Featured Slider
    ======================================================*/
    if ($('#tl-blog-slider_v2').length) {
        $('#tl-blog-slider_v2').owlCarousel({
            loop:true,
            true: false,
            false:true,
            navText:'',
            items:3,
            smartSpeed:1000,
            padding:0,
            margin: 30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:1,
                },
                992:{
                    items:1,
                },
                1199:{
                    items:1,
                }
            }
        });
    }

    /* Owl Slider For Testimonial
    ======================================================*/
    if ($('#tl-testimonial-slider').length) {
        $('#tl-testimonial-slider').owlCarousel({
            loop:true,
            dots: false,
            nav:false,
            navText:'',
            items:1,
            autoplay: false,
            smartSpeed:1500,
        });
    }

    /* Owl Slider For Review
    ======================================================*/
    if ($('#tl-review-slider').length) {
        $('#tl-review-slider').owlCarousel({
            loop:true,
            dots: true,
            nav: false,
            navText:'',
            items:1,
            autoplay: false,
            smartSpeed:1500,
        });
    }

    /* Owl Slider For Product
    ======================================================*/
    if ($('#tl-product-slider').length) {
        $('#tl-product-slider').owlCarousel({
            loop:true,
            dots: false,
            nav: true,
            navText:'',
            items:1,
            autoplay: false,
            smartSpeed:1500,
        });
    }
	
	
	/* Owl Slider For Team
    ======================================================*/
    if ($('#tl-team-slider').length) {
        $('#tl-team-slider').owlCarousel({
            loop:true,
            dots: false,
            nav: true,
            navText:["&larr;","&rarr;"],
            items:5,
            autoplay: false,
            smartSpeed:1500,
			responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
				480:{
                    items:2,
                },
                768:{
                    items:3,
                },
                992:{
                    items:4,
                },
                1199:{
                    items:5,
                }
            }
        });
    }


    /* Owl Slider For Partners
    ======================================================*/
    if ($('#tl-partners-listed').length) {
        $('#tl-partners-listed').owlCarousel({
            loop:true,
            dots: false,
            nav:false,
            navText:'',
            items:6,
            autoplay: false,
            smartSpeed:1500,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                },
                768:{
                    items:3,
                },
                992:{
                    items:4,
                },
                1199:{
                    items:5,
                }
            }
        });
    }

    /* Quantity For Product Detail Pagew
    ======================================================*/
    if ($('.spinnerExample').length) {
        $('.spinnerExample').spinner();
    }

    /* BxSlider For Product
    ======================================================*/
    if ($('#product-slider').length) {
        $('#product-slider').bxSlider({
          auto: true,
          pagerCustom: '#bx-pager',
          navigation:false,
        });
    }

    /* JQuery UI Range Slider For Product
    ======================================================*/
    if ($('#tl-range-slider').length) {
        $( "#tl-range-slider" ).slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 75, 300 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        
        $( "#amount" ).val( "$" + $( "#tl-range-slider" ).slider( "values", 0 ) +
        " - $" + $( "#tl-range-slider" ).slider( "values", 1 ) );
    };
    
    /* Accordian For About Page
    ======================================================*/ 
    if ($('#myCollapsible').length) {
        $('#myCollapsible').collapse({
          toggle: false
        })
    }
    
   
});
