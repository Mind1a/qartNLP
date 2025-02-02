const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function showPassword(icon){
    let passwordField = icon.previousElementSibling;
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

function success(){
    let box = document.getElementById("box")
    let successBox = document.getElementById("success-box")

    if(box.style.display === "none") {
        box.style.display = "block";
        successBox.style.display = "none";
    } else {
        box.style.display = "none";
        successBox.style.display = "block";
    }
}

function forgetPassword(){
    let forgetPassword = document.getElementById("forget-password");
    let active = document.getElementById("sign-in");
    let register = document.getElementById("authoritation")

    forgetPassword.style.display = "block";
    active.style.display = "none";
    register.style.display = "block";
}

function showAuthorization(){
    let forgetPassword = document.getElementById("forget-password");
    let active = document.getElementById("sign-in");
    let register = document.getElementById("authoritation")
    let resolve = document.getElementById("resolve-password")

    forgetPassword.style.display = "none";
    active.style.display = "flex";
    register.style.display = "none";
    resolve.style.display = "none";
}

function resolvePassword(){
    let forgetPassword = document.getElementById("forget-password");
    let active = document.getElementById("sign-in");
    let register = document.getElementById("authoritation")
    let resolve = document.getElementById("resolve-password")

    forgetPassword.style.display = "none";
    active.style.display = "none";
    register.style.display = "none";
    resolve.style.display = "flex";
}