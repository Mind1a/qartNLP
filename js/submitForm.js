const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form); //get all form data 
    const data = Object.fromEntries(formData);

    console.log(data); 
    //converting js object into json
     
    // for (item of formData){
    //     console.log(item[0], item[1]);
    // }

    fetch('https://httpbin.org/post', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
    })
    .then(response => response.json())  
    .then(data => console.log(data))
    .catch(error => console.log(error));
})