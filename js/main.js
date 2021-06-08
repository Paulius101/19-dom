const namu1DOM = document.querySelector('button[data-points="1"]');
const namu2DOM = document.querySelector('button[data-points="2"]');
const namu3DOM = document.querySelector('button[data-points="3"]');
const sveciu1DOM = document.querySelector('.pirmas[data-points="1"]');
const sveciu2DOM = document.querySelector('.antras[data-points="2"]');
const sveciu3DOM = document.querySelector('.trecias[data-points="3"]');
const namuDOM = document.querySelector('.rezultatas[data-komanda="namu"]');
const sveciuDOM = document.querySelector('.rezultatas[data-komanda="sveciu"]');

let rezultatas = 0;
let rezultatas1 = 0;

namu1DOM.addEventListener('click', (e) => {
    e.preventDefault();
    rezultatas += 1
    namuDOM.innerText = rezultatas
})

namu2DOM.addEventListener('click', (e) => {
    e.preventDefault();
    rezultatas += 2
    namuDOM.innerText = rezultatas
})

namu3DOM.addEventListener('click', (e) => {
    e.preventDefault();
    rezultatas += 3
    namuDOM.innerText = rezultatas
})

sveciu1DOM.addEventListener('click', (e) => {
    e.preventDefault();
    rezultatas1 += 1
    sveciuDOM.innerText = rezultatas1
})

sveciu2DOM.addEventListener('click', (e) => {
    e.preventDefault();
    rezultatas1 += 2
    sveciuDOM.innerText = rezultatas1
})


sveciu3DOM.addEventListener('click', (e) => {
    e.preventDefault();
    rezultatas1 += 3
    sveciuDOM.innerText = rezultatas1;
})