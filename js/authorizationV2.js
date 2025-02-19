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

document.getElementById("forget").addEventListener("click", forgetPassword)

function forgetPassword(){
    document.getElementById("forget-password").style.display = "block";
    document.getElementById("sign-in").style.display = "none";
    document.getElementById("authoritation").style.display = "block";

    document.querySelectorAll(".form-container").forEach(form => {
        form.querySelectorAll("input").forEach(input => input.value = "")
    })
}

loginBtn.addEventListener("click", showAuthorization)
document.getElementById("authoritation").addEventListener("click", showAuthorization)

function showAuthorization(){
    document.getElementById("sign-in").style.display = "flex";
    document.getElementById("forget-password").style.display = "none";
    document.getElementById("resolve-password").style.display = "none";

    document.querySelectorAll(".form-container").forEach(form => {
        form.querySelectorAll("input").forEach(input => input.value = "")
        
        let box = document.getElementById("box")
        let successBox = document.getElementById("success-box")

        box.style.display = "block"
        successBox.style.display = "none"
    })
}


document.getElementById("back").addEventListener("click", goBackToAuthorization)

function goBackToAuthorization(){
    document.getElementById("sign-in").style.display = "flex";
    document.getElementById("forget-password").style.display = "none";
    document.getElementById("resolve-password").style.display = "none"
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

const passwordToggles = [
    { hide: "hide-password", show: "show", input: "password-input" },
    { hide: "error-hide", show: "show-error", input: "password-input" },
    { hide: "resetform-password-hide-password", show: "resetfrom-password-error-hide", input: "resetform-password-input" },
    { hide: "reset-password-hide-password", show: "reset-password-error-hide", input: "reset-password-input" },
    { hide: "registrationForm-password-hide-password", show: "registrationForm-password-error-hide", input: "registration-password-input" },
    { hide: "registration-password-hide-password", show: "registration-password-error-hide", input: "repeat-password-input" }
];

passwordToggles.forEach(({ hide, show, input }) => {
    const hideIcon = document.getElementById(hide);
    const showIcon = document.getElementById(show);
    const passwordField = document.getElementById(input);

    if (hideIcon && showIcon && passwordField) {
        hideIcon.addEventListener("click", () => togglePassword(passwordField, hideIcon, showIcon));
        showIcon.addEventListener("click", () => togglePassword(passwordField, hideIcon, showIcon));
    }
});

function togglePassword(passwordField, hideIcon, showIcon) {
    const isHidden = passwordField.type === "password";
    passwordField.type = isHidden ? "text" : "password";
    
    if(passwordField.type === "text"){
        hideIcon.classList.add("none")
        showIcon.classList.add("block")
    }else{
        hideIcon.classList.remove("none")
        showIcon.classList.remove("block")
    }
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        resetAllPasswords();
    });
});   

function resetAllPasswords() {
    passwordToggles.forEach(({ hide, show, input }) => {
        const hideIcon = document.getElementById(hide);
        const showIcon = document.getElementById(show);
        const passwordField = document.getElementById(input);

        if (hideIcon && showIcon && passwordField) {
            passwordField.type = "password";
            hideIcon.classList.remove("none");
            showIcon.classList.add("none");
        }
    });
}