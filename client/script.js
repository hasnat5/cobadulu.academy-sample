const navBar = document.querySelector('.disappear');

document.addEventListener('scroll', function () {
    console.log(window.scrollY)
    if (window.scrollY > 80) {
        navBar.classList.add('navBg')
    }

    else {
        navBar.classList.remove('navBg')
    }
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 25,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        520: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        950: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
});

// =====================================
