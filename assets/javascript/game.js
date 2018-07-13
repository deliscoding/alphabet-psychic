var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedAlready = [];

//function to generate a random guessed letter
function newRand() {
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log('This is the random letter that the Computer Guessed:', computerGuess);
}

//function to reset the game after the user wins or loses
function reset() {
  guessesLeft = 9;
  guessedAlready = [];
  return;
}

function updateSoFar() {
  document.querySelector("#guessedAlready").innerHTML = "Guessed Already: " + guessedAlready + ',';
  return;
}
//This function is run whenever a user presses a key
document.onkeyup = function (event) {

  //Determines which key was pressed and logs it
  var userGuess = event.key.toLowerCase();
  console.log('User Guess:', userGuess);

  //Test a letter was selected not other keyboard input
  if (computerChoices.indexOf(userGuess) < 0) {
    alert("You must select a letter")
  }

  //Reduce guessesLeft by one and update it to the page
  guessesLeft--
  document.querySelector("#guessesLeft").innerHTML = "Guesses left:" + guessesLeft;

  //Adds the letter guessed to "guessedAlready"
  guessedAlready.push(userGuess);
  if (guessesLeft > 0) {
    if (userGuess == computerGuess) {
      wins++;
      document.querySelector("#wins").innerHTML = "Wins:" + wins;
      alert("Correct Guess!");
      reset();
      newRand();
    } else {
      alert("That wasn't the letter... try again");
      updateSoFar();
    }
  }
  //no more guesses left and updates the page with current losses
  else {
    losses++
    document.querySelector("#losses").innerHTML = "Losses" + losses + "";
    alert("You ran out of guesses and lost the game");
    reset();
    newRand();
  }
}
newRand();