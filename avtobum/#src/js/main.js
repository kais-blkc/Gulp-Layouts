// Open/Close mob menu =============
const headerDesc = document.querySelector('.header-desc');
  burger = document.querySelector('#burger'),
  btnClose = document.querySelector('#btn-close');

burger.addEventListener('click',(e) => {
  headerDesc.classList.add('active');
});
headerDesc.addEventListener('click',(e) => {
  if (e.target.className.includes('header-desc') || e.target.className.includes('btn-close')) {
    headerDesc.classList.remove('active');
  }
});


// Sliders =============
const reviewsSlider = new Swiper('.reviews-slider', {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  autoHeight: true,
  autoplay: {
    delay: 3000,
    speed: 400
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  }
});


// QA Tabs =============
const qaList = document.querySelector('#qa-list');

qaList.addEventListener('click', e => {
  const cur = e.target.closest('.qa-list__item');
  const content = cur.querySelector('.qa-list__item-answer');

  if (cur) {
    cur.classList.toggle('active');

    if (content.style.maxHeight) content.style.maxHeight = null 
    else content.style.maxHeight = content.scrollHeight + 'px';
  }
});

// Top btn / Scroll top
const btnTop = document.querySelector('#top-btn');
btnTop.addEventListener('click', e => {
  e.preventDefault();
  window.scroll(0, 0);
});


