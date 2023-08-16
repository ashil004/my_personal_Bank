// step -1 button Works 
document.getElementById('withdraw-bt').addEventListener('click',function(){
    // step-2 input value string to Number convert new withdraw filed
    const newWithdrawElement = document.getElementById('w-input');
    const  newWithdrawElementString= newWithdrawElement.value;
    const newWithdrawElementNumber = parseFloat(newWithdrawElementString);
    //  step -3  same to step -2 but  html id is different 
    const parseWithdrawElement = document.getElementById('w-balance');
    const parseWithdrawElementString = parseWithdrawElement.innerText;
    const parseWithdrawElementnumber = parseFloat(parseWithdrawElementString);
   const withdraw = newWithdrawElementNumber + parseWithdrawElementnumber;
    parseWithdrawElement.innerText = withdraw;
    // step 5 :
    const totalBalanceAmount = document.getElementById('Total-balance');
    const totalBalanceAmountString = totalBalanceAmount.innerText;
    const totalBalanceAmountNumber = parseFloat(totalBalanceAmountString);
    // step-6
    const mainBalance = totalBalanceAmountNumber - newWithdrawElementNumber;
    parseWithdrawElement.innerText = mainBalance;
    
    // step -7 clear the input value 
   a.value ='';

    
})

