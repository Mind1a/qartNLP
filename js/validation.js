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

    function auzorithationErrors(email, password){
        const emailLabel = document.getElementById("email-label")
        const passwordLabel = document.getElementById("password-label")
        const hideIcon = document.getElementById("hide-password")
        const errorHideIcone = document.getElementById("error-hide")
        if(email.value.trim() === "" || email.value === null){
            showEmailErrors(email, emailLabel, "ელ.ფოსტა *")
        }else if(!isValidEmail(email.value)){
            showEmailErrors(email, emailLabel, "გთხოვთ შეიყვანოთ ვალიდური ელ ფოსტა *");
        }
        else{
            clearEmailErrors(email, emailLabel, "ელ.ფოსტა")
        }
        
        if(password.value.trim() === "" || password.value === null){
            showPasswordErrors(password, passwordLabel, "პაროლი *", hideIcon, errorHideIcone)
        }else{
            clearPasswordErrors(password, passwordLabel, "პაროლი", hideIcon, errorHideIcone)
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
        if(email.value.trim() === "" || email.value === null){
            showEmailErrors(email, forgetPasswordEmailLabel, "ელ.ფოსტა *");
            const backImg = document.getElementById("back")
            backImg.style.display = "block"
        }else if(!isValidEmail(email.value)){
            showEmailErrors(email, forgetPasswordEmailLabel, "გთხოვთ შეიყვანოთ ვალიდური ელ ფოსტა *");
            const backImg = document.getElementById("back")
            backImg.style.display = "block"
        }else{           
            clearEmailErrors(email, forgetPasswordEmailLabel, "ელ.ფოსტა");
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

    function resetPasswordErrors(password, resetPassword){
        const resetFormPasswordLabel = document.getElementById("resetform-password-label")
        const resetPasswordlabel = document.getElementById("reset-password-label")
        const resetFormHideIcon = document.getElementById("resetform-password-hide-password")
        const resetFormErrorHideIcon = document.getElementById("resetfrom-password-error-hide")
        const resetHideIcon = document.getElementById("reset-password-hide-password")
        const resetErrorHideIcon = document.getElementById("reset-password-error-hide")
        if(password.value.trim() === "" || password.value === null){
            showPasswordErrors(password, resetFormPasswordLabel, "პაროლი *", resetFormHideIcon, resetFormErrorHideIcon)
        }else if(password.value.length < 8){
            showPasswordErrors(password, resetFormPasswordLabel, "პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს *", resetFormHideIcon, resetFormErrorHideIcon)
        }else{
            clearPasswordErrors(password, resetFormPasswordLabel, "პაროლი", resetFormHideIcon, resetFormErrorHideIcon)
        }

        if(resetPassword.value.trim() === "" || resetPassword.value === null){
            showPasswordErrors(resetPassword, resetPasswordlabel, "გაიმეორეთ პაროლი *", resetHideIcon, resetErrorHideIcon)
        }else if(password.value != resetPassword.value){
            showPasswordErrors(resetPassword, resetPasswordlabel, "პაროლი უნდა ემთხვეოდეს ერთმანეთს *", resetHideIcon, resetErrorHideIcon)
        }else{
            clearPasswordErrors(resetPassword, resetPasswordlabel, "პაროლი", resetHideIcon, resetErrorHideIcon)
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
            showEmailErrors(email, registrationFormEmailLabel, "ელ.ფოსტა *")
        }else if(!isValidEmail(email.value)){
            showEmailErrors(email, registrationFormEmailLabel, "გთხოვთ შეიყვანოთ ვალიდური ელ ფოსტა *");
        }else{
            clearEmailErrors(email, registrationFormEmailLabel, "ელ.ფოსტა")
        }

        if(password.value.trim() === "" || password.value === null){
            showPasswordErrors(password, registrationFormPasswordLabel, "პაროლი *", registrationFormHideIcon, registrationFormErrorIcon)
        }else if(password.value.length < 8){
            showPasswordErrors(password, registrationFormPasswordLabel, "პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს *", registrationFormHideIcon, registrationFormErrorIcon)
        }else{
            clearPasswordErrors(password, registrationFormPasswordLabel, "პაროლი", registrationFormHideIcon, registrationFormErrorIcon)
        }

        if(repeatPassword.value.trim() === "" || repeatPassword.value === null){
            showPasswordErrors(repeatPassword, registrationFormRepeatPasswordLabel, "გაიმეორეთ პაროლი *", registrationHideIcon, registrationErrorIcon)
        }else if(password.value != repeatPassword.value){
            showPasswordErrors(repeatPassword, registrationFormRepeatPasswordLabel, "პაროლი უნდა ემთხვეოდეს ერთმანეთს *", registrationHideIcon, registrationErrorIcon)
        }else{
            clearPasswordErrors(repeatPassword, registrationFormRepeatPasswordLabel, "პაროლი", registrationHideIcon, registrationErrorIcon)
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

    function showEmailErrors(email, label, textContent){
        email.classList.add("error")
        label.classList.add("error-text")
        label.textContent = textContent
    }

    function clearEmailErrors(email, label, textContent){
        email.classList.remove("error")
        label.classList.remove("error-text")
        label.textContent = textContent
    }

    function showPasswordErrors(password, label, textContent, icon, errorIcon){
        password.classList.add("error")
        label.classList.add("error-text")
        label.textContent = textContent
        icon.classList.add("none")
        errorIcon.classList.add("block")
    }
    function clearPasswordErrors(password, label, textContent, icon, errorIcon){
        password.classList.remove("error")
        label.classList.remove("error-text")
        label.textContent = textContent
        icon.classList.remove("none")
        icon.classList.add("block")
        errorIcon.classList.remove("block")
        errorIcon.classList.add("none")
    }
    function showNameErrors(name, label, textContent){
        name.classList.add("error")
        label.classList.add("error-text")
        label.textContent = textContent
    }
    function clearNameErrors(name, label, textContent){
        name.classList.remove("error")
        label.classList.remove("error-text")
        label.textContent = textContent
    }
    function showSurnameErrors(surname, label, textContent){
        surname.classList.add("error")
        label.classList.add("error-text")
        label.textContent = textContent
    }
    function clearSurnameErrors(surname, label, textContent){
        surname.classList.remove("error")
        label.classList.remove("error-text")
        label.textContent = textContent
    }
    function isValidEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
    

    // ფუნქცია რომ წაისშალოს ერორები სხვა გვერდზე გადასვლისას

    function clearAllErrors() {
        document.querySelectorAll(".error").forEach(input => input.classList.remove("error"));
        document.querySelectorAll(".error-text").forEach(label => label.classList.remove("error-text"));
    
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