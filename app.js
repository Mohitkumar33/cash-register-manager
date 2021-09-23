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

function backgroundColor(color) {
  message.style.backgroundColor = color;
}

function calculateNotes() {
  message.style.display = "none";
  if (parseInt(billAmount.value) > 0) {
    if (parseInt(billAmount.value) <= parseInt(cashGiven.value)) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      backgroundColor("#6FD36B");
      showMessage("success you have to give: " + amountToBeReturned + " ₹");

      calculateBill(amountToBeReturned);
    } else {
      backgroundColor("#CF3F3F");
      showMessage("Please give the cash greater than the bill amount");
    }
  } else {
    backgroundColor("#CF3F3F");
    showMessage("Please enter a positive value");
  }
}

checkButton.addEventListener("click", calculateNotes);
