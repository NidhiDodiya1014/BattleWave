document.querySelector(".startGame").addEventListener("click",()=>{
    document.querySelector(".startGame").style.display='none';
    document.querySelector(".loader1").style.display = "flex";
    setInterval(() => {
        document.querySelector(".firstPage").style.display="none";
        document.querySelector(".loader1").style.display = "none";
        document.querySelector(".secondPage").style.visibility="visible";
    }, 1100);
})

