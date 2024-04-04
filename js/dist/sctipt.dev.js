"use strict";

// ==========================================================================
// ВЫПАДАЮЩИЕ СПИСКИ
var dropdownButtons = document.querySelectorAll('.dropdown-btn');
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
}); // ==========================================================================
// КАЛЬКУЛЯТОР

var widthRange = document.getElementById('widthRange');
var widthValue = document.getElementById('widthValue');
var heightRange = document.getElementById('heightRange');
var heightValue = document.getElementById('heightValue');
var totalValue = document.getElementById('totalValue');
var radioButtons = document.querySelectorAll('input[type="radio"]');
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var optionsForm = document.getElementById('options');
var laminathiaForm = document.getElementById('laminathia');
var installationForm = document.getElementById('installation');
var standartPrice = document.getElementById('standartPrice');
var comfortPrice = document.getElementById('comfortPrice');
var premiumPrice = document.getElementById('premiumPrice');
var plusPrice = document.getElementById('plusPrice');
var currentPrice = 2000;
var currentPrice1 = 2000;
var currentPrice2 = 3000;
var currentPrice3 = 4000;
var currentPrice4 = 5000;
var totalMeters; // СУММА

function updateTotal(text, price) {
  var widthInMeters = widthRange.value / 1000;
  var heightInMeters = heightRange.value / 1000;
  var selectedLaminathia = laminathiaForm.querySelector('input[name="answer"]:checked');
  var selectedLaminathiaValue = selectedLaminathia ? selectedLaminathia.value : 0;
  var selectedInstallation = installationForm.querySelector('input[name="answer"]:checked');
  var selectedInstallationValue = selectedInstallation ? selectedInstallation.value : 0;
  var checkboxes = optionsForm.querySelectorAll('input[name="option"]:checked');
  var selectedOptionsTotal = 0;
  checkboxes.forEach(function (checkbox) {
    selectedOptionsTotal += parseInt(checkbox.value);
  });
  var total = widthInMeters * heightInMeters * parseInt(price) + parseInt(selectedLaminathiaValue) + parseInt(selectedInstallationValue) + parseInt(selectedOptionsTotal);
  text.textContent = Math.round(total) + ' ₽';
}

updateTotal(standartPrice, currentPrice1);
updateTotal(comfortPrice, currentPrice2);
updateTotal(premiumPrice, currentPrice3);
updateTotal(plusPrice, currentPrice4); // ШИРИНА

widthRange.addEventListener('input', function () {
  var widthInMeters = widthRange.value / 1000;
  widthValue.textContent = widthRange.value;
  var heightInMeters = heightRange.value / 1000;
  totalMeters = heightInMeters * widthInMeters;
  var totalPrice = totalMeters * currentPrice;
  console.log(totalMeters.toFixed(2));
  console.log(totalPrice);
  updateTotal(standartPrice, currentPrice1);
  updateTotal(comfortPrice, currentPrice2);
  updateTotal(premiumPrice, currentPrice3);
  updateTotal(plusPrice, currentPrice4);
}); // ВЫСОТА

heightRange.addEventListener('input', function () {
  var heightInMeters = heightRange.value / 1000;
  heightValue.textContent = heightRange.value;
  var widthInMeters = widthRange.value / 1000;
  totalMeters = heightInMeters * widthInMeters;
  var totalPrice = totalMeters * currentPrice;
  console.log(totalMeters.toFixed(2));
  console.log(totalPrice);
  updateTotal(standartPrice, currentPrice1);
  updateTotal(comfortPrice, currentPrice2);
  updateTotal(premiumPrice, currentPrice3);
  updateTotal(plusPrice, currentPrice4);
}); // ЛАМИНАЦИЯ УСТАНОВКА

function updateSelection() {
  var selectedLaminathia = laminathiaForm.querySelector('input[name="answer"]:checked');
  var selectedLaminathiaValue = selectedLaminathia ? selectedLaminathia.value : 0;
  var selectedInstallation = installationForm.querySelector('input[name="answer"]:checked');
  var selectedInstallationValue = selectedInstallation ? selectedInstallation.value : 0;
  console.log('laminathia:', selectedLaminathiaValue);
  console.log('installation:', selectedInstallationValue);
  updateTotal(standartPrice, currentPrice1);
  updateTotal(comfortPrice, currentPrice2);
  updateTotal(premiumPrice, currentPrice3);
  updateTotal(plusPrice, currentPrice4);
} // ДОПОЛНЕНИЯ


function updateCheckboxSelection() {
  var checkboxes = optionsForm.querySelectorAll('input[name="option"]:checked');
  var selectedOptionsTotal = 0;
  checkboxes.forEach(function (checkbox) {
    selectedOptionsTotal += parseInt(checkbox.value);
  });
  console.log('options:', selectedOptionsTotal);
  updateTotal(standartPrice, currentPrice1);
  updateTotal(comfortPrice, currentPrice2);
  updateTotal(premiumPrice, currentPrice3);
  updateTotal(plusPrice, currentPrice4);
}

optionsForm.addEventListener('change', updateCheckboxSelection);
laminathiaForm.addEventListener('change', updateSelection);
installationForm.addEventListener('change', updateSelection);
updateCheckboxSelection();
updateSelection();
document.addEventListener("DOMContentLoaded", function () {
  var laminathiafirstRadioButton = document.querySelector('#laminathia input[type="radio"]');
  var installationfirstRadioButton = document.querySelector('#installation input[type="radio"]');
  laminathiafirstRadioButton.checked = true;
  installationfirstRadioButton.checked = true;
});

function toggleButton(button) {
  var buttons = document.querySelectorAll('.head button');
  buttons.forEach(function (btn) {
    btn.classList.remove('active-btn');
    btn.querySelector('p').style.display = 'none';
  });
  button.classList.add('active-btn');
  button.querySelector('p').style.display = 'block';
} // ==========================================================================
// ЗАПОЛНЕНИЕ 


var orderInput = document.querySelector('#order-input'); // Замените 'order-input' на правильный идентификатор вашего инпута

var orderBtn = document.querySelector('.order-btnn');
orderInput.addEventListener('input', function () {
  if (orderInput.value.length <= 2) {
    orderBtn.style.background = 'rgba(160, 166, 173, 1)';
  } else {
    orderBtn.style.background = 'rgba(44, 177, 185, 1)';
  }
}); // ===========================================================================
// АДАПТИВ

var clientWidth = document.documentElement.clientWidth;
var oneSide = document.getElementById('oneside');
var twoSides = document.getElementById('twosides');
var takeSize = document.getElementById('take-size');
var takeSize2 = document.getElementById('take-size2');
console.log('Client Width:', clientWidth);

if (clientWidth < 770) {
  oneSide.textContent = '1 сторона';
  twoSides.textContent = '2 стороны';
  takeSize.textContent = 'Бесплатный замер';
  takeSize2.textContent = 'Бесплатный замер';
  orderBtn.textContent = 'Бесплатный замер';
}