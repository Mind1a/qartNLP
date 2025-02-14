    // forms variables
    const authorizationForm = document.getElementById("authorization-form")

    // input variables
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    
    // authorization validation
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
            emailLabel.classList.add("error-text");
            email.classList.add("error")
            emailLabel.textContent = "ელ.ფოსტა *"
        }else{
            emailLabel.classList.remove("error-text");
            email.classList.remove("error")
            emailLabel.textContent = "ელ.ფოსტა"
        }
        
        if(password.value.trim() === "" || password.value === null){
            passwordLabel.classList.add("error-text")
            passwordLabel.textContent = "პაროლი *"
            password.classList.add("error")
            errorHideIcone.classList.add("block")
            hideIcon.classList.add("none")
        }else{
            passwordLabel.classList.remove("error-text")
            passwordLabel.textContent = "პაროლი"
            password.classList.remove("error")
            errorHideIcone.classList.remove("block")
            hideIcon.classList.remove("none")
        }
    }