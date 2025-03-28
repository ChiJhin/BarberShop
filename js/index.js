// <-------------Зміні для модального вікна------------------>
const menuOpen = document.querySelector('.header__mobile-btn');
const menuClose = document.querySelector('.header__modal-btn');
const menu = document.querySelector('.header__modal');
const backdrop = document.querySelector('.backdrop');
const ESC_KEY_CODE = 'Escape';

// <-------------Функції для модального вікна------------------>

function onOpen() {
  menu.classList.remove('is-hidden');
  backdrop.classList.remove('is-hidden');
  document.body.style.overflowY = 'hidden';
  backdrop.addEventListener('click', onBackdrop);
  menu.addEventListener('click', onButton);
  window.addEventListener('keydown', onEscKeyPress);
}

function onClose() {
  menu.classList.add('is-hidden');
  backdrop.classList.add('is-hidden');
  document.body.style.overflowY = 'scroll';
  backdrop.removeEventListener('click', onBackdrop);
  menu.removeEventListener('click', onButton);
  window.removeEventListener('keydown', onEscKeyPress);
}

function onButton(evt) {
  if (evt.target.nodeName !== 'A') {
    return;
  }
  onClose();
}

function onBackdrop(evt) {
  if (evt.target !== evt.currentTarget) {
    return;
  }
  onClose();
}

function onEscKeyPress(event) {
  const isEscCode = event.code === ESC_KEY_CODE;
  if (isEscCode) {
    onClose();
  }
}

// <-------------Підключення слухачів для модального вікна------------------>
menuOpen.addEventListener('click', onOpen);
menuClose.addEventListener('click', onClose);

// <-------------Слайдер------------------>
const imgArray = ['images/slider-3.jpg', 'images/slider-1.jpg', 'images/slider-2.jpg'];
const slider = document.querySelector('.hero__content');

let intervalId = null; // Змінна для збереження ID інтервалу

// Функція для запуску слайдера
const startSlider = () => {
  let i = 1;
  slider.style.backgroundImage = `url(${imgArray[0]})`;
  intervalId = setInterval(() => {
    slider.style.backgroundImage = `url(${imgArray[i++]})`;
    if (i === imgArray.length) i = 0;
  }, 9000);
};

// Функція для очищення інтервалу
const stopSlider = () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

// Функція для оновлення фону
const updateSlider = () => {
  if (window.innerWidth > 768) {
    stopSlider();
    startSlider();
  } else {
    stopSlider();
    slider.style.backgroundImage = `url(${imgArray[0]})`;
  }
};

updateSlider();

// Додавання обробника для змін розміру вікна
window.addEventListener('resize', updateSlider);
