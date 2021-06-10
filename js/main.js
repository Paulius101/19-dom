function renderNav(selector, nuorodosList) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error(
            'ERROR: pagal pateikta selector nepavyko rasti jokio DOM elemento'
        );
        return false;
    }
    if (typeof selector !== 'string' || selector === '') {
        console.error(
            'ERROR: selector turi buti ne tuscias stringas',
            selector,
            nuorodosList
        );
        return false;
    }
    if (!Array.isArray(nuorodosList) || nuorodosList.length === 0) {
        console.log('ERROR: nuorodosList turi buti ne tuscias array');
        return false;
    }

    let HTML = '';


    for (const nuoroda in nuorodosList) {
        HTML += `<a href="${nuoroda.href}">${nuoroda.title}</a > `;
    }

    DOM.innerHTML += `<nav> ${HTML} </nav>`;
}

const menu = [
    {

        href: '#',
        title: 'Home'

    },
    {

        href: '#',
        title: 'Services'

    },
    {

        href: '#',
        title: 'About us'

    },
    {

        href: '#',
        title: 'Contact us'

    }
];
renderNav('header', menu);