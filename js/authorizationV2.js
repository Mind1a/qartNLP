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
    { id: 1, hide: "hide-password", show: "show", input: "password-input" },
    { id: 2, hide: "error-hide", show: "show-error", input: "password-input" },
    { id: 3, hide: "resetform-password-hide-password", show: "resetfrom-password-error-hide", input: "resetform-password-input" },
    { id: 4, hide: "reset-password-hide-password", show: "reset-password-error-hide", input: "reset-password-input" },
    { id: 5, hide: "registrationForm-password-hide-password", show: "registrationForm-password-error-hide", input: "registration-password-input" },
    { id: 6, hide: "registration-password-hide-password", show: "registration-password-error-hide", input: "repeat-password-input" }
];

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

function passwordToggle(id){
    const item = passwordToggles.find(el => el.id === id);
    if(!item) return;

    const hideIcon = document.getElementById(item.hide);
    const showIcon = document.getElementById(item.show);
    const passwordField = document.getElementById(item.input);

    if (hideIcon && showIcon && passwordField) {
        hideIcon.addEventListener("click", () => togglePassword(passwordField, hideIcon, showIcon));
        showIcon.addEventListener("click", () => togglePassword(passwordField, hideIcon, showIcon));
    }

}

function resetDefaults() {
    passwordToggles.forEach(item => {
        const hideIcon = document.getElementById(item.hide);
        const showIcon = document.getElementById(item.show);
        const passwordField = document.getElementById(item.input);

        if (hideIcon && showIcon && passwordField) {
            passwordField.type = "password";
            hideIcon.classList.remove("none");
            showIcon.classList.remove("block");
        }
    });
}

passwordToggle(1)
passwordToggle(2)
passwordToggle(3)
passwordToggle(4)
passwordToggle(5)
passwordToggle(6)

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        resetDefaults();
    });
}); 