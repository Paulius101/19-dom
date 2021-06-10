const submitDOM = document.querySelector('button');
const selectDOM = document.querySelector('label');
const optionDOM = document.querySelector('.option');

selectDOM.insertAdjacentHTML('beforeend', `<select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="zuikis">Zuikis</option>
    <option value="barsukas">Barsukas</option>
    <option value="lape">Lape</option>
    <option value="vilkas">Vilkas</option>
    <option value="sernas">Sernas</option>
    <option value="stirna">Stirna</option>
    <option value="vovere">Vovere</option>
</select>`)


function kurisPazymetas(selectDOM) {
    for (const option of selectDOM) {
        if (option.selected) {
            return option.value;
        }
    }
}
submitDOM.addEventListener('click', (e) => {
    e.preventDefault();

    optionDOM.innerText = kurisPazymetas(selectDOM)

})

