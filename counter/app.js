"use strict";

//increase button
const increaseButton = document.querySelector(".increase");

//decrease button
const decreaseButton = document.querySelector(".decrease");

//reset button
const resetButton = document.querySelector(".reset");

//value of the number
let value = document.getElementById("value");

//handling increase button
increaseButton.addEventListener("click", function () {
  value.textContent++;
  checkState();
});

//handling decrease button
decreaseButton.addEventListener("click", function () {
  value.textContent--;
  checkState();
});

//handling reset button
resetButton.addEventListener("click", function () {
  value.textContent = 0;
  checkState();
});

//check state of the number's value
function checkState() {
  Number(value.textContent) === 0
    ? (value.style.color = "#222")
    : Number(value.textContent) > 0
    ? (value.style.color = "green")
    : (value.style.color = "red");
}
