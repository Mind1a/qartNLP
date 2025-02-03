const authorizationForm = document.getElementById("authorization-form")
const registerForm = document.getElementById("register-form")
const forgetPasswordForm = document.getElementById("forgetpassword-form")
const resetPasswordForm = document.getElementById("resetpassword-form")


authorizationForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let emailInput = authorizationForm.querySelector("input[type='email']")
    let passwordInput = authorizationForm.querySelector("input[type='password']")
    
})