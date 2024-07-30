const authorizationInputs = document.querySelectorAll(".input");
const authorizationButton = document.querySelector(".authorization-button");

authorizationButton.addEventListener("click", (e) => {
  let allFilled = true;

  authorizationInputs.forEach((input) => {
    if (input.value.trim() === "") {
      const inputWrapper = input.closest(".input-wrapper");
      const error = inputWrapper.querySelector("p");
      error.style.visibility = "visible";
      allFilled = false;
    }
  });

  if (allFilled) {
    window.location.href = "#";
  } else {
    e.preventDefault();
  }
});

const togglePassword = document.querySelector(".toggle-password");
togglePassword.addEventListener("click", () => {
  const input = togglePassword.previousElementSibling;

  if (input.type === "password") {
    input.type = "text";
    togglePassword.src = "../assets/hide-password.svg";
  } else {
    input.type = "password";
    togglePassword.src = "../assets/hide-password.svg";
  }
});
