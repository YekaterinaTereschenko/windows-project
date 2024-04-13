// ==========================================================================
// ВЫПАДАЮЩИЕ СПИСКИ
const dropdownButtons = document.querySelectorAll('.dropdown-btn');
const dropdownButtonsMob = document.querySelectorAll('.dropdown-btn-mob');

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

dropdownButtonsMob.forEach(function (button) {
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
// БУРГЕР
const burgerBtn = document.querySelectorAll('#burger-btn')

burgerBtn.forEach(button => {
    button.addEventListener('click', function () {
        const hiddenText = document.querySelector('.burger-menu');
        const imgBurger = document.querySelector('#burger-btn img');
        const computedStyle = window.getComputedStyle(hiddenText); // Получаем вычисленное значение свойства display
        const sections = document.querySelectorAll('section')
        const footer = document.querySelector('footer')

        if (computedStyle.display === 'none') {
            hiddenText.style.display = 'flex';
            sections.forEach(section => {
                section.style.display = 'none'
                footer.style.display = 'none'
                imgBurger.setAttribute('src', './images/close.svg')
            })
        } else {
            hiddenText.style.display = 'none';
            sections.forEach(section => {
                section.style.display = 'flex'
                footer.style.display = 'flex'
                imgBurger.setAttribute('src', './images/menu.svg')
            })
        }
    });
});



// ==========================================================================
// ЗАПОЛНЕНИЕ ФОРМЫ
const orderInput = document.querySelector('#order-input'); 
const orderInput2 = document.querySelector('#order-inputt'); 
const orderInput3 = document.querySelector('#order-inputs'); 
const orderBtn = document.querySelector('.order-btnn');
const orderBtn2 = document.querySelector('.order-btn2');
const orderBtn3 = document.querySelector('#take-size2');
const modalBlock = document.getElementById('modal-block')
const modalBlockHide = document.getElementById('modal-block-hide')
const closeModal = document.getElementById('close-modal')

if(orderInput) {
    orderInput.addEventListener('input', function() {
        if (orderInput.value.length <= 2) {
            orderBtn.style.background = 'rgba(160, 166, 173, 1)';
        } else {
            orderBtn.style.background = 'rgba(44, 177, 185, 1)';
            orderBtn.addEventListener('click', () => {
                modalBlock.style.display = 'none'
                modalBlockHide.style.display = 'flex'
            })
        }
    });
}
if(orderInput2) {
    orderInput2.addEventListener('input', function() {
        if (orderInput2.value.length <= 2) {
            orderBtn2.style.background = 'rgba(160, 166, 173, 1)';
        } else {
            orderBtn2.style.background = 'rgba(44, 177, 185, 1)';
            orderBtn2.addEventListener('click', () => {
                console.log('aaaaaaa');
                modal.style.display = "flex";
                modalBlock.style.display = 'none'
                modalBlockHide.style.display = 'flex'
            })
        }
    });
}
if(orderInput3) {
    orderInput3.addEventListener('input', function() {
        if (orderInput3.value.length <= 2) {
            orderBtn3.style.background = 'rgba(160, 166, 173, 1)';
        } else {
            orderBtn3.style.background = 'rgba(44, 177, 185, 1)';
            orderBtn3.addEventListener('click', () => {
                console.log('aaaaaaa');
                modal.style.display = "flex";
                modalBlock.style.display = 'none'
                modalBlockHide.style.display = 'flex'
            })
        }
    });
}

closeModal.addEventListener('click', () => {
    modalBlock.style.display = 'flex'
    modalBlockHide.style.display = 'none'
    modal.style.display = "none";
})

// ==========================================================================
// МОДАЛЬНОЕ ОКНО

const modal = document.getElementById("modal");
const modalBtn1 = document.getElementById("modal-btn-1");
const openModalBtn = document.querySelectorAll(".openModal");

openModalBtn.forEach(btn => {
    btn.onclick = function() {
        modal.style.display = "flex";
      }
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// ===========================================================================
// АДАПТИВ
const takeSizes = document.getElementById('take-size2')
const clienttWidth = document.documentElement.clientWidth;

if (clienttWidth < 770) {
    takeSizes.textContent = 'Бесплатный замер'
}