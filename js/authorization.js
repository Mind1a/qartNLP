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



// forms variables
const authorizationForm = document.getElementById("authorization-form")
const registrationForm = document.getElementById("register-form")
const forgetPasswordForm = document.getElementById("forgetpassword-form")
const resetPasswordForm = document.getElementById("resetpassword-form")

    
// authorization validation
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
authorizationForm.addEventListener("submit", (e) => {
    e.preventDefault()
    auzorithationErrors(emailInput, passwordInput)
})

function auzorithationErrors(email, password) {
    const emailLabel = document.getElementById("email-label");
    const passwordLabel = document.getElementById("password-label");
    const hideIcon = document.getElementById("hide-password");
    const errorHideIcone = document.getElementById("error-hide");
    const EmailErrorMessage = document.getElementById("email-error-message");
    const PassowrdErrorMessage = document.getElementById("password-error-message");
    
    
    if (email.value.trim() === "" || email.value === null) {
        showEmailErrors(email, emailLabel, EmailErrorMessage, "გთხოვთ შეიყვანოთ ელ ფოსტა");
    } else if (!isValidEmail(email.value)) {
        showEmailErrors(email, emailLabel, EmailErrorMessage, "გთხოვთ შეიყვანოთ ვალიდური ელ ფოსტა");
    } else {
        clearEmailErrors(email, emailLabel, EmailErrorMessage, "");
    }
    
    if (password.value.trim() === "" || password.value === null) {
        showPasswordErrors(password, passwordLabel, PassowrdErrorMessage, "გთხოვთ შეიყვანოთ პაროლი", hideIcon, errorHideIcone);
    } else {
        clearPasswordErrors(password, passwordLabel, PassowrdErrorMessage, "", hideIcon, errorHideIcone);
    }
}



// forget password validation
const forgetPasswordEmailInput = document.getElementById("forget-password-email-input")
forgetPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    forgetPasswordErrors(forgetPasswordEmailInput)
})

function forgetPasswordErrors(email){
    const forgetPasswordEmailLabel = document.getElementById("forget-password-email-label")
    const errorMessage = document.getElementById("forget-password-error-message")

    if (email.value.trim() === "" || email.value === null) {
        const img = document.getElementById("back")
        img.classList.add("block")
        showEmailErrors(email, forgetPasswordEmailLabel, errorMessage, "გთხოვთ შეიყვანოთ ელ ფოსტა");
    } else if (!isValidEmail(email.value)) {
        const img = document.getElementById("back")
        img.classList.add("block")
        showEmailErrors(email, forgetPasswordEmailLabel, errorMessage, "გთხოვთ შეიყვანოთ ვალიდური ელ ფოსტა");
    } else {
        const img = document.getElementById("back")
        img.classList.remove("block")
        clearEmailErrors(email, forgetPasswordEmailLabel, errorMessage, "");
        resolvePassword()
    }
}

function resolvePassword(){
    let forgetPassword = document.getElementById("forget-password");
    let active = document.getElementById("sign-in");
    let register = document.getElementById("authoritation")
    let resolve = document.getElementById("resolve-password")

    forgetPassword.style.display = "none"
    active.style.display = "none"
    register.style.display = "none"
    resolve.style.display = "flex"
}



// reset password validation
const resetFormPasswordInput = document.getElementById("resetform-password-input")
const resetPasswordInput = document.getElementById("reset-password-input")

resetPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault()
    resetPasswordErrors(resetFormPasswordInput, resetPasswordInput)
})

function resetPasswordErrors(password, resetPassword) {
    const resetFormPasswordLabel = document.getElementById("resetform-password-label");
    const resetPasswordLabel = document.getElementById("reset-password-label");
    const resetFormHideIcon = document.getElementById("resetform-password-hide-password");
    const resetFormErrorHideIcon = document.getElementById("resetfrom-password-error-hide");
    const resetHideIcon = document.getElementById("reset-password-hide-password");
    const resetErrorHideIcon = document.getElementById("reset-password-error-hide");
    const passwordErrorMessage = document.getElementById("reset-resetPassword-error-message");
    const resetPasswordErrorMessage = document.getElementById("reset-password-error-message");

    let passwordErrors = [];
    let resetPasswordErrors = [];

    if (password.value.trim() === "" || password.value === null) {
        passwordErrors.push("პაროლი");
        showResetPasswordErrors(password, resetFormPasswordLabel, passwordErrorMessage, "პაროლი", resetFormHideIcon, resetFormErrorHideIcon);
    } else if (password.value.length < 8) {
        passwordErrors.push("პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს");
        showResetPasswordErrors(password, resetFormPasswordLabel, passwordErrorMessage, "პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს", resetFormHideIcon, resetFormErrorHideIcon);
    } else {
        clearResetPasswordErrors(password, resetFormPasswordLabel, passwordErrorMessage, resetFormHideIcon, resetFormErrorHideIcon);
    }

    if (resetPassword.value.trim() === "" || resetPassword.value === null) {
        resetPasswordErrors.push("გაიმეორეთ პაროლი");
        showResetPasswordErrors(resetPassword, resetPasswordLabel, resetPasswordErrorMessage, "გაიმეორეთ პაროლი", resetHideIcon, resetErrorHideIcon);
    } else if (password.value !== resetPassword.value) {
        resetPasswordErrors.push("პაროლი უნდა ემთხვეოდეს ერთმანეთს");
        showResetPasswordErrors(resetPassword, resetPasswordLabel, resetPasswordErrorMessage, "პაროლი უნდა ემთხვეოდეს ერთმანეთს", resetHideIcon, resetErrorHideIcon);
    } else {
        clearResetPasswordErrors(resetPassword, resetPasswordLabel, resetPasswordErrorMessage, resetHideIcon, resetErrorHideIcon);
    }

    if (passwordErrors.length > 0) {
        passwordErrorMessage.innerHTML = passwordErrors.join("<br>");
        passwordErrorMessage.classList.add("block");
    } else {
        passwordErrorMessage.innerHTML = "";
        passwordErrorMessage.classList.remove("block");
    }

    if (resetPasswordErrors.length > 0) {
        resetPasswordErrorMessage.innerHTML = resetPasswordErrors.join("<br>");
        resetPasswordErrorMessage.classList.add("block");
    } else {
        resetPasswordErrorMessage.innerHTML = "";
        resetPasswordErrorMessage.classList.remove("block");
    }
}



// registration validation
const nameInput = document.getElementById("name-input")
const surnameInput = document.getElementById("surname-input")
const registrationFormEmailInput = document.getElementById("registration-email-input")
const registrationFormPasswordInput = document.getElementById("registration-password-input")
const registrationFormRepeatPasswordInput = document.getElementById("repeat-password-input")

registrationForm.addEventListener("submit", (e) => {
    e.preventDefault()
    registrationErrors(nameInput, surnameInput, registrationFormEmailInput, registrationFormPasswordInput, registrationFormRepeatPasswordInput)
})

function registrationErrors(name, surname, email, password, repeatPassword){
    const nameLabel = document.getElementById("name-label")
    const surnameLabel = document.getElementById("surname-label")
    const registrationFormEmailLabel = document.getElementById("registration-email-label")
    const registrationFormPasswordLabel = document.getElementById("registration-password-label")
    const registrationFormRepeatPasswordLabel = document.getElementById("repeat-password-label")

    const registrationFormHideIcon = document.getElementById("registrationForm-password-hide-password")
    const registrationFormErrorIcon = document.getElementById("registrationForm-password-error-hide")
    const registrationHideIcon = document.getElementById("registration-password-hide-password")
    const registrationErrorIcon = document.getElementById("registration-password-error-hide")

    const nameErrorMessage = document.getElementById("register-form-name-error-message")
    const surnameErrorMessage = document.getElementById("register-form-surname-error-message")
    const emailErrorMessage = document.getElementById("register-form-email-error-message")
    const passwordErrorMessage = document.getElementById("register-form-password-error-message")
    const repeatPasswordErrorMessage = document.getElementById("register-form-reset-password-error-message")
    let passwordErrors = [];
    let repeatPasswordErrors = [];

    if(name.value.trim() === ""){
        showNameErrors(name, nameLabel, nameErrorMessage, "შეიყვანეთ სახელი")
    }else{
        clearNameErrors(name, nameLabel, nameErrorMessage, "")
    }

    if(surname.value.trim() === ""){
        showSurnameErrors(surname, surnameLabel, surnameErrorMessage, "შეიყვანეთ გვარი")
    }

    if (email.value.trim() === "" || email.value === null) {
        showEmailErrors(email, registrationFormEmailLabel, emailErrorMessage, "გთხოვთ შეიყვანოთ ელ ფოსტა");
    } else if (!isValidEmail(email.value)) {
        showEmailErrors(email, registrationFormEmailLabel, emailErrorMessage, "გთხოვთ შეიყვანოთ ვალიდური ელ ფოსტა");
    } else {
        clearEmailErrors(email, registrationFormEmailLabel, emailErrorMessage, "");
    }

    if (password.value.trim() === "" || password.value === null) {
        passwordErrors.push("პაროლი");
        showResetPasswordErrors(password, registrationFormPasswordLabel, passwordErrorMessage, "პაროლი", registrationFormHideIcon, registrationFormErrorIcon);
    } else if (password.value.length < 8) {
        passwordErrors.push("პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს");
        showResetPasswordErrors(password, registrationFormPasswordLabel, passwordErrorMessage, "პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს", registrationFormHideIcon, registrationFormErrorIcon);
    } else {
        clearResetPasswordErrors(password, registrationFormPasswordLabel, passwordErrorMessage, registrationFormHideIcon, registrationFormErrorIcon);
    }

    if (passwordErrors.length > 0) {
        passwordErrorMessage.innerHTML = passwordErrors.join("<br>");
        passwordErrorMessage.classList.add("block");
    } else {
        passwordErrorMessage.innerHTML = "";
        passwordErrorMessage.classList.remove("block");
    }

    if (repeatPassword.value.trim() === "" || repeatPassword.value === null) {
        repeatPasswordErrors.push("გაიმეორეთ პაროლი");
        showResetPasswordErrors(repeatPassword, registrationFormRepeatPasswordLabel, repeatPasswordErrorMessage, "გაიმეორეთ პაროლი", registrationHideIcon, registrationErrorIcon);
    } else if (password.value !== repeatPassword.value) {
        repeatPasswordErrors.push("პაროლი უნდა ემთხვეოდეს ერთმანეთს");
        showResetPasswordErrors(repeatPassword, registrationFormRepeatPasswordLabel, repeatPasswordErrorMessage, "პაროლი უნდა ემთხვეოდეს ერთმანეთს", registrationHideIcon, registrationErrorIcon);
    } else {
        clearResetPasswordErrors(repeatPassword, registrationFormRepeatPasswordLabel, repeatPasswordErrorMessage, registrationHideIcon, registrationErrorIcon);
    }

    if (repeatPasswordErrors.length > 0) {
        repeatPasswordErrorMessage.innerHTML = repeatPasswordErrors.join("<br>");
        repeatPasswordErrorMessage.classList.add("block");
    } else {
        repeatPasswordErrorMessage.innerHTML = "";
        repeatPasswordErrorMessage.classList.remove("block");
    }

    const successBox = document.getElementById("success-box")
    let text = document.getElementById("agree")
    if(window.getComputedStyle(successBox).display === "none"){
        text.classList.add("agree-error")
    }else{
        text.classList.remove("agree-error")
    }
}


    
// functions to avoid dublication

function showEmailErrors(email, label, error, textContent) {
    email.classList.add("error");
    label.classList.add("error-text");
    error.classList.add("block");
    error.classList.add("error-text");
    error.innerHTML = textContent;
}
    
function showPasswordErrors(password, label, error, textContent, icon, errorIcon) {
    password.classList.add("error");
    label.classList.add("error-text");
    error.classList.add("block");
    error.classList.add("error-text");
    error.innerHTML = textContent;
    
    icon.classList.add("none");
    errorIcon.classList.add("block");
}
    
function clearEmailErrors(email, label, error, textContent) {
    email.classList.remove("error");
    label.classList.remove("error-text");
    error.classList.remove("block");
    error.innerHTML = textContent;
}
    
function clearPasswordErrors(password, label, error, textContent, icon, errorIcon) {
    password.classList.remove("error");
    label.classList.remove("error-text");
    error.innerHTML = textContent;
    error.classList.remove("block");
    
    icon.classList.remove("none");
    icon.classList.add("block");
    errorIcon.classList.remove("block");
    errorIcon.classList.add("none");
}

function showResetPasswordErrors(password, label, errorMessage, textContent, icon, errorIcon) {
    password.classList.add("error");
    label.classList.add("error-text");

    if (!errorMessage.innerHTML.includes(textContent)) {
        errorMessage.innerHTML += (errorMessage.innerHTML ? "<br>" : "") + textContent;
    }

    errorMessage.classList.add("block");
    errorMessage.classList.add("error-text");

    icon.classList.add("none");
    errorIcon.classList.add("block");
}

function clearResetPasswordErrors(password, label, errorMessage, icon, errorIcon) {
    password.classList.remove("error");
    label.classList.remove("error-text");

    errorMessage.innerHTML = errorMessage.innerHTML
        .replace(/პაროლი \*|პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს \*|გაიმეორეთ პაროლი \*|პაროლი უნდა ემთხვეოდეს ერთმანეთს \*/g, "")
        .trim();

    if (errorMessage.innerHTML.startsWith("<br>")) errorMessage.innerHTML = errorMessage.innerHTML.substring(4);
    if (errorMessage.innerHTML.endsWith("<br>")) errorMessage.innerHTML = errorMessage.innerHTML.slice(0, -4);

    if (!errorMessage.innerHTML) errorMessage.classList.remove("block");

    icon.classList.remove("none");
    icon.classList.add("block");
    errorIcon.classList.remove("block");
    errorIcon.classList.add("none");
}

function showNameErrors(name, label, error, textContent){
    name.classList.add("error");
    label.classList.add("error-text");
    error.classList.add("block");
    error.classList.add("error-text");
    error.innerHTML = textContent
}
function clearNameErrors(name, label, error, textContent){
    name.classList.remove("error")
    label.classList.remove("error-text")
    error.classList.remove("block")
    error.innerHTML = textContent
}
function showSurnameErrors(surname, label, error, textContent){
    surname.classList.add("error");
    label.classList.add("error-text");
    error.classList.add("block");
    error.classList.add("error-text");
    error.innerHTML = textContent
}
function clearSurnameErrors(surname, label, textContent){
    surname.classList.remove("error")
    label.classList.remove("error-text")
    error.classList.remove("block")
    error.innerHTML = textContent
}

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
} 



// ფუნქცია რომ წაისშალოს ერორები სხვა გვერდზე გადასვლისას

function clearAllErrors() {
    document.querySelectorAll(".error").forEach(input => input.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(label => label.classList.remove("error-text"));
    document.querySelectorAll(".error-message").forEach(error => error.classList.remove("block"))
    document.querySelectorAll(".show").forEach(icon => icon.classList.remove("block"))
    
    document.querySelectorAll(".password-icon").forEach(icon => {
        icon.classList.remove("none");
        icon.classList.add("block");
    });
    document.querySelectorAll(".password-error-icon").forEach(icon => {
        icon.classList.remove("block");
        icon.classList.add("none");
    });
    
    const text = document.getElementById("agree");
    if (text) {
        text.classList.remove("agree-error");
    }

    const backImg = document.getElementById("back")
    if(backImg){
        backImg.classList.remove("block")
    }
}
const forgetLink = document.getElementById("forget")
forgetLink.addEventListener("click", () => {
    clearAllErrors();
})
    
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        clearAllErrors();
    });
});   