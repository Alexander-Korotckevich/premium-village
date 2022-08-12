// swiper
const swiper = new Swiper('.hero__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// popup
const callBtn = document.querySelector('.call-to-us__btn');
const popUp = document.querySelector('.call-to-us__pop-up');

function openClose(el) {
  el.classList.toggle('active');
}

callBtn.addEventListener('click', () => {
  openClose(popUp);
});
