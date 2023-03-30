//step 1 : add evenlistner to the diposit button

document.getElementById('btn-deposit').addEventListener('click', function () {

    // get deposit amount from the input field:

    const depositField = document.getElementById('deposit-field');

    const newDepositAmountString = depositField.value;

    console.log(newDepositAmountString);

    //conver string deposit ammount to a number type

    const newDepositAmount = parseFloat(newDepositAmountString);

    // deposit field clear

    depositField.value = '';

    //get the privious deposit total

    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotalString = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);


    // calculate new deposit total

    const newDepositTotal = previousDepositTotal
        + newDepositAmount;


    depositTotalElement.innerText = newDepositTotal;
    //-------------------------------------

    //
    const balanceTotalElement = document.getElementById('balance-total');

    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    // get current blance totaal

    //calculate the new balance and add:

    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;

    balanceTotalElement.innerText = newBalanceTotal















})