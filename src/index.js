import generateJoke from "./generateJoke";
import './styles/main.scss'
import set from './assets/set.svg'

const setImg = document.getElementById('setImg');
setImg.src = set;
const jokeBtn = document.getElementById('jokeBtn')

const init = () => {
    generateJoke();
    jokeBtn.addEventListener('click', generateJoke);
}
window.addEventListener('DOMContentLoaded', init);
