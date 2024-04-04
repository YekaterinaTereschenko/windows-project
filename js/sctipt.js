// ==========================================================================
// ВЫПАДАЮЩИЕ СПИСКИ
const dropdownButtons = document.querySelectorAll('.dropdown-btn');

dropdownButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const dropdownContent = button.querySelector('.dropdown-content');

        dropdownContent.classList.toggle('active');
        button.classList.toggle('active');

        const caret = button.querySelector('img');
        if (caret.getAttribute('src') === './images/CaretDown.svg') {
            caret.setAttribute('src', './images/CaretUp.svg');
        } else {
            caret.setAttribute('src', './images/CaretDown.svg');
        }
    });
});

// ==========================================================================
// КАЛЬКУЛЯТОР

const widthRange = document.getElementById('widthRange');
const widthValue = document.getElementById('widthValue');
const heightRange = document.getElementById('heightRange');
const heightValue = document.getElementById('heightValue');
const totalValue = document.getElementById('totalValue');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const optionsForm = document.getElementById('options');
const laminathiaForm = document.getElementById('laminathia');
const installationForm = document.getElementById('installation');
const standartPrice = document.getElementById('standartPrice')
const comfortPrice = document.getElementById('comfortPrice')
const premiumPrice = document.getElementById('premiumPrice')
const plusPrice = document.getElementById('plusPrice')
const currentPrice = 2000
const currentPrice1 = 2000
const currentPrice2 = 3000
const currentPrice3 = 4000
const currentPrice4 = 5000
let totalMeters

// СУММА
function updateTotal(text, price) {
    const widthInMeters = widthRange.value / 1000;
    const heightInMeters = heightRange.value / 1000;
    const selectedLaminathia = laminathiaForm.querySelector('input[name="answer"]:checked');
    const selectedLaminathiaValue = selectedLaminathia ? selectedLaminathia.value : 0;
    const selectedInstallation = installationForm.querySelector('input[name="answer"]:checked');
    const selectedInstallationValue = selectedInstallation ? selectedInstallation.value : 0;
    const checkboxes = optionsForm.querySelectorAll('input[name="option"]:checked');
    let selectedOptionsTotal = 0;

    checkboxes.forEach(checkbox => {
        selectedOptionsTotal += parseInt(checkbox.value);
    });

    let total = widthInMeters * heightInMeters * parseInt(price) + parseInt(selectedLaminathiaValue) + parseInt(selectedInstallationValue) + parseInt(selectedOptionsTotal)
    text.textContent = Math.round(total) + ' ₽';
}

updateTotal(standartPrice, currentPrice1)
updateTotal(comfortPrice, currentPrice2)
updateTotal(premiumPrice, currentPrice3)
updateTotal(plusPrice, currentPrice4)

// ШИРИНА
widthRange.addEventListener('input', () => {
    const widthInMeters = widthRange.value / 1000;
    widthValue.textContent = widthRange.value;
    const heightInMeters = heightRange.value / 1000;
    totalMeters = heightInMeters * widthInMeters
    let totalPrice = totalMeters * currentPrice
    console.log(totalMeters.toFixed(2));
    console.log(totalPrice);
    updateTotal(standartPrice, currentPrice1)
    updateTotal(comfortPrice, currentPrice2)
    updateTotal(premiumPrice, currentPrice3)
    updateTotal(plusPrice, currentPrice4)
});

// ВЫСОТА
heightRange.addEventListener('input', () => {
    const heightInMeters = heightRange.value / 1000;
    heightValue.textContent = heightRange.value;
    const widthInMeters = widthRange.value / 1000;
    totalMeters = heightInMeters * widthInMeters
    let totalPrice = totalMeters * currentPrice
    console.log(totalMeters.toFixed(2));
    console.log(totalPrice);
    updateTotal(standartPrice, currentPrice1)
    updateTotal(comfortPrice, currentPrice2)
    updateTotal(premiumPrice, currentPrice3)
    updateTotal(plusPrice, currentPrice4)
});

// ЛАМИНАЦИЯ УСТАНОВКА
function updateSelection() {
    const selectedLaminathia = laminathiaForm.querySelector('input[name="answer"]:checked');
    const selectedLaminathiaValue = selectedLaminathia ? selectedLaminathia.value : 0;

    const selectedInstallation = installationForm.querySelector('input[name="answer"]:checked');
    const selectedInstallationValue = selectedInstallation ? selectedInstallation.value : 0;

    console.log('laminathia:', selectedLaminathiaValue);
    console.log('installation:', selectedInstallationValue);
    updateTotal(standartPrice, currentPrice1)
    updateTotal(comfortPrice, currentPrice2)
    updateTotal(premiumPrice, currentPrice3)
    updateTotal(plusPrice, currentPrice4)
}

// ДОПОЛНЕНИЯ
function updateCheckboxSelection() {
    const checkboxes = optionsForm.querySelectorAll('input[name="option"]:checked');
    let selectedOptionsTotal = 0;

    checkboxes.forEach(checkbox => {
        selectedOptionsTotal += parseInt(checkbox.value);
    });

    console.log('options:', selectedOptionsTotal);
    updateTotal(standartPrice, currentPrice1)
    updateTotal(comfortPrice, currentPrice2)
    updateTotal(premiumPrice, currentPrice3)
    updateTotal(plusPrice, currentPrice4)
}

optionsForm.addEventListener('change', updateCheckboxSelection);
laminathiaForm.addEventListener('change', updateSelection);
installationForm.addEventListener('change', updateSelection);

updateCheckboxSelection();
updateSelection();


document.addEventListener("DOMContentLoaded", function () {
    const laminathiafirstRadioButton = document.querySelector('#laminathia input[type="radio"]');
    const installationfirstRadioButton = document.querySelector('#installation input[type="radio"]');

    laminathiafirstRadioButton.checked = true;
    installationfirstRadioButton.checked = true;
});

function toggleButton(button) {
    const buttons = document.querySelectorAll('.head button');
    buttons.forEach(btn => {
        btn.classList.remove('active-btn');
        btn.querySelector('p').style.display = 'none';
    });

    button.classList.add('active-btn');
    button.querySelector('p').style.display = 'block';
}


// ==========================================================================
// ЗАПОЛНЕНИЕ 
const orderInput = document.querySelector('#order-input'); // Замените 'order-input' на правильный идентификатор вашего инпута
const orderBtn = document.querySelector('.order-btnn');

orderInput.addEventListener('input', function() {
    if (orderInput.value.length <= 2) {
        orderBtn.style.background = 'rgba(160, 166, 173, 1)';
    } else {
        orderBtn.style.background = 'rgba(44, 177, 185, 1)';
    }
});


// ===========================================================================
// АДАПТИВ
const clientWidth = document.documentElement.clientWidth;
const oneSide = document.getElementById('oneside')
const twoSides = document.getElementById('twosides')
const takeSize = document.getElementById('take-size')
const takeSize2 = document.getElementById('take-size2')
console.log('Client Width:', clientWidth);

if(clientWidth < 770) {
    oneSide.textContent = '1 сторона'
    twoSides.textContent = '2 стороны'
    takeSize.textContent = 'Бесплатный замер'
    takeSize2.textContent = 'Бесплатный замер'
    orderBtn.textContent = 'Бесплатный замер'
}