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
