// Get form elements
const authorizationForm = document.getElementById("authorization-form");
const forgetPasswordForm = document.getElementById("forgetpassword-form");
const resetPasswordForm = document.getElementById("resetpassword-form");
const registrationForm = document.getElementById("registerForm");

const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const confirmPasswordInput = document.getElementById("reset-password-input");
const nameInput = document.getElementById("name-input");
const surnameInput = document.getElementById("surname-input");

// Links to navigate between forms
const forgetPasswordLink = document.getElementById("forget");
const backToAuthLink = document.getElementById("back");

// Authorization form validation
authorizationForm.addEventListener("submit", function(e) {
    e.preventDefault();
    if (validateAuthorization()) {
        
    }
});

function validateAuthorization() {
    const email = emailInput.value;
    const password = passwordInput.value;
    const emailLabel = document.getElementById("email-label")
    const passwordLabel = document.getElementById("password-label")
    let hidePassword = document.getElementById("hide-password")
    let errorPassword = document.getElementById("error-hide")

    // Reset previous errors
    resetErrors();

    if (!email) {
        emailInput.classList.add("error");
        emailLabel.classList.add("error-text");
        emailLabel.textContent = "ელ ფოსტა *"
        hidePassword.classList.add("none")
        errorPassword.classList.add("block")
    }
    if (!password) {
        passwordInput.classList.add("error");
        passwordLabel.classList.add("error-text");
        passwordLabel.textContent = "პაროლი *"
    }

    // Return true if valid
    return email && password;
}

// Forget Password form validation
forgetPasswordForm.addEventListener("submit", function(e) {
    e.preventDefault();
    if (validateForgetPassword()) {
        // Proceed with your logic here (e.g., navigate to next section)
    }
});

function validateForgetPassword() {
    const email = emailInput.value;

    // Reset previous errors
    resetErrors();

    if (!email) {
        emailInput.classList.add("error");
        document.getElementById("email-label").classList.add("error-text");
    }

    // Return true if valid
    return email;
}

// Reset Password form validation
resetPasswordForm.addEventListener("submit", function(e) {
    e.preventDefault();
    if (validateResetPassword()) {
        // Proceed with your logic here (e.g., submit the form)
    }
});

function validateResetPassword() {
    const newPassword = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Reset previous errors
    resetErrors();

    if (!newPassword || !confirmPassword) {
        if (!newPassword) {
            passwordInput.classList.add("error");
            document.getElementById("password-label").classList.add("error-text");
        }
        if (!confirmPassword) {
            confirmPasswordInput.classList.add("error");
            document.getElementById("reset-password-label").classList.add("error-text");
        }
    }
    if (newPassword !== confirmPassword) {
        passwordInput.classList.add("error");
        confirmPasswordInput.classList.add("error");
        document.getElementById("password-label").classList.add("error-text");
        document.getElementById("reset-password-label").classList.add("error-text");
    }

    // Return true if valid
    return newPassword && confirmPassword && newPassword === confirmPassword;
}

// Registration form validation
registrationForm.addEventListener("submit", function(e) {
    e.preventDefault();
    if (validateRegistration()) {
        // Proceed with your logic here (e.g., submit the form)
    }
});

function validateRegistration() {
    const name = nameInput.value;
    const surname = surnameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Reset previous errors
    resetErrors();

    let isValid = true;

    // Name validation
    if (!name) {
        nameInput.classList.add("error");
        document.getElementById("name-label").classList.add("error-text");
        isValid = false;
    }

    // Surname validation
    if (!surname) {
        surnameInput.classList.add("error");
        document.getElementById("surname-label").classList.add("error-text");
        isValid = false;
    }

    // Email validation
    if (!email) {
        emailInput.classList.add("error");
        document.getElementById("email-label").classList.add("error-text");
        isValid = false;
    }

    // Password validation
    if (!password) {
        passwordInput.classList.add("error");
        document.getElementById("password-label").classList.add("error-text");
        isValid = false;
    }

    // Confirm password validation
    if (!confirmPassword) {
        confirmPasswordInput.classList.add("error");
        document.getElementById("reset-password-label").classList.add("error-text");
        isValid = false;
    }

    // Password match validation
    if (password !== confirmPassword) {
        passwordInput.classList.add("error");
        confirmPasswordInput.classList.add("error");
        document.getElementById("password-label").classList.add("error-text");
        document.getElementById("reset-password-label").classList.add("error-text");
        isValid = false;
    }

    // Return whether form is valid or not
    return isValid;
}

// Reset all error classes
function resetErrors() {
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach(input => {
        input.classList.remove("error");
    });

    const allLabels = document.querySelectorAll("span");
    allLabels.forEach(label => {
        label.classList.remove("error-text");
    });
}

// Handle navigation for forget password
forgetPasswordLink.addEventListener("click", function(e) {
    e.preventDefault();  // Prevent default link behavior
    if (validateForgetPassword()) {
        // Show the forget password section and hide others
        document.getElementById("forget-password").style.display = "block";
        document.getElementById("sign-in").style.display = "none";
    }
});

// Handle navigation for back to authorization from forget password
backToAuthLink.addEventListener("click", function(e) {
    e.preventDefault();  // Prevent default link behavior
    document.getElementById("sign-in").style.display = "block";
    document.getElementById("forget-password").style.display = "none";
});
