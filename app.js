const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#output-box");

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function calculateNotes() {
  message.style.display = "none";
  if (billAmount.value > 0) {
    if (billAmount.value < cashGiven.value) {
      showMessage("success");
    } else {
      showMessage("Please give the cash greater than the bill amount");
    }
  } else {
    showMessage("Please enter a positive value");
  }
}

checkButton.addEventListener("click", calculateNotes);
