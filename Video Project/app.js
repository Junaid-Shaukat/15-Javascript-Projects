
const btn = document.getElementById("btn");
const video = document.querySelector(".video");

btn.addEventListener("click",()=>{
    if(btn.textContent==="Play"){
        video.play();
        btn.textContent="Pause";
    }else if (btn.textContent==="Pause"){
        video.pause();
        btn.textContent="Play";
    }
})
