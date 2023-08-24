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
  return selection;
}


let playerScore = 0;
let computerScore = 0;

function playRound(e) {
  let playerSelection = this.textContent;
  let computerSelection = getComputerChoice();
  console.log("You chose: " + playerSelection);
  console.log("Computer chose: " + computerSelection);

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


/*
function game() {
  // use previous function inside this one to play 5 round game
  // keep score and report winner at end
  playRound(getPlayerChoice(), getComputerChoice());
  playRound(getPlayerChoice(), getComputerChoice());
  playRound(getPlayerChoice(), getComputerChoice());
  playRound(getPlayerChoice(), getComputerChoice());
  playRound(getPlayerChoice(), getComputerChoice());
  console.log("You: " + playerScore + " Computer: " + computerScore);
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

*/

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', playRound));




