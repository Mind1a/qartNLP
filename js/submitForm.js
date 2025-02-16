const username = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('msg');

const form = document.getElementById('form');

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    // console.log("form submission prevented!");

    if(validateUsername(username.value) === false){
        console.log("enter a valid username");
    }else if(validateEmail(email.value) === false){
        console.log("enter a valid email adress");
    }else if(validateMessage(message.value) === false){
        console.log("enter a message");
    }else{
        console.log("succesful validation");
    }
 
    emptyInputValidaiton(username);
    emptyInputValidaiton(email);
    emptyInputValidaiton(message);

});

username.addEventListener("input", () => detectInput(username));
email.addEventListener("input", () => detectInput(email));
message.addEventListener("input", () => detectInput(message));

function emptyInputValidaiton(input){
    const label = input.previousElementSibling;

    if(input.value.trim() === ''){
        input.classList.add('emptyInput');
        label.classList.add('emptyInputLabel');
    }else{
        input.classList.remove('emptyInput');
        label.classList.remove('emptyInputLabel');
    }
}

function detectInput(input){
    const label = input.previousElementSibling;

    if(input.value.trim() !== ''){
        input.classList.remove('emptyInput');
        label.classList.remove('emptyInputLabel');
    }
}

function validateUsername(username) {
    const pattern = /^[a-z][\w._-]{3,16}$/i; 
    return pattern.test(username);
}

function validateEmail(email) {
    const pattern = /^[\w][\w._-]{5,24}@[\w.-]+\.[a-z]{2,4}$/i; 
    return pattern.test(email);
}

function validateMessage(message) {
    const pattern = /^[\w\s.,!?'-]{5,500}$/i; 
    return pattern.test(message);
}

// console.log(validateUsername("nino1"))
// console.log(validateEmail("NINO.g@gmd.COM"))
// console.log(validateMessage("eslfkn"))