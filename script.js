const btn = document.querySelector('.btn')
const message = document.querySelector('.msg')
const inputValue = document.querySelector('.inputEl')
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


btn.addEventListener('click', () => {
    if (inputValue.value === 0 || !inputValue.value.match(emailValidation)) {
        message.innerText = 'Please Enter the valid email address'
        message.style.color = 'red'
    } else {
        message.innerText = 'Thank you for subscribing'
        message.style.color = 'green'
    }
})