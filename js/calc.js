// ==========================================================================
// КАЛЬКУЛЯТОР

const widthRange = document.getElementById('widthRange');
const widthValue = document.getElementById('widthValue');
const heightRange = document.getElementById('heightRange');
const heightValue = document.getElementById('heightValue');
let heightDoorRange = document.getElementById('heightDoorRange');
let heightDoorValue = document.getElementById('heightDoorValue');
let widthDoorRange = 700
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
const clientWidth = document.documentElement.clientWidth;
const oneSide = document.getElementById('oneside')
const twoSides = document.getElementById('twosides')
const takeSize = document.getElementById('take-size')
const takeSize2 = document.getElementById('take-size2')
const currentPrice = 2000
const currentPrice1 = 4500
const currentPrice2 = 4800
const currentPrice3 = 5600
const currentPrice4 = 7000
let totalMeters
const widthInput = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');
const heightDoorInput = document.getElementById('heightDoorInput');
const balconySelectors = document.querySelectorAll('.balcony')

// СУММА
function updateTotal(text, price) {
    let widthInMeters
    let heightInMeters
    let heightDoorInMeters
    let widthDoorInMeters
    if (clientWidth < 769) {
        widthInMeters = widthInput.value / 1000
        heightInMeters = heightInput.value / 1000
        heightDoorInMeters = heightDoorInput.value / 1000;
        widthDoorInMeters = widthDoorRange / 1000;
    }
    else {
        widthInMeters = widthRange.value / 1000;
        heightInMeters = heightRange.value / 1000;
        heightDoorInMeters = heightDoorRange.value / 1000;
        widthDoorInMeters = widthDoorRange / 1000;
    }
    const selectedLaminathia = laminathiaForm.querySelector('input[name="answer"]:checked');
    const selectedLaminathiaValue = selectedLaminathia ? selectedLaminathia.value : 0;
    const selectedInstallation = installationForm.querySelector('input[name="answer"]:checked');
    const selectedInstallationValue = selectedInstallation ? selectedInstallation.value : 0;
    const checkboxes = optionsForm.querySelectorAll('input[name="option"]:checked');
    let selectedOptionsTotal = 0;

    checkboxes.forEach(checkbox => {
        selectedOptionsTotal += parseInt(checkbox.value);
    });

    let balconySize

    balconySelectors.forEach(balconySelector => {
        if (balconySelector.style.display == 'none') {
            balconySize = 0
        }
        else {
            heightDoorInMeters.value = 2000 / 1000
            widthDoorInMeters = 700 / 1000
            balconySize = heightDoorInMeters * widthDoorInMeters
        }
    })

    const windowSize = widthInMeters * heightInMeters
    const balconyAndWindowSize = windowSize + balconySize

    let total = balconyAndWindowSize * parseInt(price) + parseInt(selectedLaminathiaValue) + parseInt(selectedInstallationValue) + parseInt(selectedOptionsTotal)
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
    updateTotal(standartPrice, currentPrice1)
    updateTotal(comfortPrice, currentPrice2)
    updateTotal(premiumPrice, currentPrice3)
    updateTotal(plusPrice, currentPrice4)
});

widthInput.addEventListener('input', function () {
    const widthInMeters = widthRange.value / 1000;
    widthValue.textContent = widthRange.value;
    const heightInMeters = heightRange.value / 1000;
    totalMeters = heightInMeters * widthInMeters
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
    updateTotal(standartPrice, currentPrice1)
    updateTotal(comfortPrice, currentPrice2)
    updateTotal(premiumPrice, currentPrice3)
    updateTotal(plusPrice, currentPrice4)
});


heightInput.addEventListener('input', function () {
    const heightInMeters = heightRange.value / 1000;
    heightValue.textContent = heightRange.value;
    const widthInMeters = widthRange.value / 1000;
    totalMeters = heightInMeters * widthInMeters
    updateTotal(standartPrice, currentPrice1)
    updateTotal(comfortPrice, currentPrice2)
    updateTotal(premiumPrice, currentPrice3)
    updateTotal(plusPrice, currentPrice4)
});

// ВЫСОТА ДВЕРИ
heightDoorRange.addEventListener('input', () => {
    const heightInMeters = heightDoorRange.value / 1000;
    heightDoorValue.textContent = heightDoorRange.value;
    const widthInMeters = widthRange.value / 1000;
    totalMeters = heightInMeters * widthInMeters
    updateTotal(standartPrice, currentPrice1)
    updateTotal(comfortPrice, currentPrice2)
    updateTotal(premiumPrice, currentPrice3)
    updateTotal(plusPrice, currentPrice4)
});

heightDoorInput.addEventListener('input', function () {
    const heightInMeters = heightDoorRange.value / 1000;
    heightDoorValue.textContent = heightDoorRange.value;
    const widthInMeters = widthRange.value / 1000;
    totalMeters = heightInMeters * widthInMeters
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
    if (button.querySelector('p').textContent == 'Балкон. Двухстворчатое окно' || button.querySelector('p').textContent == 'Балкон. Одностворчатое окно') {
        balconySelectors.forEach(balconySelector => {
            balconySelector.style.display = 'flex'
            heightDoorRange.value = 2000;
            widthDoorRange = 700
        })
    }
    else {
        balconySelectors.forEach(balconySelector => {
            balconySelector.style.display = 'none'
            heightDoorRange.value = 0
            heightDoorInput.value = 0
            widthDoorRange = 0
        })
    }
    updateTotal(standartPrice, currentPrice1)
    updateTotal(comfortPrice, currentPrice2)
    updateTotal(premiumPrice, currentPrice3)
    updateTotal(plusPrice, currentPrice4)
}

// ===========================================================================
// АДАПТИВ

if (clientWidth < 770) {
    oneSide.textContent = '1 сторона'
    twoSides.textContent = '2 стороны'
    takeSize.textContent = 'Бесплатный замер'
    takeSize2.textContent = 'Бесплатный замер'
    orderBtn.textContent = 'Бесплатный замер'
    orderBtn2.textContent = 'Бесплатный замер'
}