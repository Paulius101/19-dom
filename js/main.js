/*
Surasti h1 (antraste)
Perrasyti h1 elemento teksta i "Zuikio pomidoru darzas"
Padaryk, jog h1 elementas turetu CSS class "pavadinimas"
Surasti visus darzoves
Kiekvienos darzoves teksta pakeisti i "Pomidoras"
Kiekvienai darzovei suteikti CSS class "pomidoras"
*/

const h1DOM = document.querySelector('h1');
h1DOM.innerText = 'Zuikio pomidoru darzas';
h1DOM.classList.add('pavadinimas');

const darzoveDOM = document.querySelectorAll('li');

for (let i = 0; i < darzoveDOM.length; i++) {
    darzoveDOM[i].innerText = 'Pomidoras';
    darzoveDOM[i].classList.add('pomidoras');
}