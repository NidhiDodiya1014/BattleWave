(function() {

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

const mySet = new Set();
while (mySet.size < 5) {
    mySet.add(Math.floor(Math.random() * 49) + 1);
}

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


let userCount=0;
let compCount=0;


//user's turn
document.querySelector(".my").style.backgroundColor = 'green';
document.querySelector(".ok1").addEventListener('click', () => {
    const textarea = document.querySelector('textarea[name="select"]');
    const userInput = textarea.value;

    if (/^\d+$/.test(userInput) && userInput !== '') {
        if (userInput > 49 || userInput < 1) alert("The entered value was not a valid value between 1 and 49. You lost your chance!")
        else {
            document.querySelector(".my").textContent = 'You selected ' + userInput + "!";
            if ((cGrid[parseInt(userInput) - 1].style.backgroundColor == "rgb(83, 0, 135)") || cGrid[parseInt(userInput) - 1].style.backgroundColor == "#95ffd7") { alert('You already had chosen this cell. Hence you lost your turn!') }
            else if (mySet.has(parseInt(userInput))) {
                //sounds

                //work
                cGrid[parseInt(userInput) - 1].style.backgroundColor = "#530087";
                cGrid[parseInt(userInput) - 1].style.color = "white";
                mySet.delete(parseInt(userInput) - 1);
                userCount++;
                if(userCount==5){
                    //user won
                }
            }
            else cGrid[parseInt(userInput) - 1].style.backgroundColor = "#95ffd7";
        }
    } else {
        alert("The entered value was not valid value. You lost your chance!")
    }
    document.querySelector(".ok1").style.display = "none";



    //computer's turn
    setTimeout(() => {
        document.querySelector(".my").style.backgroundColor = 'black';
        document.querySelector(".machine").style.backgroundColor = 'green';
    }, 1500);
    setTimeout(() => {

        let randomSel = Math.floor(Math.random() * 49) + 1;
        document.querySelector(".machine").textContent = 'Computer selected ' + randomSel + '!';    
        if(text_U_elements[randomSel-1].style.backgroundColor=="#b0b3ec"){
            text_U_elements[randomSel-1].style.backgroundColor='purple';
            compCount++;
            if(compCount==5){
                //computer won!
            }
        }
        else{
            text_U_elements[randomSel-1].style.backgroundColor="#95ffd7"
        }
        document.querySelector(".ok1").style.display = "block";
    }, 3000);

})

})();