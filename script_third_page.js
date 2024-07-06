const textElements = document.querySelectorAll('.text');
let count = 0;
textElements.forEach(element => {
    element.addEventListener('click', () => {
        if (count < 5) {
            if (element.style.backgroundColor != 'green') {
                element.style.backgroundColor = 'green';
                count++;
            }
            else if (element.style.backgroundColor == 'green') {
                element.style.backgroundColor = 'white';
                count--;
            }
            allFive();
        }
        else if (element.style.backgroundColor == 'green') {
            element.style.backgroundColor = 'white';
            count--;
            allFive();
        }
        else {
            alert("You've reached the maximum limit of clicks!");
        }
    });
});

function allFive() {
    if (count == 5) {
        document.querySelector(".select-any-cells").style.visibility = 'hidden';
        document.querySelector(".startGame2").style.display = 'block';
    }
    if (count < 5) {
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
        document.querySelector(".fourthPage").style.visibility = "visible";
    }, 1100);
});