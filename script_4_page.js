const text_U_elements = document.querySelectorAll('.text_U');
let selectedCells2 = JSON.parse(localStorage.getItem('selectedCells'));
text_U_elements.forEach((element, index) => {
    if (selectedCells2.includes(index)) {
        element.style.backgroundColor = 'blue';
    }
});

//generating the selections of the computer's grid

const mySet = new Set();
while (mySet.size < 5) {
    mySet.add(Math.floor(Math.random() * 49) + 1);
}

//creating turns

// while (mySet.size > 0 && selectedCells2.length > 0) {

//     let flag1=false;
//     //user's turn
//     document.querySelector(".my").style.backgroundColor = 'green'
//     document.querySelector(".my").style.color = 'white'
//     let cGrid=document.querySelectorAll(".text_C");
//     cGrid.forEach((element,index)=>{
//         if(flag1){
//             alert('You have to choose once in a turn!')
//         }
//         element.addEventListener('click',()=>{
//             if(mySet.includes(index)){
//                 alert("Congrats! You destroyed one cell")
//                 element.style.backgroundColor = 'white'
//                 mySet.delete(index)
//             }
//             else{
//                 element.style.backgroundColor = 'yellow'
//             }
//             flag1=true;
//         })
//     })

//     if(flag1){
//         //computer's turn

//         let randomCell=Math.floor(Math.random() * 49) + 1;
//         if(selectedCells2.includes(randomCell)){
//             alert("Computer destroyed one cell")
//             selectedCells2[randomCell].style.backgroundColor = 'white'
//             selectedCells2[randomCell]=-1;
//         }
//         else{
//             selectedCells2[randomCell].style.backgroundColor='yellow';
//         }
//     }
// }


