$(document).ready(function () {

    //hiding the search icon on focus
    $('input[type="search"]').on('focus', function() {
        $(this).next('i').fadeOut()
    });

    $('input[type="search"]').on('blur', function() {
        $(this).next('i').fadeIn()
    });

    /*
    **********************
    ** scroll to top button
    **********************
    */
    $('.scroll-top').on('click', function() {

        $('html, body').animate({

            scrollTop: 0

        }, 1000)

    });

    /*
    **********************
    ** making the nav sticky to the top
    **********************
    */
    $(window).on('scroll', function () {            
    
        //adjusting the height of nav on scroll
        if ($(window).innerWidth() > 991) {
            if($(window).scrollTop() > $('.top-nav').height()) {
                
                //adjusting the slider top marging when scroll
                //to prevent a proplem when the nav links takes position fixed
                $('body').css({
                    paddingTop: $('.nav-links').height()
                });

                $('nav .nav-links li.link').css("padding", "6px 0");
            } else {
    
                $('body').css({
                    paddingTop: 0
                })
    
                $('nav .nav-links li.link').css("padding", "30px 0");
            }
        } else if ($(window).innerWidth() < 991) {

            if($(window).scrollTop() > $('.top-nav').height()) {
                $('body').css({
                    paddingTop: $('nav').height()
                });

            } else {
                $('body').css({
                    paddingTop: 0
                });    
            }
        }
        
        
        // making the nav sticky to the top
        if($(window).scrollTop() > $('.top-nav').height()) {
            
            // give nav links position fixed on scroll
            $('nav').css({
                position: 'fixed',
                top: 0
            });
        } else {

            $('nav').css({
                position: 'relative',
            });
        }
    });            




    //showing sublinks when hover on main links
    $(window).on('load resize', function() {
        if ($(window).innerWidth() > 991) {
            $('nav .nav-links li.link').off('click');
            $('nav .nav-links li.link').hover(function () {
    
                $($(this).data('class')).css('display', 'block')
            }, function () {
        
                $($(this).data('class')).css('display', 'none')
            });    
        } else {
            $('nav .nav-links li.link').off();
            $('nav .nav-links li.link').click(function() {
                $($(this).data('class')).slideToggle();
            });
        }    
    })

    //slide down nav links when click on bars
    $('.bars').on('click', function () {

        $('.nav-links').slideToggle()

    });

    /*
    **********************
    ** card courses overlay animation
    **********************
    */
    $('.course .course-item .card-img-top').hover(function () {

        $(this).find('.overlay')
            .animate({width: '100%'}, 300)
            .animate({width: '90%'}, 100)
            .animate({width: '100%'}, 100)

    }, function () {

        $(this).find('.overlay')
            .animate({width: "0%"}, 500);
    });


    /*
    **********************
    ** GALLERY FILTERING
    **********************
    */
    $('.gallery .heading li a').on('click', function (e) {

        e.preventDefault();

        $(this).parent('li').addClass('active')
                .siblings().removeClass('active');

        $('.gallery .wrapper .flex, .gallery .wrapper .flex .fifty')
                .find( $(this)
                .data('class') )
                .show();

        $('.gallery .wrapper .flex, .gallery .wrapper .flex .fifty')
            .find(".box:not(" + $(this).data('class') + ")" ).hide();

    });
    /*=======================
    **********************
    ** CONTACT  COUNT DOWN 
    **********************
    =========================
    */
    function makeTimer() {

            var endTime = new Date("29 December 2019 2:56:00 GMT+01:00");			
                endTime = (Date.parse(endTime) / 1000);
    
                var now = new Date();
                now = (Date.parse(now) / 1000);
    
                var timeLeft = endTime - now;
    
                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
      
                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }
    
                $("#days").html(days + "<div><span>يوم</span></div>");
                $("#hours").html(hours + "<div><span>ساعة</span></div>");
                $("#minutes").html(minutes + "<div><span>دقيقة</span></div>");
                $("#seconds").html(seconds + "<div><span>ثانية</span></div>");		
    
        }
    
        setInterval(function() { makeTimer(); }, 1000);

    /*=======================
    **********************
    ** CONTACT  VALIDATION 
    **********************
    =========================
    */
    /*$('form').on('submit', function (e) {

        // input text array
        let submitErr   = $('form .loader ~ p.alert-danger');
        let sucsessAlert= $('form .loader ~ p.alert-primary');
        let imgLoader   = $('form img');
        let input       = Array.from($('form .input'));
        let email       = $('form .email');
        let i = 0;
        $(imgLoader).fadeIn().delay(1000).fadeOut();
        e.preventDefault();

        for (i; i < input.length ; i++) {

            if ($(input[i]).val().length < 3 ) {

                $(input[i]).next('p').fadeIn();
            } else {
                $(input[i]).next('p').fadeOut();
            }
        }    

        // //email validation
        if ($(email).val().indexOf("@") == -1 || $(email).val().length < 5 ) {
            
            $(email).next('p').fadeIn();
        } else {
            $(email).next('p').fadeOut();
        }

        // //show the error after the submit button
        setTimeout(function() {

            if( $(email).next('p').is(":visible") || $(input).next('p').is(":visible")) {
                $(submitErr).fadeIn();
                $(sucsessAlert).fadeOut();
    
            } else {
                $(submitErr).fadeOut();
                $(sucsessAlert).fadeIn();
            }    

        }, 1000);


    });*/






    //==============
    //     WOW JS
    //=============
    new WOW().init();

    //==============
    //     SLICK JS
    //=============
    $('.slick-carousel').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-arrow-right"></i>',
        prevArrow: '<i class="fa fa-arrow-left"></i>',      
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]        
    });

    $('.sponsor-carousel').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,      
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
        ]        
    });

    $('.testem-carousel').slick({
        dots: true,
        nextArrow: false,
        prevArrow: false,      
        slidesToShow: 2,
        customPaging : function(slider, i) {
            return ' ';
        },
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
              }
            },
        ]                    
    })

    $('.videos .video-slick').slick({
        dots: false,
        nextArrow: false,
        prevArrow: false,
        autoplay: true,     
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
            },
          ]                    
    })

    //==============
    //  FANCY BOX
    //=============
    $('[data-fancybox="images"]').fancybox({
        loop:true,
        animationEffect: "zoom-in-out",
        transitionEffect: "circular",
        transitionDuration: 500,
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close",
        ],        
    });

    $('[data-fancybox="gallery"]').fancybox({
        loop:true,
        animationEffect: "zoom-in-out",
        transitionEffect: "circular",
        transitionDuration: 500,
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close",
        ],        
    });
      
});
// $(document).ready(function () {
        
//         //turn on counter function when it appears in view port
//         $(window).on('scroll', function () {
            
//             //showing the scroll top button
//             if($(window).scrollTop() > $('.course').height()) {
//                 $('.scroll-top').fadeIn();
//             }else {
//                 $('.scroll-top').fadeOut();
//             }
    
//             if ($(window).scrollTop() > $('.statics').offset().top - $(window).height()) {
    
//                 counter();
//             }
//         });
        
//         /*
//         **********************
//         ** COUNTER FUNCTION
//         **********************
//         */
//         function counter() {
//             $('.counter span').each(function() {
//                 var counter = $(this),
//                     countTo = counter.attr('data-count');
    
//                 const countObj = { countNum: counter.text()}
    
//                 $(countObj).animate({
//                     countNum: countTo
//                 },{
    
//                     duration: 2000,
//                     easing:'linear',
//                     step: function() {
    
//                         counter.text(Math.floor(this.countNum));
//                     },
//                     complete: function() {
//                         counter.text(this.countNum);
//                     }
    
//                 });
//             });
//         }
//     });