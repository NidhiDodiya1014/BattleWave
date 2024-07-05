document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("starty");
    video.play();
    video.controls = false;
    video.removeAttribute("controls");
});