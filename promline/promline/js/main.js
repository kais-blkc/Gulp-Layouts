
// Burger Btn
// Кнопка бургер
const navbarWrapper = $('.navbar-wrapper')

$('.burger').on('click', function() {
  navbarWrapper.addClass('active')
})
$('.burger-close').on('click', function() {
  navbarWrapper.removeClass('active')
})
navbarWrapper.on('click', function(e) {
  if (e.target.className.includes('navbar-wrapper')) {
    navbarWrapper.removeClass('active');
  }
})

// Sliders
// Слайдеры
const heroSlider = new Swiper('.hero__list-slider', {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.hero__list-slider .swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.hero__list-slider .swiper-button-next',
    prevEl: '.hero__list-slider .swiper-button-prev',
  }
});

const singleSlider2 = new Swiper('.single-images__slider2', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".single-images__slider2 .swiper-button-next",
    prevEl: ".single-images__slider2 .swiper-button-prev",
  },
});
const singleSlider = new Swiper('.single-images__slider', {
  spaceBetween: 10,
  thumbs: {
    swiper: singleSlider2,
  },
});


// Form styler ===================
// Стилизация формы
(function($) {
$(function() {

	$('section.constructor input, section.constructor select').styler({
    onFormStyled: function() {
      addWarnings();
    }
  });

});
})(jQuery);

// Добавление предупреждений
function addWarnings() {
  const warEl = $('<div class="alert-message">Сначала выберите предыдущий параметр!</div>');
  // Да создавать 2 одинаковых элементов это ТУПО, но почему-то так она не вставляет ошибку в последний элемент
  const warEl2 = $('<div class="alert-message">Сначала выберите предыдущий параметр!</div>');
  $('.form-item:not(:first-child) .jq-selectbox').append(warEl)
  $('.form-item .input-div').append(warEl2)
}


// Constructor ====================
// constructor reset
// Сброс конструктора
const constructorForm = $('#constructorForm');
const constructorFormSelect = constructorForm.find('select');

$('#resetBtn').on('click', function() {
  constructorForm[0].reset()
  constructorFormSelect.trigger('refresh')

  $('.form-item:not(:first-child)').addClass('disabled-sel')
  addWarnings();
});

// constructor validation
// Валидация конструктора

// Проверка на заполнение предыдущего поля
const formPreviewsItems = $('.form-previews__item');

constructorFormSelect.on('change', function(e) {
  const nextFormItem = this.closest('.form-item').nextSibling.nextSibling;
  nextFormItem.classList.remove('disabled-sel');

  // console.log(this.id);
  // console.log(this.value);
  // console.log(this.selectedIndex);


  if (this.id === 'sel-connectSource') {
    switch (this.selectedIndex) {
      case 1:
        formPreviewsItems[0].querySelector('img').src = 'img/gif-1.gif';
        break;
      case 2:
        formPreviewsItems[0].querySelector('img').src = 'img/gif-2.gif';
        break;
      case 3:
        formPreviewsItems[0].querySelector('img').src = 'img/gif-3.gif';
        break;
    }
  }
  if (this.id === 'sel-diameterHose') {
    switch (this.selectedIndex) {
      case 1:
        formPreviewsItems[1].querySelector('img').src = 'img/gif-1.gif';
        break;
      case 2:
        formPreviewsItems[1].querySelector('img').src = 'img/gif-2.gif';
        break;
      case 3:
        formPreviewsItems[1].querySelector('img').src = 'img/gif-3.gif';
        break;
      default:
        formPreviewsItems[1].querySelector('img').src = 'img/gif-1.gif';
        break;
    }
  }
  if (this.id === 'sel-connectHose') {
    switch (this.selectedIndex) {
      case 1:
        formPreviewsItems[2].querySelector('img').src = 'img/gif-1.gif';
        break;
      case 2:
        formPreviewsItems[2].querySelector('img').src = 'img/gif-2.gif';
        break;
      case 3:
        formPreviewsItems[2].querySelector('img').src = 'img/gif-3.gif';
        break;
      default:
        formPreviewsItems[2].querySelector('img').src = 'img/gif-1.gif';
        break;
    }
  }
  // sel-connectSource
  // sel-diameterHose
  // sel-connectHose
});

// Проверка на заполнение полей при отправке
let verification = false;

constructorForm.on('submit', function(e) {
  e.preventDefault();
  $('section.constructor select').each(function() {
    const value = $(this).val()
    const curItem = $(this).closest('.jq-selectbox');
    if (!value) {
      curItem.addClass('err')
      curItem.addClass('err')
      setTimeout(() => {
        curItem.removeClass('err')
      }, 2000);
      verification = false;
    } else {
      verification = true;
    }
  });

  $('section.constructor form input').each(function() {
    const curItem = $(this);
    if (!curItem.val()) {
      curItem.addClass('err');
      setTimeout(() => {
        curItem.removeClass('err')
      }, 2000);
      verification = false;
    } else {
      verification = true;
    }
  });

  if (verification) {
    $('.modal-form').addClass('active');
  }


});

$('#modal-form__from').on('submit', function(e) {
  e.preventDefault();

  const inputDivs = $(this).find('.input-div');
  const inputs = $(this).find('input');

    if (inputs[0].value.length < 1 || inputs[1].value == '+7(___)___-__-__') {
      inputDivs.each(function() {
        $(this).addClass('err');
      })

      setTimeout(() => {
        inputDivs.removeClass('err')
      }, 2000);
    } else {
      $(this).remove()
      $('.form-container__done').addClass('active')
    }

});

// Phone mask ====================
var element = document.querySelector('#modal-form__phone');
var maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
} 
var mask = new IMask(element, maskOptions);

// Disable footer first link
$('footer ul').each(function() {
  $(this).find('li:first-child a').attr('href', 'javascript:void(0)')
});

// Tabs - Promline standarts
$('.promline-standards__tabs').each(function() {
	let ths = $(this);
  const firstTitle = ths.find('.tabs-title__list li:first');
  const firstItem = ths.find('.tabs-content__list-item:first');

  if (window.screen.width < 1000) {
    firstItem.addClass('active').css('top', firstTitle.offset().top + 80);
    firstItem.addClass('active').css('left', firstTitle.offset().left);
    firstTitle.css('margin-bottom', ths.find('.tabs-content__list-item:first').height() + 50);
  }


	ths.find('.tabs-content__list-item').not(':first').hide();
	ths.find('.tabs-title__list li').click(function() {
    const curTitle = ths.find('.tabs-title__list li').removeClass('active').eq($(this).index());
    const curItem = ths.find('.tabs-content__list-item').hide().eq($(this).index());

    ths.find('.tabs-content__list-item').removeClass('active');
    curTitle.addClass('active');
    curItem.fadeIn().addClass('active');

    if (window.screen.width < 1000) {
      ths.find('.tabs-title__list li').each(function() {
        $(this).css('margin-bottom', '10px');
      });

      curTitle.css('margin-bottom', curItem.height() + 70);
      setTimeout(() => {
        curItem.css('top', curTitle.offset().top + 80)
        curItem.css('left', curTitle.offset().left)
      }, 400);
    }
    
	}).eq(0).addClass('active');

});

// Fixed btn
const fixBtn = $('.fixed-btn');
fixBtn.hide();

document.addEventListener('scroll', function () {
  const blockPosition = $('footer').offset().top
  const windowScrollPosition = $(window).scrollTop();

  if (window.scrollY > 500 && blockPosition > windowScrollPosition+400) {
    fixBtn.fadeIn();
  } else {
    fixBtn.hide();
  }

  // Yellow lines animation
  const material = $('.materials-promo__inner').offset().top;

  if (material < windowScrollPosition+100) {
    console.log('aaa');
    $('.prompt-line').css('animation-name', 'line_animation');
    $('.prompt-line').css('opacity', 1);
    $('.prompt-line').addClass('dots')
  }
})

