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
    console.log(7);
    return;
  }
  onClose();
}

function onBackdrop(evt) {
  if (evt.target !== evt.currentTarget) {
    return;
  }
  console.log(1);
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
