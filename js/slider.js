const swiperTravelExamples = new Swiper(".travel-examples-slider-swiper", {
  slidesPerView: 3,
  spaceBetween: 19,
  loop: true,
  speed: 800,
  easing: "ease-in-out",

  navigation: {
    nextEl: ".travel-examples-slider__next",
    prevEl: ".travel-examples-slider__prev",
  },
  breakpoints: {
    // mobile + tablet - 320-990
    320: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    // desktop >= 991
    991: {
      slidesPerView: 3,
      spaceBetween: 19
    }
  }
  
});

const swiperReviews = new Swiper(".reviews-slider__swiper", {
  loop: true,
  speed: 800,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".reviews-slider__next",
    prevEl: ".reviews-slider__prev",
  },
});
