$("#menu-btn").click(function() {
    $(".inner-nav .right").toggleClass("showMenu");
});


// benefits slider



var swiper1 = new Swiper(".mySwiper1", {
    loop: true,
    spaceBetween: 25,
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        370: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1550: {
            slidesPerView: 5,
        },
    },
});



var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 25,
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        370: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1550: {
            slidesPerView: 5,
        },
    },
});