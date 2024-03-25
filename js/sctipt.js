const dropdownButtons = document.querySelectorAll('.dropdown-btn');

dropdownButtons.forEach(function(button) {
    button.addEventListener('click', function() {
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


