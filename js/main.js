const submitDOM = document.querySelector('button');
const orderDOM = document.querySelector('.order');
const nameDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const pagrindinisPatiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');
const allGerimaiDOM = document.querySelectorAll('input[name="gerymas"]');


function arNoriu(DOM) {
    return DOM.checked ? 'nori' : 'nenori';
}

function kurisPazymetas(DOMlist) {
    for (const itemDOM of DOMlist) {
        if (itemDOM.checked) {
            return itemDOM.value;
        }
    }
}

submitDOM.addEventListener('click', (e) => {
    e.preventDefault();
    let kreipinys = nameDOM.value === '' ? 'nepateikes vardo' : 'vardu ' + nameDOM.
        value;
    let gerimas = kurisPazymetas(allGerimaiDOM) ? `${kurisPazymetas(allGerimaiDOM)
        }` + 'yra pasirinktas gerimas' : 'nepasirinko gerimo';
    orderDOM.innerText = `Uzsakovas, ${kreipinys}  ${arNoriu(sriubaDOM)} sriubos, ${arNoriu(pagrindinisPatiekalasDOM)} pagrindinio patiekalo, ${arNoriu(desertasDOM)} deserto ir ${gerimas}.`;
})



