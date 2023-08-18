function getComputerChoice() {
  // computer needs to randomly select between R/P/S
  // randomly select a number
  // apply choice to computer player based on number
  let selection
  let number = Math.random();
  if (number < (1 / 3)) {
    selection = "ROCK";
  } else if (number < (2 / 3)) {
    selection = "PAPER";
  } else {
    selection = "SCISSORS";
  }
  console.log("Computer chose: ")
  return selection;
}

function getPlayerChoice() {
  // prompt for user input
  // make sure user input is a valid choice
  let selection = prompt("Choose ROCK, PAPER, or SCISSORS").toUpperCase();
  if (selection != "ROCK" || selection != "PAPER" || selection != "SCISSORS") {
    // user needs to try again
  }
  console.log("You chose: " + selection);
}

function playRound(playerSelection, computerSelection) {

}

playRound(getPlayerChoice(), getComputerChoice());

// function that plays single round of rps
// this function should take 2 parameters: playerSelection and computerSelection
// then return string that declares if user won or lost



function game() {
  // use previous function inside this one to play 5 round game
  // keep score and report winner at end
  // call playRound function 5 times or use loops
}



// plan
// need computer choice
// need player choice
// compare the two choices
// define winner based on the choices
// tell user what the result is


