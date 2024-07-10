(function () {
    document.querySelector('.gif').style.display = 'none';
    document.querySelector('.gif1').style.display = 'none';

    const text_U_elements = document.querySelectorAll('.text_U');
    let selectedCells2 = JSON.parse(localStorage.getItem('selectedCells'));
    text_U_elements.forEach((element, index) => {
        if (selectedCells2.includes(index)) {
            element.style.backgroundColor = "#b0b3ec";
            element.style.color = 'white';
        }
        else element.style.color = 'black';
        element.textContent = (index + 1).toString(); // add the text
        element.style.textAlign = 'center'; // center the text horizontally
        element.style.display = 'flex'; // center the text vertically
        element.style.justifyContent = 'center';
        element.style.alignItems = 'center';
    });

    // generating the selections of the computer's grid

    let mySet = new Set();
    while (mySet.size < 5) {
        mySet.add(Math.floor(Math.random() * 49) + 1);
    }
    console.log(mySet);

    // creating turns
    let cGrid = document.querySelectorAll('.text_C');
    cGrid.forEach((element, index) => {
        element.style.color = 'black';
        element.textContent = (index + 1).toString(); // add the text
        element.style.textAlign = 'center'; // center the text horizontally
        element.style.display = 'flex'; // center the text vertically
        element.style.justifyContent = 'center';
        element.style.alignItems = 'center';
    });


    let userCount = 0;
    let compCount = 0;


    //user's turn
    document.querySelector(".my").style.backgroundColor = 'green';
    let flag = false, flag1 = false;
    function handler() {
        if (!flag1) {
            const textarea = document.querySelector('textarea[name="select"]');
            const userInput = textarea.value;

            if (/^\d+$/.test(userInput) && userInput !== '') {
                if (userInput > 49 || userInput < 1) alert("The entered value was not a valid value between 1 and 49. You lost your chance!")
                else {
                    document.querySelector(".my").textContent = 'You selected ' + userInput + "!";
                    if ((cGrid[parseInt(userInput) - 1].style.backgroundColor == "rgb(83, 0, 135)") || cGrid[parseInt(userInput) - 1].style.backgroundColor == "rgb(149, 255, 215)") { alert('You already have chosen this cell. Hence you lost your turn!') }
                    else if (mySet.has(parseInt(userInput))) {
                        //sounds
                        const audio = new Audio('mixkit-achievement-bell-600.wav');
                        audio.play();
                        //work
                        cGrid[parseInt(userInput) - 1].style.backgroundColor = "#530087";
                        cGrid[parseInt(userInput) - 1].style.color = "white";
                        mySet.delete(parseInt(userInput));
                        userCount++;
                        // console.log(userCount);
                        if (userCount == 1) {
                            //user won
                            flag = true;
                            document.querySelector('.ok1').style.display = "none";
                            document.querySelector('.select').style.display = "none";
                            document.querySelector('.choose').style.display = "block";
                            document.querySelector('.gif').style.display = "block";
                            const audio = new Audio('success-1-6297.mp3');
                            audio.play();
                            document.querySelector(".ok1").removeEventListener('click', handler);
                        }
                    }
                    else {
                        cGrid[parseInt(userInput) - 1].style.backgroundColor = "#95ffd7";
                        const audio = new Audio('pop-39222.mp3');
                        audio.play();
                    }
                }
            } else {
                alert("The entered value was not valid value. You lost your chance!")
            }
            document.querySelector(".ok1").style.display = "none";
        }
        if (!flag) {
            let userStorage = [];

            //computer's turn
            let outer = setTimeout(() => {
                document.querySelector(".my").style.backgroundColor = 'black';
                document.querySelector(".machine").style.backgroundColor = 'green';
                document.querySelector(".machine").textContent = "Computer's turn";
            }, 1100);
            let inner = setTimeout(() => {
                let randomSel = Math.floor(Math.random() * 49) + 1;
                while (text_U_elements[randomSel - 1].style.backgroundColor == "rgb(149, 255, 215)" || text_U_elements[randomSel - 1].style.backgroundColor == "rgb(83, 0, 135)") {
                    randomSel = Math.floor(Math.random() * 49) + 1;
                }
                console.log(randomSel);
                document.querySelector(".machine").textContent = 'Computer selected ' + randomSel + '!';
                if (text_U_elements[randomSel - 1].style.backgroundColor == "rgb(176, 179, 236)") {
                    text_U_elements[randomSel - 1].style.backgroundColor = "rgb(83, 0, 135)";
                    compCount++;
                    const audio = new Audio('negative_beeps-6008.mp3');
                    audio.play();
                    if (compCount == 5) {
                        //computer won!
                        flag1 = true;
                        document.querySelector('.ok1').style.display = 'none';
                        document.querySelector('.select').style.display = 'none';
                        document.querySelector('.choose').style.display = "block";
                        document.querySelector('.gif1').style.display = 'block';
                        const audio = new Audio('game-fx-9-40197.mp3');
                        audio.play();
                    }
                }
                else {
                    text_U_elements[randomSel - 1].style.backgroundColor = "#95ffd7"
                }
                userStorage.push(randomSel);
                if (!flag1) document.querySelector(".ok1").style.display = "block";
                document.querySelector(".my").style.backgroundColor = 'green';
                document.querySelector(".machine").style.backgroundColor = 'black';
                document.querySelector(".my").textContent = 'Your turn';
            }, 2000);
        }

    };
    document.querySelector(".ok1").addEventListener('click', handler);

    document.querySelector('.startGame').addEventListener('click', () => {
        document.querySelector('.naam').textContent = (document.querySelector('.select1').value) + "'s grid";
        document.querySelector('.naam').style.color = 'red';
    })

})();