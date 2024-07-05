document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("starty");
    video.play();
    video.controls = false;
    video.removeAttribute("controls");
});

document.querySelector(".startGame").addEventListener("click",()=>{
    document.querySelector(".startGame").style.backgroundColor="green";
})