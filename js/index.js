'use strict';

const menuOpen = document.querySelector('.header__menu-btn');
const menuClose = document.querySelector('.menu__mob-btn');
const menu = document.querySelector('.menu__mob');
const backdrop = document.querySelector('.backdrop');

function onOpen() {
  menu.classList.remove('visually-hidden');
  backdrop.classList.remove('visually-hidden');
  document.body.style.overflow = 'hidden';
  backdrop.addEventListener('click', onBackdrop);
  menu.addEventListener('click', onButton);
}

function onClose() {
  menu.classList.add('visually-hidden');
  backdrop.classList.add('visually-hidden');
  document.body.style.overflow = 'scroll';
  backdrop.removeEventListener('click', onBackdrop);
  menu.removeEventListener('click', onButton);
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

menuOpen.addEventListener('click', onOpen);
menuClose.addEventListener('click', onClose);
