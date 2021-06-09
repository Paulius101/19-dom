function generuotiSocials(selector, array) {
    const selectorDOM = document.querySelector(selector);
    if (!Array.isArray(array) || array.length === 0) {
        console.error('ERROR: nerastas elementas');
        return false;
    }
    let HTML = '';
    for (let e of array) {
        HTML += `<i class="fa fa-${e}"></i>`

    }
    selectorDOM.innerHTML = HTML;
}

const icons = ['facebook', 'twitter', 'linkedin', 'pinterest'];
const icons1 = [];
generuotiSocials('.socials', icons)