"use strict";

// ==========================================================================
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
var clientWidth = document.documentElement.clientWidth;
var oneSide = document.getElementById('oneside');
var twoSides = document.getElementById('twosides');
var takeSize = document.getElementById('take-size');
var takeSize2 = document.getElementById('take-size2');
var currentPrice = 2000;
var currentPrice1 = 4500;
var currentPrice2 = 4800;
var currentPrice3 = 5600;
var currentPrice4 = 7000;
var totalMeters;
var widthInput = document.getElementById('widthInput');
var heightInput = document.getElementById('heightInput'); // СУММА

function updateTotal(text, price) {
  var widthInMeters;
  var heightInMeters;

  if (clientWidth < 769) {
    widthInMeters = widthInput.value / 1000;
    heightInMeters = heightInput.value / 1000;
  } else {
    widthInMeters = widthRange.value / 1000;
    heightInMeters = heightRange.value / 1000;
  }

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
  updateTotal(standartPrice, currentPrice1);
  updateTotal(comfortPrice, currentPrice2);
  updateTotal(premiumPrice, currentPrice3);
  updateTotal(plusPrice, currentPrice4);
});
widthInput.addEventListener('input', function () {
  var widthInMeters = widthRange.value / 1000;
  widthValue.textContent = widthRange.value;
  var heightInMeters = heightRange.value / 1000;
  totalMeters = heightInMeters * widthInMeters;
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
  updateTotal(standartPrice, currentPrice1);
  updateTotal(comfortPrice, currentPrice2);
  updateTotal(premiumPrice, currentPrice3);
  updateTotal(plusPrice, currentPrice4);
});
heightInput.addEventListener('input', function () {
  var heightInMeters = heightRange.value / 1000;
  heightValue.textContent = heightRange.value;
  var widthInMeters = widthRange.value / 1000;
  totalMeters = heightInMeters * widthInMeters;
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
} // ===========================================================================
// АДАПТИВ


if (clientWidth < 770) {
  oneSide.textContent = '1 сторона';
  twoSides.textContent = '2 стороны';
  takeSize.textContent = 'Бесплатный замер';
  takeSize2.textContent = 'Бесплатный замер';
  orderBtn.textContent = 'Бесплатный замер';
}