document.getElementsByClassName("button_ok")[0].addEventListener("click",()=>{
    document.getElementsByClassName("button_ok")[0].style.visibility="hidden";
    document.querySelector(".loader2").style.display = "flex";
    setTimeout(() => {
        document.querySelector(".loader2").style.display = "none";
        document.querySelector(".secondPage").style.display="none";
        document.querySelector(".thirdPage").style.display="flex";
    }, 1100);
})