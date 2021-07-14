    // Login button event handler 
    let loginBtn = document.getElementById('login');
    loginBtn.addEventListener('click', function(){
        const loginArea = document.getElementById('login-area');
        loginArea.style.display = 'none';// just hide

        const transactionArea = document.getElementById('transaction-area');
        transactionArea.style.display = 'block'; // just unHide
    })

    // Deposit button event handler
    document.getElementById('addDeposit').addEventListener('click', function(){
        // const depositAmount = document.getElementById('depositAmount').value;
        // const depositNumber = parseFloat(depositAmount);
        const depositNumber = getInputNumber('depositAmount');

        updateInnerText("currentDeposit",depositNumber)
        updateInnerText("currentBalance",depositNumber)

        document.getElementById('depositAmount').value = "";
        
    })


    // Withdraw button event handler
    const withdrawBtn = document.getElementById('addWithdraw');
    withdrawBtn.addEventListener('click', function(){
        const withdrawNumber = getInputNumber("withdrawAmount")
        updateInnerText("currentWithdraw", withdrawNumber)
        updateInnerText("currentBalance", -1 * withdrawNumber)

        document.getElementById('withdrawAmount').value = "";
    })
    function getInputNumber(id) {
        const amount = document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;
    }


    function updateInnerText(id, addedNumber) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const total = addedNumber + currentNumber;
        document.getElementById(id).innerText = total;
    }