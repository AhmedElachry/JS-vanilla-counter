// first will catch up our main elements

// displayed counter value
let counterDisplay = document.querySelector(".counter");
// input value from user
let counterValue = document.querySelector(".value");
// our warning field
let warningText = document.querySelector(".warning");
// inc button
let incBtn = document.querySelector(".increment");
// dec button
let decBtn = document.querySelector(".decrement");

/////////////////////////////////////////
// input validation
let value = 0; // (= 0;) this is the simple method to avoid appering NaN to the user was before like this (let value;)
counterValue.oninput = () => {
  value = +counterValue.value;
  return (
    isNaN(value)
      ? (warningText.innerHTML = "please add a valid number")
      : value < 0
      ? (warningText.innerHTML = "please add a positive number")
      : (warningText.innerHTML = ""),
    value
  );
};

//  will go now with our main functions

let sumValue = 0; // (= 0;) this is the solution of our previos problem (the sum was NaN) was (let sumValue;)

incBtn.onclick = () => {
  sumValue += value;
  counterDisplay.innerHTML = sumValue;
};
decBtn.onclick = () => {
  sumValue -= value;
  counterDisplay.innerHTML = sumValue;
};
