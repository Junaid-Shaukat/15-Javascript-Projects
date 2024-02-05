const numElement = document.querySelector(".num");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");
const decreaseBtn = document.querySelector(".decrease");
let counter = 0;
const updateCounter = () => {
  numElement.textContent = counter;
};
increaseBtn.addEventListener("click", () => {
  counter++;
  numElement.style.color = '#1dfa00'
  updateCounter();
});
resetBtn.addEventListener("click", () => {
  counter = 0;
  numElement.style.color = '#fff'
  updateCounter();
});
decreaseBtn.addEventListener("click", () => {
  counter--;
  numElement.style.color = 'red'
  updateCounter();
});
