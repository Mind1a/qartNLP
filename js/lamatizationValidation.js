
const enterText = document.querySelector(".enterText");
const formContainer = document.querySelector(".form-container");
const AmountWords = document.querySelector(".wordsAmount");
const container = document.querySelector(".label-box");

const validWordsNumber = (inputs) => inputs.trim().split(" ").length;

const requiredInput = (input) => input.trim() !== "";



enterText.addEventListener("input", function() {
  const item = validWordsNumber(enterText.value);
  console.log(item);
   const html = `
     <span class="wordsAmount">${item}/250</span>
   `
   container.innerHTML = "";
   container.insertAdjacentHTML("beforeend", html);
});






/*

const checkTextareaValidation = function () {
  let result = true;
  const enterTextBox = enterText.value;

 
  if (validWordsNumber(enterTextBox)) {
    enterText.classList.add("is-valid");
  }

  if (!validWordsNumber(enterTextBox)) {
    enterText.classList.add("not-valid");
    result = false;
  }
  if (!requiredInput(enterTextBox)) {
    enterText.classList.add("not-valid");
    result = false;
  }
  return result;
};
checkTextareaValidation();

formContainer.addEventListener("submit", function (e) {
  e.preventDefault();

  const validTextarea = checkTextareaValidation();
  if (!validTextarea) return;


  const formData = new FormData();
  formData.append("position", enterText.value);

  fetch(
    "https://api.jansjansKAMLnisnZ.ahsbhbabJANan.ge/api/ssssjsn",
    {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: formData,
    }
  )
    .then((response) => response.json())
    .then((res) => console.log(res));
});

 */