const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");
// decrement button click
decrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value > 0) {
  displayValue.innerText =value - 1;
  } else {
    alert("Negative values are not allowed");
  }
});
//increment button click
incrementBtn.addEventListener("click", () =>{
  const value = Number(displayValue.innerText);
  if (value >= 10) {
    alert("10+ value aer not allowed");
  } else {
    displayValue.innerText = value + 1;
  }
});
//reset button click
resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
});