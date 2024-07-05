document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("starty");
    video.play();
    video.controls = false;
    video.removeAttribute("controls");
});

// document.querySelector(".startGame").addEventListener("click",()=>{
//     document.querySelector(".startGame").style.backgroundColor="green";
//     setInterval(() => {
//         document.querySelector(".firstPage").style.visibility="hidden";
//         document.querySelector(".secondPage").style.visibility="visible";
//     }, 1000);
// })

