const enterText = document.querySelector(".enterText");
const form = document.querySelector(".form-container");
const formContainer = document.querySelector(".form-container");
const AmountWords = document.querySelector(".wordsAmount");
const wordsAmountBox = document.querySelector(".words-Amount-Box");
const clearBtn = document.querySelector(".btn-clear");
const submitBtn = document.querySelector(".btn-analize");

const validWordsNumber = (inputs) => inputs.trim().split("").length;
const requiredInput = (input) => input.trim() !== "";

clearBtn.disabled = true;
submitBtn.disabled = true;

enterText.addEventListener("input", function (e) {
  e.preventDefault();
  clearBtn.disabled = !requiredInput(enterText.value);
  submitBtn.disabled = !requiredInput(enterText.value);

  const item = validWordsNumber(enterText.value);
  const html = `
     <span class="wordsAmount">${item}/250</span>
   `;
  wordsAmountBox.innerHTML = "";
  wordsAmountBox.insertAdjacentHTML("beforeend", html);
});

form.addEventListener("reset", function (e) {
  clearBtn.disabled = true;
  submitBtn.disabled = true;

  enterText.value = "";

  const item = validWordsNumber(enterText.value);
  const html = `
     <span class="wordsAmount">${item}/250</span>
   `;
  wordsAmountBox.innerHTML = "";
  wordsAmountBox.insertAdjacentHTML("beforeend", html);
});
