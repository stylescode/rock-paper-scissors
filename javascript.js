function getComputerChoice() {
  // computer needs to randomly select between R/P/S
  // randomly select a number
  // apply choice based on number
  let selection
  let number = Math.random();
  if (number < (1 / 3)) {
    selection = "ROCK";
  } else if (number < (2 / 3)) {
    selection = "PAPER";
  } else {
    selection = "SCISSORS";
  }
  console.log("Computer chose: " + selection)
  return selection;
}

function getPlayerChoice() {
  // prompt for user input
  // make sure user input is a valid choice
  let selection;
  while (selection != "ROCK" && selection != "PAPER" && selection != "SCISSORS") {
    selection = prompt("Choose ROCK, PAPER, or SCISSORS").toUpperCase();
  }
  console.log("You chose: " + selection);
  return selection;
}

// function that plays single round of rps
// this function should take 2 parameters: playerSelection and computerSelection
// compare player and computer choices
// then return string that declares if user won or lost

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("it's a tie");
  } else if ((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection ===  "ROCK")) {
    console.log("computer wins this round");
    ++computerScore;
  } else {
    console.log("you win this round");
    ++playerScore;
  }
}

function game() {
  // use previous function inside this one to play 5 round game
  // keep score and report winner at end
  playRound(getPlayerChoice(), getComputerChoice());
  playRound(getPlayerChoice(), getComputerChoice());
  playRound(getPlayerChoice(), getComputerChoice());
  playRound(getPlayerChoice(), getComputerChoice());
  playRound(getPlayerChoice(), getComputerChoice());
  console.log(playerScore, computerScore);
  if (playerScore > computerScore) {
    console.log("YOU WIN THE GAME! CONGRATS!")
  } else if (playerScore < computerScore) {
    console.log("COMPUTER WINS. BETTER LUCK NEXT TIME.")
  } else {
    console.log("THE GAME ENDS IN A TIE.")
  }
  playerScore = 0;
  computerScore = 0;
}

game();


