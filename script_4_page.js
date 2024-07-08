const text_U_elements = document.querySelectorAll('.text_U');
let selectedCells2 = JSON.parse(localStorage.getItem('selectedCells'));
text_U_elements.forEach((element, index) => {
    if (selectedCells2.includes(index)) {
        element.style.backgroundColor = 'blue';
    }
});

