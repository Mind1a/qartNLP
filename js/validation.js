const enterText = document.querySelector(".enterText");

const validWordsNumber = (inputs) => inputs.trim().split(" ").length > 250;
const requiredInput = (input) => input.trim() !== "";
 
const checkDescriptionValidation = function () {
  let result = true;
  const enterTextBox = enterText.value;

 
  if (validWordsNumber(enterTextBox)) {
    enterText.classList.add("is-valid");
  }

  if (!validWordsNumber(description)) {
    enterText.classList.add("not-valid");
    result = false;
  }
  if (!requiredInput(description)) {
    enterText.classList.add("not-valid");
    result = false;
  }
  return result;
};

 