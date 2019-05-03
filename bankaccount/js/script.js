/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

// COLLECT INFO
/*
var bankAccount = function (ownerName){
    "use strict";
    var name, balance, deposit, withdrawal;
    
    function inputName() {
    var name = window.prompt("Enter your account name: ");
    if (name === "" || name === undefined) {
        name = window.prompt("Please enter a valid account name: ");
    } else {
        name = ownerName;
        balance = 0;
        
        // DISPLAY
        $("accountBalance").innerHTML = "Name: " + name + "; Balance: " + balance;


    function inputDeposit() {
        deposit = window.prompt("Enter the amount you are going to deposit:");
        if (deposit === "" || isNaN) {
            window.prompt("Sorry, that is not a valid deposit value. Enter a valid amount: ");
        } else {
            var newBalance = balance + deposit;
        }
      //  DISPLAY UPDATED BALANCE
    }
        
        
    function inputWithdraw() {
        withdrawal = window.prompt("Enter the amount you are going to withdraw:");
        if (withdrawal === "" || isNaN) {
            window.prompt("Sorry, that is not a valid deposit value. Enter a valid amount: ");
        } else if (withdrawal >= balance) {
            window.prompt("You have insufficient funds. Please enter an amount available in your account: ");        
        } else {
            var newBalance = balance - withdrawal;
        }
      //  DISPLAY UPDATED BALANCE
    }
    

        
// UPDATE BALANCE
    window.console.log("Name: " + name + "; Balance: " + balance);
};
*/

var BankAccount = function (ownerName){
    "use strict";
    var name = ownerName, balance = 0, deposit, withdrawal;
    
    return {
        inputName: function (ownerName) {
            
            if (name === "" || name === undefined) {
                var nameInput = window.prompt("Enter your account name: ");
                if (nameInput === "" || nameInput === undefined) {
                    nameInput = window.prompt("Please enter a valid account name: ");
                } else {
                    name = nameInput;
                    balance = 0;
                    $("accountBalance").innerHTML = "Name: " + name + "; Balance: " + balance;
                }
            } else {
                $("accountBalance").innerHTML = "Name: " + name + "; Balance: " + balance;
            }
        },

        inputDeposit: function () {
            var newBalance;
            deposit = window.prompt("Enter the amount you are going to deposit:");
            if (deposit === "" || isNaN(deposit)) {
                deposit = window.prompt("Sorry, that is not a valid deposit value. Enter a valid amount: ");
            } else {
                newBalance = balance + parseInt((deposit), 10);
                balance = newBalance;
            }
            
            //  DISPLAY UPDATED BALANCE
            $("accountBalance").innerHTML = "Name: " + name + "; Balance: " + balance;
        },
        inputWithdraw: function () {
            var newBalance;
            withdrawal = window.prompt("Enter the amount you are going to withdraw:");
            if (withdrawal === "" || isNaN(withdrawal)) {
                withdrawal = window.prompt("Sorry, that is not a valid deposit value. Enter a valid amount: ");
            } else if (withdrawal >= balance) {
                withdrawal = window.prompt("You have insufficient funds. Please enter an amount available in your account: ");        
            } else {
                newBalance = balance - parseInt((withdrawal), 10);
                balance = newBalance;
            }
            
            //  DISPLAY UPDATED BALANCE
            $("accountBalance").innerHTML = "Name: " + name + "; Balance: " + balance;
        }
    
    };  
    
// UPDATE BALANCE
    window.console.log("Name: " + name + "; Balance: " + balance);
};

var bankAccount1 = new BankAccount();
        
$("nameButton").addEventListener("click", bankAccount1.inputName);
$("depositButton").addEventListener("click", bankAccount1.inputDeposit); 
$("withdrawButton").addEventListener("click", bankAccount1.inputWithdraw);         