let btn=document.querySelector(".button");
let btn1=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    const popup=document.querySelector('.popup');
        popup.classList.remove('hide');
})
btn1.addEventListener("click",()=>{
    const popup=document.querySelector('.popup');
        popup.classList.add('hide');
})