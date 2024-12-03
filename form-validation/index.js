const form = document.getElementById('form')
const email = document.getElementById('email')
const country = document.getElementById('country')
const postcode = document.getElementById('postcode')
const password = document.getElementById('password')
const confirmpassword = document.getElementById('confirm-password')
const submitbtn = document.getElementById('submit-btn')
const emailerrortext = document.getElementById('email-errortext')
const countryerrortext = document.getElementById('country-errortext')
const postcodeerrortext = document.getElementById('postcode-errortext')
const passworderrortext = document.getElementById('password-errortext')
const confirmpassworderrortext = document.getElementById('confirm-password-errortext')


form.addEventListener('submit', function(event){
    event.preventDefault()
    validateInputs();    
    
})

function showValidation(element, isValid, errorText, errorMessage){
    if (isValid){
        element.classList.remove('invalid-input')
        element.classList.add('valid-input')
        errorText.textContent = ""
    } else {
        element.classList.add('invalid-input')
        errorText.textContent = errorMessage
}
}

function validateInputs(){
    //email validation
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.value === ""){
        showValidation(email, false, emailerrortext, "Please enter an email address")

    } else {
        showValidation(email, pattern.test(email.value),emailerrortext, "Please enter a valid email address.")

    }

    //country validation
    let countrypattern = /^[a-zA-Z ]*$/;
    if (country.value === ""){
        showValidation(country, false ,countryerrortext, "Please enter a country.")
    } else {
        showValidation(country, countrypattern.test(country.value), countryerrortext, "Please enter a valid country.")
    }

    //postcode validation
    let postcodepattern = /^[0-9]*$/;
    if (postcode.value === ""){
        showValidation(postcode, false, postcodeerrortext, "Please enter a postcode.")
    } else {
        showValidation(postcode, postcodepattern.test(postcode.value), postcodeerrortext, "Please enter a valid postcode.")
    }
    
    //password validation
    if (password.value.length < 6){
        showValidation(password, false, passworderrortext, "Your password must be more than 6 characters long")
    } else if (password.value.length > 15){
        showValidation(password, false, passworderrortext, "Your password must be less than 15 characters long.")
    } else if (password.value === ""){
        showValidation(password, false, passworderrortext, "Please enter your password.")
    } else {passworderrortext.textContent = ""
        showValidation(password, true, passworderrortext)
    }
    
    //confirm password validation
    if (confirmpassword.value === ""){
        showValidation(confirmpassword, false, confirmpassworderrortext,"Please re-enter your password to confirm.")
    } else if ((password.value.length > 0) && (confirmpassword.value !== password.value)){
        showValidation(confirmpassword, false, confirmpassworderrortext,"Your passwords do not match.")
    } else if (confirmpassword.value === password.value) {
        showValidation(confirmpassword, true, confirmpassworderrortext)
    }
}

password.addEventListener('blur', function(){
    validateInputs()
})


confirmpassword.addEventListener('blur', function(){
    validateInputs()
})

email.addEventListener('blur',function(){
    validateInputs()
})

country.addEventListener('blur',function(){
    validateInputs()
})

postcode.addEventListener('blur',function(){
    validateInputs()
})