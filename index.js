'use strict';

const fieldElement = document.querySelectorAll('.hraciPole');
const playerDisplay = document.getElementById('player')
let currentPlayer = 'circle'


const clickOutcome = (event) => {
  
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    currentPlayer= 'cross';
    playerDisplay.innerHTML = `<img src = 'circle.svg'>`

  } else {
    event.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    playerDisplay.innerHTML = `<img src = 'cross.svg'>`
  }
}

for (let i = 0; i < fieldElement.length; i += 1) {
  fieldElement[i].addEventListener('click', clickOutcome);
}
