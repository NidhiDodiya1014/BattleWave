const textElements = document.querySelectorAll('.text');
let count = 0;
let selectedCells = [];

textElements.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (count < 5) {
            if (element.style.backgroundColor != 'green') {
                element.style.backgroundColor = 'green';
                count++;
                selectedCells.push(index);
            } else if (element.style.backgroundColor == 'green') {
                element.addEventListener('mouseover', () => {
                    if (element.style.backgroundColor != 'green') {
                        element.style.backgroundColor = 'red';
                    }
                });
                element.addEventListener('mouseout', () => {
                    if (element.style.backgroundColor == 'red') {
                        element.style.backgroundColor = 'white';
                    }
                });
                element.style.backgroundColor = 'white';
                count--;
                for (let i = 0; i < selectedCells.length; i++) {
                    if (selectedCells[i] == index) {
                        selectedCells[i] = -1;
                    }
                }
            }
            localStorage.setItem('selectedCells', JSON.stringify(selectedCells));
        } else if (element.style.backgroundColor == 'green') {
            element.addEventListener('mouseover', () => {
                if (element.style.backgroundColor != 'green') {
                    element.style.backgroundColor = 'red';
                }
            });
            element.addEventListener('mouseout', () => {
                if (element.style.backgroundColor == 'red') {
                    element.style.backgroundColor = 'white';
                }
            });
            element.style.backgroundColor = 'white';
            count--;
            for (let i = 0; i < selectedCells.length; i++) {
                if (selectedCells[i] == index) {
                    selectedCells[i] = -1;
                }
            }
            localStorage.setItem('selectedCells', JSON.stringify(selectedCells));
        } else {
            alert("You've reached the maximum limit of clicks!");
        }
        allFive();
    });
});


function allFive() {
    if (count == 5) {
        document.querySelector(".select-any-cells").style.visibility = 'hidden';
        document.querySelector(".startGame2").style.display = 'block';
    }
    else if (count < 5) {
        document.querySelector(".startGame2").style.display = 'none';
        document.querySelector(".select-any-cells").style.visibility = 'visible';
    }
}

document.querySelector(".startGame2").addEventListener('click', () => {
    document.querySelector(".loader").style.display = "flex";
    document.querySelector(".startGame2").style.display = "none";

    setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".thirdPage").style.display = "none";
        document.querySelector(".fourthPage").style.display = "block";
    }, 1100);
});
