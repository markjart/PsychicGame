// array of the letters
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Global Variables for tracking wins, losses, and guesses.
var wins = 0;
var losses = 0;
var guesses = 10;
// array to hold the letters already guessed
var guessedLetters = [];
//var for event value
var userGuess;

// computer randomly picks it's letter 
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log(computerChoice);

// start event listening
document.onkeydown = function(event) {
	
	// Determines which key is pressed.
	userGuess = event.key;

	// keeps userGuess to available selections and adds incorrect guess to guessedLetters
	if (guessedLetters.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
		guesses--;
		guessedLetters[guessedLetters.length] = userGuess;
	}
	// WINS are logged, guesses are reset, and another letter is picked by the computer
	if (computerChoice === userGuess) {
		wins++
		guesses = 10;
		guessedLetters = [];
		computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(computerChoice);
	}
	// 10 wins trigger some delayed alerts and resets the game.
	if (wins === 10) {
		setTimeout(delay0, 250);
		function delay0() {
			alert("10 Wins!  You may be a Betazed!  Have you considered joining Star Fleet?");
		}
		setTimeout(delay1, 250);
		function delay1() {
			alert("Live Long and Prosper.  Peace and Long Life.");
		}
		wins = 0;
		losses = 0;
		guesses = 10;
		guessedLetters = [];		
		computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(computerChoice);
	}
	
	// LOSSES are logged, guesses are reset, and another letter is picked by the computer
	if (guesses === 0) {
		losses++;
		guesses = 10;
		guessedLetters = [];
		computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(computerChoice);
	}
	// Creating a variable so GUI keeps track of the guesses, and wins/losses.
	var GUI =	
		"<h3>Your Wins: " + wins + "</h3>" +
		"<h4>Your Losses: " + losses + "</h4>" +
		"<p>Guesses Left: " + guesses + "</p>" +
		"<p>Letters Guessed: " + "<br>" + guessedLetters.join(", ") + "</p>";
	
	// Set the inner HTML contents of the #game div to html string
	document.querySelector("#game").innerHTML = GUI;
}











