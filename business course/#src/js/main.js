const body = qs('body');
const navbar = qs('.navbar');
const burger = qs('#burger');
const regWrapper = qs('#form-reg');
const signInWrapper = qs('#form-signIn');
const regBtn = qs('#form-reg-btn > a');
const signInBtn = qs('#form-signIn-btn > a');
const myAccSettChange = qs('#my-account-setting-change');
const timerShow = qs("#timer");
const deadline = new Date(2021, 10, 10);
let timerId = null;

// Pass
const regPass = document.getElementById('reg_password');
const regPassConf = document.getElementById('reg_password-confirm');
regPassConf.addEventListener('blur', e => {
  if (regPassConf.value != regPass.value) {
    alert('Повторный пароль не верный!');
  }
})

// Timer
try {
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
} catch(err) {
  // Просто чтоб не выдовало ошибку на других страницах
}

// Open / Close navbar 
if (burger) {
  burger.addEventListener('click', () => {
    changeClass(true, 'active', [navbar, body]);
  });
  
  navbar.addEventListener('click', (e) => {
    if (e.target.className.includes('burger-close') || e.target.className.includes('navbar'))
      changeClass(false, 'active', [navbar, body]);
  });
}

if (myAccSettChange) {
  myAccSettChange.addEventListener('click', (e) => {
    const inputs = e.target.parentNode.querySelectorAll('input');
    inputs.forEach(input => input.removeAttribute('disabled'));
  });
}

if (navbar) {
  navbar.addEventListener('click', (e) => {
    hideShowForm(e, regBtn, regWrapper, signInWrapper);
    hideShowForm(e, signInBtn, signInWrapper, regWrapper);
  });
}


/* FUNCS =================== */
function qs(selector, many=false) {
  if (many) {
    return document.querySelectorAll(selector);
  }

  return document.querySelector(selector);
}

function changeClass(add, className, selectors=[]) {
  selectors.forEach(el => {
    if (add)
      el.classList.add(className);
    else
      el.classList.remove(className);
  });
}

function countdownTimer() {
  const diff = deadline - new Date();
  if (diff <= 0) {
    clearInterval(timerId);
  }
  let days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 00;
  let hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 00;
  let minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 00;
  let seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 00;

  hours = hours < 10 ? `0${hours}` : hours 
  minutes = minutes < 10 ? `0${minutes}` : minutes 
  seconds = seconds < 10 ? `0${seconds}` : seconds 

  timerShow.textContent = `${hours}:${minutes}:${seconds}`;
}

function hideShowForm(event, btn, wrapper, deactivate) {
  if (event.target === btn) {
      event.preventDefault()
      wrapper.classList.toggle('active');
      deactivate.classList.remove('active');
      wrapper.addEventListener('click', e => {
        if (e.target.className.includes('form-wrapper')) {
          wrapper.classList.remove('active')
        }
      })
    }
}
