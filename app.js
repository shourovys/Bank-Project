document.getElementById("log-in-btn").addEventListener("click", function () {

    document.getElementById("log-in").style.display = "none";
    document.getElementById("bank-acc").style.display = "block";

})




// ---------------------------------account management

// ----------------------------------------------Deposit btn handler

document.getElementById("addDeposit").addEventListener("click", function () {

    const inputDepositInt = getInputAmount("input-deposit");

    // const inputDeposit = document.getElementById("input-deposit").value;
    // document.getElementById("input-deposit").value = "";
    // const inputDepositInt = parseFloat(inputDeposit);



    // const currentBalance = document.getElementById("current-balance").innerHTML;
    // const currentBalanceInt = parseFloat(currentBalance);

    // const currentDeposit = document.getElementById("current-deposit").innerText;
    // const currentDepositInt = parseFloat(currentDeposit);

    // // -----------------------Update Deposit/
    // const totalDeposit = inputDepositInt + currentDepositInt;
    // const totalBalance = inputDepositInt + currentBalanceInt;

    // document.getElementById("current-deposit").innerHTML = totalDeposit;
    // document.getElementById("current-balance").innerHTML = totalBalance



    updateAmount("current-balance", inputDepositInt)
    updateAmount("current-deposit", inputDepositInt)

})

// =======================================function fot optimize code

// ------------------------------------function that give us input number
function getInputAmount(id) {
    const inputAmount = document.getElementById(id).value;
    document.getElementById(id).value = "";
    const inputAmountInt = parseFloat(inputAmount);
    return inputAmountInt;
}

//-------------------------------------- this Function update all amount
function updateAmount(id, inputAmount) {
    const current = document.getElementById(id).innerHTML;
    const currentInt = parseFloat(current);
    const totalAmount = inputAmount + currentInt;
    document.getElementById(id).innerHTML = totalAmount
}

// ----------------------------------------------withdraw btn handler

document.getElementById("addWithdraw").addEventListener("click", function () {
    const inputWithdrawInt = getInputAmount("input-withdraw");

    // const inputWithdraw = document.getElementById("input-withdraw").value;
    // document.getElementById("input-withdraw").value = "";
    // const inputWithdrawInt = parseFloat(inputWithdraw);




    //     const currentBalanc = document.getElementById("current-balance").innerHTML;
    //     const currentBalanceIn = parseFloat(currentBalanc);

    //     const currentWithdraw = document.getElementById("current-withdraw").innerText;
    //     const currentWithdrawInt = parseFloat(currentWithdraw);

    //     // -----------------------Update withdraw/
    //     const totalWithdraw = inputWithdrawInt + currentWithdrawInt;
    //     const totalBalanc = currentBalanceIn - inputWithdrawInt;

    //     document.getElementById("current-withdraw").innerHTML = totalWithdraw;
    //     document.getElementById("current-balance").innerHTML = totalBalanc


    updateAmount("current-balance", -1 * inputWithdrawInt)
    updateAmount("current-withdraw", inputWithdrawInt)

})



