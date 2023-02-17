// first will catch up our main elements

let counterDisplay = document.querySelector(".counter");
let counterValue = document.querySelector(".value");
let warningText = document.querySelector(".warning");
let incBtn = document.querySelector(".increment");
let decBtn = document.querySelector(".decrement");
let value = 0;
/////////////////////////////////////////
isValidNumber(counterValue);
// input validation
function isValidNumber(counterValue) {
  counterValue.oninput = () => {
    value = +counterValue.value;
    if (isNaN(value)) {
      warningText.innerHTML = "please add a valid number";
      value = 0;
    } else if (value < 0) {
      warningText.innerHTML = "please add a positive number";
      value = 0;
    } else {
      warningText.innerHTML = "";
    }
  };
}
//  will go now with our main functions

let sumValue = 0;

incBtn.onclick = () => {
  sumValue += value;
  counterDisplay.innerHTML = sumValue;
};
decBtn.onclick = () => {
  sumValue -= value;
  counterDisplay.innerHTML = sumValue;
};
