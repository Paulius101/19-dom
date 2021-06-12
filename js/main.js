const lentosDydisDOM = document.querySelector('.option')
const submitDOM = document.querySelector('button')
const lentosInputDOM = document.querySelector('#board')

submitDOM.addEventListener('click', (e) => {
    e.preventDefault();
    lentosDydisDOM.innerText = lentosInputDOM.value + 'x' + lentosInputDOM.value
})