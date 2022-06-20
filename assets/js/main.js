let burgIcon = document.querySelector('.burger-menu-icon');
let burgMenu = document.querySelector('.header__nav');
if (burgIcon) {

  burgIcon.addEventListener("click", function (e) {
    burgMenu.classList.toggle('active');
    burgIcon.classList.toggle('active');

  })
}
burgMenu.addEventListener('click', e => {
  if (e.target) {
    burgMenu.classList.toggle('active');
    burgIcon.classList.toggle('active');
  }
});




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