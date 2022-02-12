/* ================
===Input Field Value Convert to Integer
=============== */
function getInputValue(idClass) {
  const inputText = document.querySelector(idClass).value;
  const inputNumber = parseFloat(inputText);
  document.querySelector(idClass).value = "";
  return inputNumber;
}

/* ================
===Card Text Convert to Integer
=============== */
function getCardText(idClass) {
  const cardText = document.getElementById(idClass).innerText;
  const cardNumber = parseFloat(cardText);
  return cardNumber;
}

/* ================
===Total Balance Add
=============== */
function totalBalance(amount, isAdd) {
  let balanceTotalText = document.getElementById("balance-card").innerText;
  let balanceNumber = getCardText("balance-card");
  console.log(amount);
  if (isAdd === true) {
    let finalBalance = balanceNumber + amount;
    document.getElementById("balance-card").innerText = finalBalance;
  } else {
    let finalBalance = balanceNumber - amount;
    document.getElementById("balance-card").innerText = finalBalance;
  }
}

// ===================================
// ======CLICK HANDLER OF DEPOSIT=========
// ===================================
document.querySelector(".deposit-btn").addEventListener("click", function () {
  const inputValue = getInputValue(".deposit-field");
  const cardValue = getCardText("deposit-card");
  const updateDepositCard = inputValue + cardValue;
  if (updateDepositCard > 0) {
    document.getElementById("deposit-card").innerText = updateDepositCard;
    totalBalance(inputValue, true);
  } else {
    alert("Your Input is Not A Number. Please add a Valid Input");
  }
});

// ===================================
// =======CLICK HANDLER WITHDRAW=========
// ===================================
document.querySelector(".withdraw-btn").addEventListener("click", function () {
  const balanceCard = parseFloat(
    document.getElementById("balance-card").innerText
  );
  const inputValue = getInputValue(".withdraw-field");
  const cardValue = getCardText("withdraw-card");
  const updateWithdrawCard = inputValue + cardValue;
  if (updateWithdrawCard > 0) {
    if (0 < balanceCard) {
      document.getElementById("withdraw-card").innerText = updateWithdrawCard;
      totalBalance(inputValue, false);
    } else {
      alert("You Haven't Enough Balance");
    }
  } else {
    alert("Your Input is Not A Number. Please add a Valid Input");
  }
});
