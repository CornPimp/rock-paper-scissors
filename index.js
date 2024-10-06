const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let choice = Math.random;
	if (choice <= 0.333) {
		choice = rock;
	} else if (choice <= 0.666) {
		choice = paper;
	} else if (choice <= 0.999) {
		choice = scissors;
	}
	return choice;
}

function getHumanChoice() {
	let choice = prompt("Insert [rock], [paper], or [scissors].");
	if (choice === 'rock'){
		choice = rock;
	} else if (choice === "paper") {
		choice = paper
	} else if (choice === "scissors") {
		choice = scissors;
	}
	return choice;
}

function playRound(humanChoice, computerChoice) {
	
}
