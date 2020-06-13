document.getElementById("log-in-btn").addEventListener("click", function () {

    document.getElementById("log-in").style.display = "none";
    document.getElementById("bank-acc").style.display = "block";

})




// ---------------------------------account management



document.getElementById("addDeposit").addEventListener("click", function () {
    let currentBalance = document.getElementById("current-balance").innerHTML;
    let currentBalanceInt = parseFloat(currentBalance);

    const currentDeposit = document.getElementById("current-deposit").innerText;
    const currentDepositInt = parseFloat(currentDeposit);

    const inputDeposit = document.getElementById("input-deposit").value;
    document.getElementById("input-deposit").value = "";
    const inputDepositInt = parseFloat(inputDeposit);

    // -----------------------Update Deposit/
    const totalDeposit = inputDepositInt + currentDepositInt;
    let totalBalance = inputDepositInt + currentBalanceInt;

    document.getElementById("current-deposit").innerHTML = totalDeposit;
    document.getElementById("current-balance").innerHTML = totalBalance
})


document.getElementById("addWithdraw").addEventListener("click", function () {


    const currentBalanc = document.getElementById("current-balance").innerHTML;
    const currentBalanceIn = parseFloat(currentBalanc);

    const currentWithdraw = document.getElementById("current-withdraw").innerText;
    const currentWithdrawInt = parseFloat(currentWithdraw);

    const inputWithdraw = document.getElementById("input-withdraw").value;
    document.getElementById("input-withdraw").value = "";
    const inputWithdrawInt = parseFloat(inputWithdraw);

    // -----------------------Update Deposit/
    const totalWithdraw = inputWithdrawInt + currentWithdrawInt;
    const totalBalanc = currentBalanceIn - inputWithdrawInt;

    document.getElementById("current-withdraw").innerHTML = totalWithdraw;
    document.getElementById("current-balance").innerHTML = totalBalanc
})










// Withdraw management

const currentWithdraw = document.getElementById("current-withdraw").innerHTML


const inputWithdraw = document.getElementById("input-withdraw").value



