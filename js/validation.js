const authorizationForm = document.getElementById("authorization-form")
const registerForm = document.getElementById("register-form")
const forgetPasswordForm = document.getElementById("forgetpassword-form")
const resetPasswordForm = document.getElementById("resetpassword-form")
const backImg = document.getElementById("back")


// authorizationForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let emailInput = authorizationForm.querySelector("input[type='email']")
//     let passwordInput = authorizationForm.querySelector("input[type='password']")
    
// })

forgetPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let emailInput = forgetPasswordForm.querySelector("input[type='email']")
    let emailLabel = forgetPasswordForm.querySelector("span")
    let button = forgetPasswordForm.querySelector("button")
    button.disabled = true

    if(emailInput.value.trim() === ""){
        emailInput.classList.add("error")
        emailLabel.classList.add("error-text")
        backImg.style.display = "block"
        button.disabled = true
    }else{
        emailInput.classList.remove("error")
        emailLabel.classList.remove("error-text")
        button.disabled = false
    }
})