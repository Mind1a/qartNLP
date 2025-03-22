const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const whiteX = document.getElementById("white-X");
const blueX = document.getElementById("blue-X");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
    toggleX();
});
  
loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
    toggleX();
});
  
function toggleX() {
    whiteX.classList.toggle("none", container.classList.contains("active"));
    whiteX.classList.toggle("block", !container.classList.contains("active"));
  
    blueX.classList.toggle("none", !container.classList.contains("active"));
    blueX.classList.toggle("block", container.classList.contains("active"));
}

document.getElementById("forget").addEventListener("click", forgetPassword);

function forgetPassword() {
  document.getElementById("forget-password").style.display = "block";
  document.getElementById("sign-in").style.display = "none";
  document.getElementById("authoritation").style.display = "block";

  document.querySelectorAll(".form-container").forEach((form) => {
    form.querySelectorAll("input").forEach((input) => (input.value = ""));
  });
}

loginBtn.addEventListener("click", showAuthorization);
document
  .getElementById("authoritation")
  .addEventListener("click", showAuthorization);

function showAuthorization() {
  document.getElementById("sign-in").style.display = "flex";
  document.getElementById("forget-password").style.display = "none";
  document.getElementById("resolve-password").style.display = "none";

  document.querySelectorAll(".form-container").forEach((form) => {
    form.querySelectorAll("input").forEach((input) => (input.value = ""));

    let box = document.getElementById("box");
    let successBox = document.getElementById("success-box");

    box.style.display = "block";
    successBox.style.display = "none";
  });
}

document
  .getElementById("back")
  .addEventListener("click", goBackToAuthorization);

function goBackToAuthorization() {
  document.getElementById("sign-in").style.display = "flex";
  document.getElementById("forget-password").style.display = "none";
  document.getElementById("resolve-password").style.display = "none";
}

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




// authorization validation
const authorizationForm = document.getElementById("authorization-form");
const emailInput = document.getElementById("authorization-email-input");
const passwordInput = document.getElementById("authorization-password");
const authorizationToggleEye = document.getElementById("authorization-toggleEye");

authorizationToggleEye.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";

  authorizationToggleEye.classList.toggle("hidden", isHidden);
});

authorizationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    auzorithationErrors(emailInput, passwordInput);
});
function auzorithationErrors(email, password) {
    const emailLabel = document.getElementById("email-label");
    const passwordLabel = document.getElementById("password-label");
    const EmailErrorMessage = document.getElementById("email-error-message");
    const PassowrdErrorMessage = document.getElementById("password-error-message");
  
    if (email.value.trim() === "" || email.value === null) {
      showEmailErrors(
        email,
        emailLabel,
        EmailErrorMessage,
        "გთხოვთ შეიყვანოთ ელ ფოსტა"
      );
    } else if (!isValidEmail(email.value)) {
      showEmailErrors(
        email,
        emailLabel,
        EmailErrorMessage,
        "გთხოვთ შეიყვანოთ ვალიდური ელ ფოსტა"
      );
    } else {
      clearEmailErrors(email, emailLabel, EmailErrorMessage, "");
    }
  
    if (password.value.trim() === "" || password.value === null) {
      showPasswordErrors(
        passwordLabel,
        PassowrdErrorMessage,
        "გთხოვთ შეიყვანოთ პაროლი"
      );
      passwordInput.classList.add("error");
      authorizationToggleEye.classList.add("error-icon");
    } else {
      clearPasswordErrors(
        passwordLabel,
        PassowrdErrorMessage,
        ""
      );
      passwordInput.classList.remove("error");
      authorizationToggleEye.classList.remove("error-icon");
    }
}

// forget password validation
const forgetPasswordForm = document.getElementById("forgetpassword-form");
const forgetPasswordEmailInput = document.getElementById("forget-password-email-input");
forgetPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    forgetPasswordErrors(forgetPasswordEmailInput);
});
  
function forgetPasswordErrors(email) {
    const forgetPasswordEmailLabel = document.getElementById("forget-password-email-label");
    const errorMessage = document.getElementById("forget-password-error-message");
  
    if (email.value.trim() === "" || email.value === null) {
      const img = document.getElementById("back");
      img.classList.add("block");
      showEmailErrors(
        email,
        forgetPasswordEmailLabel,
        errorMessage,
        "გთხოვთ შეიყვანოთ ელ ფოსტა"
      );
    } else if (!isValidEmail(email.value)) {
      const img = document.getElementById("back");
      img.classList.add("block");
      showEmailErrors(
        email,
        forgetPasswordEmailLabel,
        errorMessage,
        "გთხოვთ შეიყვანოთ ვალიდური ელ ფოსტა"
      );
    } else {
      const img = document.getElementById("back");
      img.classList.remove("block");
      clearEmailErrors(email, forgetPasswordEmailLabel, errorMessage, "");
      resolvePassword();
    }
}
  
function resolvePassword() {
    let forgetPassword = document.getElementById("forget-password");
    let active = document.getElementById("sign-in");
    let register = document.getElementById("authoritation");
    let resolve = document.getElementById("resolve-password");
  
    forgetPassword.style.display = "none";
    active.style.display = "none";
    register.style.display = "none";
    resolve.style.display = "flex";
}


// resolve password validation
const resetPasswordForm = document.getElementById("resetpassword-form");
const resolvePasswordInput = document.getElementById("resolve-password");
const resolvePasswordToggleEye = document.getElementById("resolve-password-toggleEye");

resolvePasswordToggleEye.addEventListener("click", () => {
  const hidden = resolvePasswordInput.type === "password";
  resolvePasswordInput.type = hidden ? "text" : "password";

  resolvePasswordToggleEye.classList.toggle("hidden", hidden);
});

const resetPasswordInput = document.getElementById("reset-password");
const resetPasswordToggleEye = document.getElementById("reset-password-toggleEye");

resetPasswordToggleEye.addEventListener("click", () => {
  const hidden = resetPasswordInput.type === "password";
  resetPasswordInput.type = hidden ? "text" : "password";

  resetPasswordToggleEye.classList.toggle("hidden", hidden);
});

resetPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    resetPasswordErrors(resolvePasswordInput, resetPasswordInput);
});

function resetPasswordErrors(password, resetPassword) {
    const resetFormPasswordLabel = document.getElementById("resetform-password-label");
    const resetPasswordLabel = document.getElementById("reset-password-label");
    const passwordErrorMessage = document.getElementById("reset-resetPassword-error-message");
    const resetPasswordErrorMessage = document.getElementById("reset-password-error-message");
  
    let passwordErrors = [];
    let resetPasswordErrors = [];
  
    if (password.value === null) {
      passwordErrors.push("პაროლი");
      showResetPasswordErrors(
        password,
        resetFormPasswordLabel,
        passwordErrorMessage,
        "პაროლი",
      );
    } else if (password.value.length < 8) {
      passwordErrors.push("პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს");
      showResetPasswordErrors(
        password,
        resetFormPasswordLabel,
        passwordErrorMessage,
        "პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს",
      );
    } else {
      clearResetPasswordErrors(
        password,
        resetFormPasswordLabel,
        passwordErrorMessage,
      );
    }
  
    if (resetPassword.value.trim() === "" || resetPassword.value === null) {
      resetPasswordErrors.push("გაიმეორეთ პაროლი");
      showResetPasswordErrors(
        resetPassword,
        resetPasswordLabel,
        resetPasswordErrorMessage,
        "გაიმეორეთ პაროლი",
      );
    } else if (password.value !== resetPassword.value) {
      resetPasswordErrors.push("პაროლი უნდა ემთხვეოდეს ერთმანეთს");
      showResetPasswordErrors(
        resetPassword,
        resetPasswordLabel,
        resetPasswordErrorMessage,
        "პაროლი უნდა ემთხვეოდეს ერთმანეთს",
      );
    } else {
      clearResetPasswordErrors(
        resetPassword,
        resetPasswordLabel,
        resetPasswordErrorMessage,
      );
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


function showResetPasswordErrors(
    password,
    label,
    errorMessage,
    textContent,
  ) {
    password.classList.add("error");
    label.classList.add("error-text");
  
    if (!errorMessage.innerHTML.includes(textContent)) {
      errorMessage.innerHTML +=
        (errorMessage.innerHTML ? "<br>" : "") + textContent;
    }
  
    errorMessage.classList.add("block");
    errorMessage.classList.add("error-text");
}
  
function clearResetPasswordErrors(
    password,
    label,
    errorMessage,
  ) {
    password.classList.remove("error");
    label.classList.remove("error-text");
  
    errorMessage.innerHTML = errorMessage.innerHTML
      .replace(
        /პაროლი \*|პაროლი მინიმუმ უნდა შეიცავდეს 8 სიმბოლოს \*|გაიმეორეთ პაროლი \*|პაროლი უნდა ემთხვეოდეს ერთმანეთს \*/g,
        ""
      )
      .trim();
  
    if (errorMessage.innerHTML.startsWith("<br>"))
      errorMessage.innerHTML = errorMessage.innerHTML.substring(4);
    if (errorMessage.innerHTML.endsWith("<br>"))
      errorMessage.innerHTML = errorMessage.innerHTML.slice(0, -4);
  
    if (!errorMessage.innerHTML) errorMessage.classList.remove("block");
}

/////////////////////////////////////////////


function showEmailErrors(email, label, error, textContent) {
    email.classList.add("error");
    label.classList.add("error-text");
    error.classList.add("block");
    error.classList.add("error-text");
    error.innerHTML = textContent;
}
  
function showPasswordErrors(
    label,
    error,
    textContent
  ) {
    label.classList.add("error-text");
    error.classList.add("block");
    error.classList.add("error-text");
    error.innerHTML = textContent;
}
  
function clearEmailErrors(email, label, error, textContent) {
    email.classList.remove("error");
    label.classList.remove("error-text");
    error.classList.remove("block");
    error.innerHTML = textContent;
}
  
function clearPasswordErrors(
    label,
    error,
    textContent
) {
    label.classList.remove("error-text");
    error.innerHTML = textContent;
    error.classList.remove("block")
}

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}