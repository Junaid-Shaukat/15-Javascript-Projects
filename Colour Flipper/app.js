const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

addEventListener("click",function (){
    const randomNumber=getrandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber] ;
     color. textContent = colors[randomNumber] ;
})

function getrandomNumber(){
    return Math.floor(Math.random()*colors.length);
}