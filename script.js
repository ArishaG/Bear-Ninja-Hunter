// Prompt the player to enter their name
let playerName = prompt('Welcome to Bear Ninja Hunter! Please enter your name:');

// Greet the player with a personalized message
alert(`Hello, ${playerName}! Get ready to play Bear Ninja Hunter!`);

// Prompt the player to make a choice
let playerChoice = prompt('Choose your character: Bear, Ninja, or Hunter');

// Hard-coded computer choice
let computerChoice = 'Bear';

// Display the game result
let resultMessage = `${playerName}, you chose ${playerChoice}. The computer chose ${computerChoice}.`;
document.getElementById('welcomeMessage').innerHTML = `Welcome, ${playerName}!`;
document.getElementById('gameResult').innerHTML = resultMessage;

// Log the result to the console
console.log(resultMessage);

