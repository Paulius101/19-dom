const submitDOM = document.querySelector('button');
const selectDOM = document.querySelector('label');
const optionDOM = document.querySelector('.option');

const options = ['zuikis', 'barsukas', 'lape', 'vilkas', 'sernas', 'stirna', 'vovere']
let forma = '';
for (const i of options) {
    forma += `<option value="${i}">${i}</option>`
}

selectDOM.insertAdjacentHTML('afterend', `<select>${forma}</select>`)

const selectedDOM = document.querySelector('select');


submitDOM.addEventListener('click', (e) => {
    e.preventDefault();
    optionDOM.innerText = selectedDOM.value;
})

