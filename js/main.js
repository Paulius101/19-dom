const optionDOM = document.querySelector('.option');
const buttonDOM = document.querySelector('button');
const inputDOM = document.getElementById('board');
const boardDOM = document.querySelector('.board');

buttonDOM.addEventListener('click', (e) => {
    e.preventDefault();
    const n = parseInt(inputDOM.value);
    optionDOM.textContent = `${n}x${n}`;
    renderBoard(boardDOM, n);
})

function renderBoard(DOMelement, size) {
    const rowHeight = 100 / size;
    let HTML = '';

    for (let i = 0; i < size; i++) {
        HTML += `<div class="row" style="height: ${rowHeight}%;"></div>`;
    }

    DOMelement.innerHTML = HTML;
}