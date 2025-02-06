const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    toggleX();
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    toggleX();
});

function toggleX() {
    let whiteX = document.getElementById("white-X");
    let blueX = document.getElementById("blue-X");

    if (container.classList.contains("active")) {
        whiteX.style.display = "none";
        blueX.style.display = "block";
    } else {
        whiteX.style.display = "block";
        blueX.style.display = "none";
    }
}

function showPassword(icon){
    let passwordField = icon.previousElementSibling;
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}


// go back function
// function goBack(){
//     let authoritation = document.getElementById("sign-in")
//     let forgetPassword = document.getElementById("forget-password")
//     let authoritationBtn = document.getElementById("authoritation")

//     forgetPassword.style.display = "none";
//     authoritation.style.display = "flex";
//     authoritationBtn.style.display = "none";
// }


let box = document.getElementById("box");
    let successBox = document.getElementById("success-box");

    box.addEventListener("click", function () {
        if (box.style.display === "none") {
            box.style.display = "block";
            successBox.style.display = "none";
        } else {
            box.style.display = "none";
            successBox.style.display = "block";
        }
    });

    successBox.addEventListener("click", function () {
        if (box.style.display === "none") {
            box.style.display = "block";
            successBox.style.display = "none";
        } else {
            box.style.display = "none";
            successBox.style.display = "block";
        }
    });

// function success(){
//     let box = document.getElementById("box")
//     let successBox = document.getElementById("success-box")

//     if(box.style.display === "none") {
//         box.style.display = "block";
//         successBox.style.display = "none";
//     } else {
//         box.style.display = "none";
//         successBox.style.display = "block";
//     }
// }

// const forget = document.getElementById("forget").addEventListener("click", forgetPassword())

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

const authoritation = document.getElementById("authoritation")

loginBtn.addEventListener("click", showAuthorization());
authoritation.addEventListener("click", showAuthorization());

function showAuthorization(formId){
    let forgetPassword = document.getElementById("forget-password");
    let active = document.getElementById("sign-in");
    let register = document.getElementById("authoritation")
    let resolve = document.getElementById("resolve-password")

    forgetPassword.style.display = "none";
    active.style.display = "flex";
    register.style.display = "none";
    resolve.style.display = "none";

    document.querySelectorAll(".form-container").forEach(form => {
        form.querySelectorAll("input").forEach(input => input.value = "")
        
        let box = document.getElementById("box")
        let successBox = document.getElementById("success-box")

        box.style.display = "block"
        successBox.style.display = "none"
    })
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

const check = document.getElementById("check")
check.addEventListener("click", () => {
    checkInput();
})

function checkInput(){
        window.location.href = "#resolve-password";
        resolvePassword();
}

const register = document.getElementById("register-btn")
console.log(register)
register.addEventListener("click", function () {
    window.location.href = "./sucessPage.html";
});


// document.querySelectorAll("form").forEach(form => form.setAttribute("novalidate", "true"));
