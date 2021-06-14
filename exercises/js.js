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

const renderBoard = (DOMelement, size) => {
    const rowHeight = 100 / size;
    const cellWidth = 100 / size
    let HTML = '';

    for (let i = 0; i < size; i++) {
        let cell = ''
        for (let c = 0; c < size; c++) {
            if (c % 2 !== 0) {
                cell += `<div class="cell" style="width: ${cellWidth}% ;"></div>`;
            }
            else {
                cell += `<div class="cell" style="width: ${cellWidth}% ; background-color: black;"></div>`;
            }
        }
        HTML += `<div class="row" style="height: ${rowHeight}%;">
        ${cell} 
        </div > `;

    }

    DOMelement.innerHTML = HTML;
}


// ${cellDiv.repeat(size)}  irgi veiktu vietoj for rasymo langeliams.