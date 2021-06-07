const buttonDOM = document.querySelector('button');
const vardasDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const patiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');
const gerimaiDOM = document.querySelectorAll('input[name="gerimas"]');
const orderDOM = document.querySelector('.order');
console.log(orderDOM);

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();

    function menuChecked(item) {
        if (item.checked) {
            return 'nori';
        }
        return 'nenori';
    }

    function gerimasChecked(item) {
        for (let i = 0; i < 3; i++)
            if (item[i].checked) {
                return item[i].value;
            }
    }

    orderDOM.innerText = `Uzsakovas vardu ${vardasDOM.value}, ${menuChecked(sriubaDOM)} sriubos, ${menuChecked(patiekalasDOM)} pagrindinio patiekalo, ${menuChecked(desertasDOM)} deserto ir ${gerimasChecked(gerimaiDOM)} yra pasirinktas gerimas.`
})