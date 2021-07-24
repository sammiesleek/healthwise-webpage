const tog = document.querySelector('.toggle');
const navi = document.querySelector('.navi_ation');
const Open = document.querySelector('.fa-bars');
const Close = document.querySelector('.fa-times');
const Hd = document.querySelector('header');

tog.addEventListener('click',()=> {
    Close.classList.toggle('active');
    Open.classList.toggle('active');
    navi.classList.toggle('active');
    Hd.classList.toggle('active');
})


//  const nav = document.getElementById('header');
//      nav.addEventListener('click', ()=>{
//         nav.classList.toggle('sticky');
//      })
        






// home slider

 function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single_slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single_slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        // BasicSlider.slick({
        //     autoplay: true,
        //     autoplaySpeed: 5000,
        //     dots: true,
        //     fade: true,
        //     arrows: false,
        //     responsive: [
        //         {
        //             breakpoint: 767,
        //             settings: {
        //                 arrows: false
        //             }
        //         }
        //     ]
        // });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();







//   all ------------------
// function initParadoxWay() {
//     "use strict";
   
//     if ($(".testimonials-carousel").length > 0) {
//         var j2 = new Swiper(".testimonials-carousel .swiper-container", {
//             preloadImages: false,
//             slidesPerView: 1,
//             spaceBetween: 20,
//             loop: true,
//             grabCursor: true,
//             mousewheel: false,
//             centeredSlides: true,
//             pagination: {
//                 el: '.tc-pagination',
//                 clickable: true,
//                 dynamicBullets: true,
//             },
//             navigation: {
//                 nextEl: '.listing-carousel-button-next',
//                 prevEl: '.listing-carousel-button-prev',
//             },
//             breakpoints: {
//                 1024: {
//                     slidesPerView: 3,
//                 },
                
//             }
//         });
//     }
    
// // bubbles -----------------
    
    
//     setInterval(function () {
//         var size = randomValue(sArray);
//         $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
//         $('.individual-bubble').animate({
//             'bottom': '100%',
//             'opacity': '-=0.7'
//         }, 4000, function () {
//             $(this).remove()
//         });
//     }, 350);
    
// }

//   Init All ------------------
// $(document).ready(function () {
//     initParadoxWay();
// });
