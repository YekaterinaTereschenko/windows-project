"use strict";

// ==========================================================================
// ВЫПАДАЮЩИЕ СПИСКИ
var dropdownButtons = document.querySelectorAll('.dropdown-btn');
var dropdownButtonsMob = document.querySelectorAll('.dropdown-btn-mob');
dropdownButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var dropdownContent = button.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('active');
    button.classList.toggle('active');
    var caret = button.querySelector('img');

    if (caret.getAttribute('src') === './images/CaretDown.svg') {
      caret.setAttribute('src', './images/CaretUp.svg');
    } else {
      caret.setAttribute('src', './images/CaretDown.svg');
    }
  });
});
dropdownButtonsMob.forEach(function (button) {
  button.addEventListener('click', function () {
    var dropdownContent = button.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('active');
    button.classList.toggle('active');
    var caret = button.querySelector('img');

    if (caret.getAttribute('src') === './images/CaretDown.svg') {
      caret.setAttribute('src', './images/CaretUp.svg');
    } else {
      caret.setAttribute('src', './images/CaretDown.svg');
    }
  });
}); // ========================================================================== 
// БУРГЕР

var burgerBtn = document.querySelectorAll('#burger-btn');
burgerBtn.forEach(function (button) {
  button.addEventListener('click', function () {
    var hiddenText = document.querySelector('.burger-menu');
    var imgBurger = document.querySelector('#burger-btn img');
    var computedStyle = window.getComputedStyle(hiddenText); // Получаем вычисленное значение свойства display

    var sections = document.querySelectorAll('section');
    var footer = document.querySelector('footer');

    if (computedStyle.display === 'none') {
      hiddenText.style.display = 'flex';
      sections.forEach(function (section) {
        section.style.display = 'none';
        footer.style.display = 'none';
        imgBurger.setAttribute('src', './images/close.svg');
      });
    } else {
      hiddenText.style.display = 'none';
      sections.forEach(function (section) {
        section.style.display = 'flex';
        footer.style.display = 'flex';
        imgBurger.setAttribute('src', './images/menu.svg');
      });
    }
  });
}); // ==========================================================================
// ЗАПОЛНЕНИЕ ФОРМЫ

var orderInput = document.querySelector('#order-input');
var orderBtn = document.querySelector('.order-btnn');
var modalBlock = document.getElementById('modal-block');
var modalBlockHide = document.getElementById('modal-block-hide');
var closeModal = document.getElementById('close-modal');

if (orderInput) {
  orderInput.addEventListener('input', function () {
    if (orderInput.value.length <= 2) {
      orderBtn.style.background = 'rgba(160, 166, 173, 1)';
      orderBtn.setAttribute('disabled', '');
    } else {
      orderBtn.style.background = 'rgba(44, 177, 185, 1)';
      orderBtn.removeAttribute('disabled');
      orderBtn.addEventListener('click', function () {
        modalBlock.style.display = 'none';
        modalBlockHide.style.display = 'flex';
      });
    }
  });
}

closeModal.addEventListener('click', function () {
  modalBlock.style.display = 'flex';
  modalBlockHide.style.display = 'none';
  modal.style.display = "none";
}); // ==========================================================================
// МОДАЛЬНОЕ ОКНО

var modal = document.getElementById("modal");
var modalBtn1 = document.getElementById("modal-btn-1");
var openModalBtn = document.querySelectorAll(".openModal");
openModalBtn.forEach(function (btn) {
  btn.onclick = function () {
    modal.style.display = "flex";
  };
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};