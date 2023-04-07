// menu
// $(document).ready(function () {
// 	$('#menu').slicknav({
// 	allowParentLinks: false,
// 	});
// });

$('.latest-blog-2-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    // autoplay: true,
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
});

(function(){

    $(".hamburger").on("click", function() {
        $(this).parent(".hamburger-wrapper").toggleClass("hamburger-active")
    });
    
    }());





$('.Latestslider').owlCarousel({
    stagePadding: 100,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.slider-wapper').owlCarousel({
    stagePadding: 10,
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.comment-slider-wapper').owlCarousel({
    stagePadding: 10,
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

$('.latest-blog-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.senior-blog-slider').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})


    $.fn.jQuerySimpleCounter = function( options ) {
        var settings = $.extend({
            start:  0,
            end:    100,
            easing: 'swing',
            duration: 400,
            complete: ''
        }, options );

        var thisElement = $(this);

        $({count: settings.start}).animate({count: settings.end}, {
            duration: settings.duration,
            easing: settings.easing,
            step: function() {
                var mathCount = Math.ceil(this.count);
                thisElement.text(mathCount);
            },
            complete: settings.complete
        });
    };


$('#number1').jQuerySimpleCounter({end: 95,duration: 7000});
$('#number2').jQuerySimpleCounter({end: 125,duration: 7000});
$('#number3').jQuerySimpleCounter({end: 20,duration: 7000});




    /* AUTHOR LINK */
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});