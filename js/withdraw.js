//add Evenlistner with the withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function () {
    console.log('yes clicked');

    // get the withdraw ammount

    const withdrawField = document.getElementById('withdraw-field');

    const newWithdrawAmountString = withdrawField.value;

    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    console.log(newWithdrawAmount);

    //clear the withdraw

    withdrawField.value = '';

    // get previuos withdraw total


    const withdrawTotalElement = document.getElementById('withdraw-total');

    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // calculate total amount and set it to the withdraw total element

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = newWithdrawTotal;


    //---------

    // get previous balance

    const balanceElement = document.getElementById('balance-total');

    const previousBalanceTotalString = balanceElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    // 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceElement.innerText = newBalanceTotal;















})