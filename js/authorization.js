const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const whiteX = document.getElementById("white-X");
const blueX = document.getElementById("blue-X");

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    toggleX();
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    toggleX();
});

function toggleX() {
    whiteX.classList.toggle("none", container.classList.contains("active"));
    whiteX.classList.toggle("block", !container.classList.contains("active"));
    
    blueX.classList.toggle("none", !container.classList.contains("active"));
    blueX.classList.toggle("block", container.classList.contains("active"));
}

const hideIcon = document.getElementById("hide-password")
const showIcon = document.getElementById("show")
const errorHideIcone = document.getElementById("error-hide")
const showErrorIcon = document.getElementById("show-error")
const resetFormHideIcon = document.getElementById("resetform-password-hide-password")
const resetFormErrorHideIcon = document.getElementById("resetfrom-password-error-hide")
const resetHideIcon = document.getElementById("reset-password-hide-password")
const resetErrorHideIcon = document.getElementById("reset-password-error-hide")

const registrationFormHideIcon = document.getElementById("registrationForm-password-hide-password")
const registrationFormErrorIcon = document.getElementById("registrationForm-password-error-hide")
const registrationHideIcon = document.getElementById("registration-password-hide-password")
const registrationErrorIcon = document.getElementById("registration-password-error-hide")

// hideIcon.addEventListener("click", () => {
//     showPassword(this)
// })
// errorHideIcone.addEventListener("click", () => {
//     showPassword(this)
// })
resetFormHideIcon.addEventListener("click", () => {
    showResolveFormPassword(this)
})
resetFormErrorHideIcon.addEventListener("click", () => {
    showResolveFormPassword(this)
})
resetHideIcon.addEventListener("click", () => {
    showResolvePassword(this)
})
resetErrorHideIcon.addEventListener("click", () => {
    showResolvePassword(this)
})
registrationFormHideIcon.addEventListener("click", () => {
    showRegisterFormPassword(this)
})
registrationFormErrorIcon.addEventListener("click", () => {
    showRegisterFormPassword(this)
})
registrationHideIcon.addEventListener("click", () => {
    showRegisterPassword(this)
})
registrationErrorIcon.addEventListener("click", () => {
    showRegisterPassword(this)
})

errorHideIcone.addEventListener("click", toggleErrorPassword);
showErrorIcon.addEventListener("click", toggleErrorPassword);

const passwordField = document.getElementById("password-input");
function toggleErrorPassword() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        errorHideIcone.style.display = "none";  
        showErrorIcon.style.display = "block"; 
    } else {
        passwordField.type = "password";
        errorHideIcone.style.display = "block"; 
        showErrorIcon.style.display = "none";  
    }
}

// Event listeners for both icons
hideIcon.addEventListener("click", togglePassword);
showIcon.addEventListener("click", togglePassword);

function togglePassword() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        hideIcon.style.display = "none";  
        showIcon.style.display = "block"; 
    } else {
        passwordField.type = "password";
        hideIcon.style.display = "block"; 
        showIcon.style.display = "none";  
    }
}


// function showPassword(icon) {
//     let passwordField = document.getElementById("password-input");
//     if (passwordField) {
//         passwordField.type = passwordField.type === "password" ? "text" : "password";
//     }
// }

function showResolveFormPassword(icon) {
    let resetFromPasswordField = document.getElementById("resetform-password-input")
    if(resetFromPasswordField){
        resetFromPasswordField.type = resetFromPasswordField.type === "password" ? "text" : "password";
    }
}

function showResolvePassword(icon) {
    let resetPasswordField = document.getElementById("reset-password-input")
    if(resetPasswordField){
        resetPasswordField.type = resetPasswordField.type === "password" ? "text" : "password";
    }
}

function showRegisterFormPassword(icon){
    let registerFormPasswordField = document.getElementById("registration-password-input")
    if(registerFormPasswordField){
        registerFormPasswordField.type = registerFormPasswordField.type === "password" ? "text" : "password";
    }
}

function showRegisterPassword(icon){
    let registerPasswordField = document.getElementById("repeat-password-input")
    if(registerPasswordField){
        registerPasswordField.type = registerPasswordField.type === "password" ? "text" : "password";
    }
}

let box = document.getElementById("box");
let successBox = document.getElementById("success-box");

    box.addEventListener("click", function () {
        if (box.style.display === "none") {
            box.style.display = "block";
            successBox.style.display = "none";
        }else{
            box.style.display = "none";
            successBox.style.display = "block";
        }

    });

    successBox.addEventListener("click", function () {
        if (box.style.display === "none") {
            box.style.display = "block";
            successBox.style.display = "none";
        }else {
            box.style.display = "none";
            successBox.style.display = "block";
        }

    });

const forget = document.getElementById("forget")
forget.addEventListener("click", () => {
    forgetPassword();
})

function forgetPassword(formId){
    let forgetPassword = document.getElementById("forget-password");
    let active = document.getElementById("sign-in");
    let register = document.getElementById("authoritation")

    forgetPassword.style.display = "block";
    active.style.display = "none";
    register.style.display = "block";

    document.querySelectorAll(".form-container").forEach(form => {
        form.querySelectorAll("input").forEach(input => input.value = "")
    })
}

loginBtn.addEventListener("click", () => {
    showAuthorization();
})

const authorization = document.getElementById("authoritation")
authorization.addEventListener("click", () => {
    showAuthorization()
})

function showAuthorization(){
    let active = document.getElementById("sign-in");
    let forgetPassword = document.getElementById("forget-password");
    let resolve = document.getElementById("resolve-password")

    active.style.display = "flex";
    forgetPassword.style.display = "none";
    resolve.style.display = "none";

    document.querySelectorAll(".form-container").forEach(form => {
        form.querySelectorAll("input").forEach(input => input.value = "")
        
        let box = document.getElementById("box")
        let successBox = document.getElementById("success-box")

        box.style.display = "block"
        successBox.style.display = "none"
    })
}

const backImg = document.getElementById("back")
backImg.addEventListener("click", () => {
    goBackToAuthorization()
})

function goBackToAuthorization(){
    let active = document.getElementById("sign-in");
    let forgetPassword = document.getElementById("forget-password");
    let resolve = document.getElementById("resolve-password")

    active.style.display = "flex"
    forgetPassword.style.display = "none"
    resolve.style.display = "none"
}