function isValidPhoneNumber(phoneNumber) {
    // Regular expression to match the pattern of phone numbers (xxx-xxx-xxxx)
    const phoneRegex = /^\d{11}/;
    
    // Check if the input matches the phone number pattern
    return phoneRegex.test(phoneNumber);
}
const numberInput = document.getElementById('for-number');
numberInput.addEventListener('keyup',function number(event){
    const userNumber =event.target.value;
    const checkNumber= isValidPhoneNumber(userNumber);
    if(checkNumber === true){
        document.getElementById('for-next').classList.remove('hidden');
    }  
})


