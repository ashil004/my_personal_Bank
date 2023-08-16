console.log("hello Personal Bank");
document.getElementById('bt-login').addEventListener('click',function(){
    const email=document.getElementById('email-cheak');
    const user_email=email.value;
    const password=document.getElementById('password-cheak');
    const user_password=password.value;
    if(user_email==='ashikkhan1850@gmail.com'&& user_password==='ashik1050'){
        window.location.href='index.html';
    }
    else{
        alert("invalid person.Please Registration Now");
    }
})