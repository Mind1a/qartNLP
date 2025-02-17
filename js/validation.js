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
        const errorMessage = document.getElementById("error-message");
    
        let errors = [];
    
        // Validate email field
        if (email.value.trim() === "" || email.value === null) {
            errors.push("გთხოვთ შეიყვანოთ ელ ფოსტა *");
            showEmailErrors(email, emailLabel, errorMessage, "გთხოვთ შეიყვანოთ ელ ფოსტა *");
        } else if (!isValidEmail(email.value)) {
            errors.push("გთხოვთ შეიყვანოთ ვალიდური ელ ფოსტა *");
            showEmailErrors(email, emailLabel, errorMessage, "გთხოვთ შეიყვანოთ ვალიდური ელ ფოსტა *");
        } else {
            clearEmailErrors(email, emailLabel, errorMessage, "");
        }
    
        // Validate password field
        if (password.value.trim() === "" || password.value === null) {
            errors.push("გთხოვთ შეიყვანოთ პაროლი *");
            showPasswordErrors(password, passwordLabel, errorMessage, "გთხოვთ შეიყვანოთ პაროლი *", hideIcon, errorHideIcone);
        } else {
            clearPasswordErrors(password, passwordLabel, errorMessage, "", hideIcon, errorHideIcone);
        }
    
        // Update error message box with all errors
        if (errors.length > 0) {
            errorMessage.innerHTML = errors.join("<br>");
            errorMessage.classList.add("block");
        } else {
            errorMessage.innerHTML = "";
            errorMessage.classList.remove("block");
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
        if(email.value.trim() === "" || email.value === null){
            showEmailErrors(email, forgetPasswordEmailLabel, errorMessage, "გთხოვთ შეიყვანოთ ელ ფოსტა *")
        }else{
            clearEmailErrors(email, forgetPasswordEmailLabel, errorMessage, "გთხოვთ შეიყვანოთ ელ ფოსტა *");
            if(!isValidEmail(email.value)){
                showEmailErrors(email, forgetPasswordEmailLabel, errorMessage, "გთხოვთ შეიყვანოთ ვალიდური ელ ფოსტა *");
            }else{
                clearEmailErrors(email, forgetPasswordEmailLabel, errorMessage, "")
                resolvePassword()
            }
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
        const errorMessage = document.getElementById("reset-password-error-message");
    
        let errors = [];
    
        // Validate password field
        if (password.value.trim() === "" || password.value === null) {
            errors.push("პაროლი *");
            showResetPasswordErrors(password, resetFormPasswordLabel, errorMessage, "პაროლი *", resetFormHideIcon, resetFormErrorHideIcon);
        } else if (password.value.length < 8) {
            errors.push("პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს *");
            showResetPasswordErrors(password, resetFormPasswordLabel, errorMessage, "პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს *", resetFormHideIcon, resetFormErrorHideIcon);
        } else {
            clearResetPasswordErrors(password, resetFormPasswordLabel, errorMessage, resetFormHideIcon, resetFormErrorHideIcon);
        }
    
        // Validate confirm password field
        if (resetPassword.value.trim() === "" || resetPassword.value === null) {
            errors.push("გაიმეორეთ პაროლი *");
            showResetPasswordErrors(resetPassword, resetPasswordLabel, errorMessage, "გაიმეორეთ პაროლი *", resetHideIcon, resetErrorHideIcon);
        } else if (password.value !== resetPassword.value) {
            errors.push("პაროლი უნდა ემთხვეოდეს ერთმანეთს *");
            showResetPasswordErrors(resetPassword, resetPasswordLabel, errorMessage, "პაროლი უნდა ემთხვეოდეს ერთმანეთს *", resetHideIcon, resetErrorHideIcon);
        } else {
            clearResetPasswordErrors(resetPassword, resetPasswordLabel, errorMessage, resetHideIcon, resetErrorHideIcon);
        }
    
        // Update error message box with all errors
        if (errors.length > 0) {
            errorMessage.innerHTML = errors.join("<br>");
            errorMessage.classList.add("block");
        } else {
            errorMessage.innerHTML = "";
            errorMessage.classList.remove("block");
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
        const errorMessage = document.getElementById("register-form-error-message")

        let errors = [];

        if(name.value.trim() === "" || name.value === null){
            showNameErrors(name, nameLabel, "სახელი *")
        }else{
            clearNameErrors(name, nameLabel, "სახელი")
        }

        if(surname.value.trim() === "" || surname.value === null){
            showSurnameErrors(surname, surnameLabel, "გვარი *") 
        }else{
            clearSurnameErrors(surname, surnameLabel, "გვარი")
        }

        if(email.value.trim() === "" || email.value === null){
            errors.push("გთხოვთ შეიყვანოთ ელ ფოსტა *");
            showEmailErrors(email, registrationFormEmailLabel, errorMessage, "ელ.ფოსტა *")
        }else{
            if(!isValidEmail(email.value)){
                errors.push("გთხოვთ შეიყვანოთ ვალიდური ელ ფოსტა *");
                showEmailErrors(email, registrationFormEmailLabel, errorMessage, "გთხოვთ შეიყვანოთ ვალიდური ელ ფოსტა *");
            }else{
                clearEmailErrors(email, registrationFormEmailLabel, errorMessage, "ელ.ფოსტა")
            }
        }
    
        // Validate password field
        if (password.value.trim() === "" || password.value === null) {
            errors.push("პაროლი *");
            showResetPasswordErrors(password, registrationFormPasswordLabel, errorMessage, "პაროლი *", registrationFormHideIcon, registrationFormErrorIcon);
        } else if (password.value.length < 8) {
            errors.push("პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს *");
            showResetPasswordErrors(password, registrationFormPasswordLabel, errorMessage, "პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს *", registrationFormHideIcon, registrationFormErrorIcon);
        } else {
            clearResetPasswordErrors(password, registrationFormPasswordLabel, errorMessage, registrationFormHideIcon, registrationFormErrorIcon);
        }
    
        // Validate confirm password field
        if (repeatPassword.value.trim() === "" || repeatPassword.value === null) {
            errors.push("გაიმეორეთ პაროლი *");
            showResetPasswordErrors(repeatPassword, registrationFormRepeatPasswordLabel, errorMessage, "გაიმეორეთ პაროლი *", registrationHideIcon, registrationErrorIcon);
        } else if (password.value !== repeatPassword.value) {
            errors.push("პაროლი უნდა ემთხვეოდეს ერთმანეთს *");
            showResetPasswordErrors(repeatPassword, registrationFormRepeatPasswordLabel, errorMessage, "პაროლი უნდა ემთხვეოდეს ერთმანეთს *", registrationHideIcon, registrationErrorIcon);
        } else {
            clearResetPasswordErrors(repeatPassword, registrationFormRepeatPasswordLabel, errorMessage, registrationHideIcon, registrationErrorIcon);
        }
    
        // Update error message box with all errors
        if (errors.length > 0) {
            errorMessage.innerHTML = errors.join("<br>");
            errorMessage.classList.add("block");
        } else {
            errorMessage.innerHTML = "";
            errorMessage.classList.remove("block");
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
    
        // Append error message instead of replacing
        if (!error.textContent.includes(textContent)) {
            error.innerHTML += (error.innerHTML ? "<br>" : "") + textContent;
        }
    }
    
    function showPasswordErrors(password, label, error, textContent, icon, errorIcon) {
        password.classList.add("error");
        label.classList.add("error-text");
        error.classList.add("block");
        error.classList.add("error-text");
        
        if (!error.textContent.includes(textContent)) {
            error.innerHTML += (error.innerHTML ? "<br>" : "") + textContent;
        }
    
        icon.classList.add("none");
        errorIcon.classList.add("block");
    }
    
    function clearEmailErrors(email, label, error, textContent) {
        email.classList.remove("error");
        label.classList.remove("error-text");
        error.classList.remove("block");
    
        error.innerHTML = error.innerHTML.replace(/გთხოვთ შეიყვანოთ ელ ფოსტა \*|გთხოვთ შეიყვანოთ ვალიდური ელ ფოსტა \*/g, "").trim();
    
        if (error.innerHTML.startsWith("<br>")) error.innerHTML = error.innerHTML.substring(4);
        if (error.innerHTML.endsWith("<br>")) error.innerHTML = error.innerHTML.slice(0, -4);
    
        if (!error.innerHTML) error.classList.remove("block");
    }
    
    function clearPasswordErrors(password, label, error, textContent, icon, errorIcon) {
        password.classList.remove("error");
        label.classList.remove("error-text");
    
        error.innerHTML = error.innerHTML.replace(/გთხოვთ შეიყვანოთ პაროლი \*/g, "").trim();
    
        if (error.innerHTML.startsWith("<br>")) error.innerHTML = error.innerHTML.substring(4);
        if (error.innerHTML.endsWith("<br>")) error.innerHTML = error.innerHTML.slice(0, -4);
    
        if (!error.innerHTML) error.classList.remove("block");
    
        icon.classList.remove("none");
        icon.classList.add("block");
        errorIcon.classList.remove("block");
        errorIcon.classList.add("none");
    }

    function clearResetPasswordErrors(password, label, errorMessage, icon, errorIcon) {
    password.classList.remove("error");
    label.classList.remove("error-text");

    // Remove only the specific password error messages while keeping others
    errorMessage.innerHTML = errorMessage.innerHTML
        .replace(/პაროლი \*|პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს \*|გაიმეორეთ პაროლი \*|პაროლი უნდა ემთხვეოდეს ერთმანეთს \*/g, "")
        .trim();

    // Remove extra <br> if needed
    if (errorMessage.innerHTML.startsWith("<br>")) errorMessage.innerHTML = errorMessage.innerHTML.substring(4);
    if (errorMessage.innerHTML.endsWith("<br>")) errorMessage.innerHTML = errorMessage.innerHTML.slice(0, -4);

    // Hide error block if no error messages remain
    if (!errorMessage.innerHTML) errorMessage.classList.remove("block");

    icon.classList.remove("none");
    icon.classList.add("block");
    errorIcon.classList.remove("block");
    errorIcon.classList.add("none");
}

function showResetPasswordErrors(password, label, errorMessage, textContent, icon, errorIcon) {
    password.classList.add("error");
    label.classList.add("error-text");

    // Add error text without removing other messages
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

    // Remove only the specific password error messages while keeping others
    errorMessage.innerHTML = errorMessage.innerHTML
        .replace(/პაროლი \*|პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს \*|გაიმეორეთ პაროლი \*|პაროლი უნდა ემთხვეოდეს ერთმანეთს \*/g, "")
        .trim();

    // Remove extra <br> if needed
    if (errorMessage.innerHTML.startsWith("<br>")) errorMessage.innerHTML = errorMessage.innerHTML.substring(4);
    if (errorMessage.innerHTML.endsWith("<br>")) errorMessage.innerHTML = errorMessage.innerHTML.slice(0, -4);

    // Hide error block if no error messages remain
    if (!errorMessage.innerHTML) errorMessage.classList.remove("block");

    icon.classList.remove("none");
    icon.classList.add("block");
    errorIcon.classList.remove("block");
    errorIcon.classList.add("none");
}
    

    function showNameErrors(name, label, textContent){
        name.classList.add("error")
        label.classList.add("error-text")
    }
    function clearNameErrors(name, label, textContent){
        name.classList.remove("error")
        label.classList.remove("error-text")
    }
    function showSurnameErrors(surname, label, textContent){
        surname.classList.add("error")
        label.classList.add("error-text")
    }
    function clearSurnameErrors(surname, label, textContent){
        surname.classList.remove("error")
        label.classList.remove("error-text")
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
            backImg.style.display = "none"
        }
    }
    
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            clearAllErrors();
        });
    });    