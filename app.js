const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#output-box");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function calculateBill(amt) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberofNotes = Math.trunc(amt / availableNotes[i]);
    amt = amt % availableNotes[i];
    noOfNotes[i].innerText = numberofNotes;
  }
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function calculateNotes() {
  message.style.display = "none";
  if (billAmount.value > 0) {
    if (billAmount.value < cashGiven.value) {
      showMessage("success");
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateBill(amountToBeReturned);
    } else {
      showMessage("Please give the cash greater than the bill amount");
    }
  } else {
    showMessage("Please enter a positive value");
  }
}

checkButton.addEventListener("click", calculateNotes);
