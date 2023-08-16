// step-1 button working
document.getElementById('deposit-bt').addEventListener('click',function(){
  // step-2 input working 
  const depositFiled = document.getElementById('deposit-counter');
  const newDepositString =depositFiled.value;
  const newDepositNumber=parseFloat(newDepositString);
  // step-3 counting deposit Amount
  const depositTotalAmount =document.getElementById('ud-damount');
  const pevesDepositTotalString = depositTotalAmount.innerText;
  const pevesDepositNumber=parseFloat(pevesDepositTotalString);
  // step-4 all deposite number are sumestion 
  const currentDeposit = newDepositNumber + pevesDepositNumber;
  // set the Deposit total
  depositTotalAmount.innerText = currentDeposit;
  // step -5  balance Amount are sumestion
  const totalBalanceAmount = document.getElementById('Total-balance');
  const totalBalanceAmountString=totalBalanceAmount.innerText;
  const totalBalanceAmountNumber=parseFloat(totalBalanceAmountString);
  // step -6 calculate totalBalance 
  const calculateTotalBalance = totalBalanceAmountNumber+newDepositNumber;
  // set the TotalBalance total
  totalBalanceAmount.innerText=calculateTotalBalance;
  

  // step-7 last step it working by clear data in input value
  depositFiled.value= '';
  

});
