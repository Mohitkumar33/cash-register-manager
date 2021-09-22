const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#outputBox");

function calculateNotes() {
  message.style.display = "none";
  if (billAmount.value <= cashGiven.value) {
    console.log("Click it");
  } else {
    message.style.display = "block";
    message.innerText = "Wrong Input";
  }
}

checkButton.addEventListener("click", calculateNotes);
