const buttonDOM = document.querySelector('button');
const inputMessageDOM = document.querySelector('#message');
const inputBgColorDOM = document.querySelector('#bg-color');
const inputTxtColorDOM = document.querySelector('#text-color');

const spanDOM = document.querySelector('span');



buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    spanDOM.style.backgroundColor = inputBgColorDOM.value;
    spanDOM.style.color = inputTxtColorDOM.value;
    spanDOM.innerText = inputMessageDOM.value;
    inputMessageDOM.value = '';
})
