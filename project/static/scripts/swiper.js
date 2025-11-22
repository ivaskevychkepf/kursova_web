const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    simulateTouch: false,
    allowTouchMove: false,
    speed: 600,
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: true,
    
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    breakpoints: {
        390: {
            slidesPerView: 1,
        },

        1024: {
            slidesPerView: 3,
        },

        1024: {
            slidesPerView: 3,
        }
    }
})

