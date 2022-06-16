const swiper = new Swiper('.swiper', {
  // Optional parameters
  spaceBetween: 5,
  slidesPerView: 5,
  loopFillGroupWithBlank: true,
  loop: true,
  speed: 2500,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.recommendation__slider-pagination',
    clickable: true,
  },

});