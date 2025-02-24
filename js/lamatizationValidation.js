const enterText = document.querySelector(".enterText");
const formContainer = document.querySelector(".form-container");
const AmountWords = document.querySelector(".wordsAmount");
const wordsAmountBox = document.querySelector(".words-Amount-Box");

const validWordsNumber = (inputs) => inputs.trim().split(" ").length;

const requiredInput = (input) => input.trim() !== "";

enterText.addEventListener("input", function (e) {
  e.preventDefault();
  const item = validWordsNumber(enterText.value);
  console.log(item);
  const html = `
     <span class="wordsAmount">${item}/250</span>
   `;
  wordsAmountBox.innerHTML = "";
  wordsAmountBox.insertAdjacentHTML("beforeend", html);
});
