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
  // console.log("bill value", billAmount.value);
  // console.log("cash value", cashGiven.value);
  // console.log(billAmount.value);
  // var finalBill = Number(billAmount.value);
  // console.log(finalBill.value);
  // console.log(typeof finalBill.value);
  // if (typeof finalBill.value !== "number") {
  //   console.log("It is not a number");
  //   message.style.display = "block";
  //   console.log(typeof finalBill.value);
  //   message.innerText = "Bill amount is not a number!";
  //   return;
  // }
  if (billAmount.value > 0) {
    if (billAmount.value < cashGiven.value) {
      // console.log("hi");
      showMessage("success");
    } else {
      showMessage("Please give the cash greater than the bill amount");
    }
    // console.log("Click it");
  } else {
    showMessage("Please enter a positive value");
  }
}

checkButton.addEventListener("click", calculateNotes);
