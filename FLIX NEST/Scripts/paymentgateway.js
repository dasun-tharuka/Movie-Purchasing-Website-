//Validating credit card number is valid or not
function validateCardNo(cardNo){
    cardNo = cardNo.replace(/\s/g, '');

    if (!/^\d+$/.test(cardNo)) {
        return false;
    }

    if (cardNo.length === 16) {
        return true;
    }
    return false;
}

//Validating month is valid or not
function validateMonth(month){
    if(month>0 && month<13){
        return true;
    }
    return false;
}

//Validating name is valid or not
function validateName(name){
    const regex = /^[a-zA-Z\s]+$/;
    if(name.length>0 && regex.test(name)){
        return true;
    }
    return false;
}

//Validating email is valid or not
function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

//Validating cvv is valid or not
function validateCvv(cvv){
    if(cvv.length == 3){
        return true;
    }
    return false;
}

//Validating year is valid or not
function validateYear(year){
    if(year>2022){
        return true;
    }
    return false;
}

//Checks if the input is valid name or not, and adds a red or green border around the input
var inputfname = document.getElementById('fname');

inputfname.addEventListener('input',function(){
    if(!validateName(inputfname.value)){
        inputfname.style.border = "1px solid red";
    }else{
        inputfname.style.border ="1px solid green";
    }
});

//Checks if the input is valid email address or not, and adds a red or green border around the input 
var inputemail = document.getElementById('email');

inputemail.addEventListener('input',function(){
    if(!validateEmail(inputemail.value)){
        inputemail.style.border = "1px solid red";
    }else{
        inputemail.style.border ="1px solid green";
    }
});

//Checks if the input is valid or not, and adds a red or green border around the input 
var inputname = document.getElementById('name');

inputname.addEventListener('input',function(){
    if(!validateName(inputname.value)){
        inputname.style.border = "1px solid red";

    }else{
        inputname.style.border ="1px solid green";
    }
});

//Checks if the input is valid card-no or not, and adds a red or green border around the input 
var inputcard = document.getElementById('card-no');

inputcard.addEventListener('input',function(){
    if(!validateCardNo(inputcard.value)){
        inputcard.style.border = "1px solid red";
    }else{
        inputcard.style.border ="1px solid green";
    }
});

//Checks if the input is valid month or not, and adds a red or green border around the input 
var inputmonth = document.getElementById('month');

inputmonth.addEventListener('input',function(){
    if(!validateMonth(inputmonth.value)){
        inputmonth.style.border = "1px solid red";
    }else{
        inputmonth.style.border ="1px solid green";
    }
});

//Checks if the input is valid year or not, and adds a red or green border around the input
var inputyear = document.getElementById('year');

inputyear.addEventListener('input',function(){
    if(!validateYear(inputyear.value)){
        inputyear.style.border = "1px solid red";
    }else{
        inputyear.style.border ="1px solid green";
    }
});

//Checks if the input is valid CVV or not, and adds a red or green border around the input
var inputcvv = document.getElementById('cvv');

inputcvv.addEventListener('input',function(){
    if(!validateCvv(inputcvv.value)){
        inputcvv.style.border = "1px solid red";
    }else{
        inputcvv.style.border ="1px solid green";
    }
});

//Submit button depending on whether all the inputs are valid or not
const button = document.querySelector('.submit-btn');
document.querySelector('.button-hlod').addEventListener('mouseenter', function(){
    button.disabled = true;
    if(validateCvv(inputcvv.value) && validateName(inputfname.value) && validateCardNo(inputcard.value) && validateEmail(inputemail.value) && validateName(inputname.value) && validateMonth(inputmonth.value) && validateYear(inputyear.value)){
        button.disabled = false;   
    }
})
    
    





