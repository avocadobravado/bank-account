// business logic

function BankAccount (amount) {
  this.balance = amount;
}

BankAccount.prototype.withdrawal = function(amount) {
return this.balance -= amount;
}

BankAccount.prototype.deposit = function(amount) {
return this.balance += amount;
}

// user interface logic

$(document).ready(function() {
  var newAccount = new BankAccount(0);


  $("#bankForm").submit(function(event) {
  event.preventDefault();

  var userDeposit = parseInt($("#userDeposit").val());
  var userWithdrawal = parseInt($("#userWithdrawal").val());


  if (isNaN(userDeposit)) {
    newAccount.deposit(0);
    newAccount.withdrawal(userWithdrawal);
  } else if (isNaN(userWithdrawal)) {
    newAccount.deposit(userDeposit);
    newAccount.withdrawal(0);
  } else {
    newAccount.deposit(userDeposit);
    newAccount.withdrawal(userWithdrawal);
  }


    $("#results").show();
      $(".resultDeposit").text("$" + newAccount.balance);
      $(".resultWithdrawal").text("$" + newAccount.balance);
      // $(".resultDeposit").text(userDeposit);
    $("#userDeposit").val("");
    $("#userWithdrawal").val("");
  });
});
