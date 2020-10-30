'use strict';

const fieldElement = document.querySelectorAll('.hraciPole');
const playerDisplay = document.getElementById('player')
let currentPlayer = 'circle'


const clickOutcome = (event) => {
  
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    currentPlayer= 'cross';
    playerDisplay.innerHTML = `<img src = 'cross.svg'>`;
    console.log(getPosition(event.target));
    console.log(getSymbol(event.target));
    console.log(isWinningMove(event.target));
    console.log(vitezstviKolecko(event.target))

  } else {
    event.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    playerDisplay.innerHTML = `<img src = 'circle.svg'>`
    event.target.disabled = true;
    console.log(getPosition(event.target));
    console.log(getSymbol(event.target));
    console.log(isWinningMove(event.target));
    console.log(vitezstviKrizek(event.target));
  }
}

for (let i = 0; i < fieldElement.length; i += 1) {
  fieldElement[i].addEventListener('click', clickOutcome);
}

const boardSize = 10 // 10x10
const fields = document.querySelectorAll('#tlacitko')

const getPosition = (field) => {
	let fieldIndex = 0
	while (fieldIndex < fields.length) {
		if (field === fields[fieldIndex]) {
			break
		}
		fieldIndex++
	}

	return {
		row: Math.floor(fieldIndex / boardSize),
		column: fieldIndex % boardSize,
  }
}

const getField = (row, column) => fields[row * boardSize + column];

const getSymbol = (field) => {
		if (field.classList.contains('board__field--cross')) {
		return 'cross'
	} else if (field.classList.contains('board__field--circle')) {
		return 'circle'
	}
}

const symbolsToWin = 5
const isWinningMove = (field) => {
	const origin = getPosition(field)
	const symbol = getSymbol(field)

	let i

	let inRow = 1 // Jednička pro právě vybrané políčko
	// Koukni doleva
	i = origin.column
	while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
	}

	// Koukni doprava
	i = origin.column
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(origin.row, i + 1))
	) {
		inRow++
		i++
	}

	if (inRow >= symbolsToWin) {
		return true
	}

	let inColumn = 1
	// Koukni nahoru
	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
		inColumn++
		i--
	}

	// Koukni dolu
	i = origin.row
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(i + 1, origin.column))
	) {
		inColumn++
		i++
	}

	if (inColumn >= symbolsToWin) {
		return true
	}

  return false
}

const vitezstviKrizek = (field) => {
		if (isWinningMove(field) === true) {
		confirm ('Jupí!!!Vyhrává křížek! Spustit novou hru?');
		window.location.reload()
    }};
    
const vitezstviKolecko = (field) => {
  if (isWinningMove(field) === true){
	confirm ('Jupí!!!Vyhrává kolečko! Spustit novou hru?');
	window.location.reload()
  }};


