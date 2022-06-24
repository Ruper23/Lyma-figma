//Burger menu
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



//Swiper
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
// Animated
new WOW().init();


// Lazy load background images


document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})