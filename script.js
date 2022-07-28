// TO DO: Make Score Area wrap

const buttons = document.querySelectorAll("button.selection");
const resultsH2 = document.querySelector("#results h2");
const scoreArea = document.querySelector("#score h2");
const resultsDiv = document.querySelector("#results");
const resetButton = document.createElement("button");

resetButton.innerHTML = `Play Again?`;
resetButton.classList.add("selection", "mt-20");
resetButton.addEventListener("click", resetGame);
resetButton.style.display = "none";
resultsDiv.appendChild(resetButton);

buttons.forEach((button) => button.addEventListener("click", clickSelection));

function clickSelection(e) {
  buttons.forEach((button) => button.classList.remove("clicked"));
  e.target.classList.add("clicked");
  const playerChoice = this.innerText;
  playRound(playerChoice);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  buttons.forEach((button) => button.classList.remove("clicked"));
  buttons.forEach((button) => (button.style.display = "block"));
  resultsH2.textContent = "Click to Play"
  resetButton.style.display = "none";
  scoreArea.textContent = "~ Best of 5 wins ~"
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
  // get computer choice
  const computerChoice = getComputerChoice();

  // check who won getRoundWinner - returns 'tie', 'player', 'cpu'
  const roundWinner = getRoundWinner(playerChoice, computerChoice);

  // display round result - function that accepts roundWinner, returns tie, win, lose message
  resultsH2.textContent = getResultMessage(roundWinner);

  // Increment the winner's score
  if (roundWinner == "player") ++playerScore;
  if (roundWinner == "computer") ++computerScore;

  // update scoreboard
  scoreArea.textContent = `You: ${playerScore}  Computer: ${computerScore}`;

  // check if game is over
  if (playerScore == 5 || computerScore == 5) {
    resultsH2.textContent = getFinalScores();
    buttons.forEach((button) => (button.style.display = "none"));
    resetButton.style.display = "block";
    scoreArea.textContent = ""
  }

  function getComputerChoice() {
    const randomInt = getRandomIntBetween(0, 2);
    const computerChoice = ["Rock", "Paper", "Scissors"][randomInt];
    return computerChoice;
  }

  function getRoundWinner(playerChoice, computerChoice) {
    const winningCombosArr = ["PaperRock", "ScissorsPaper", "RockScissors"];
    const roundCombo = `${playerChoice}${computerChoice}`;

    if (playerChoice == computerChoice) {
      return "tie";
    } else if (winningCombosArr.includes(roundCombo)) {
      return "player";
    } else {
      return "computer";
    }
  }

  function getResultMessage(roundWinner) {
    if (roundWinner == "tie") {
      return `${playerChoice} vs ${computerChoice}... it's a tie!`;
    }
    if (roundWinner == "player") {
      return `You won! ${playerChoice} beats ${computerChoice}!`;
    }
    if (roundWinner == "computer") {
      return `You lost! ${computerChoice} beats ${playerChoice}!`;
    }
  }

  function getFinalScores() {
    if (playerScore > computerScore) {
      return `You won the game!!!!!
      Final Score: You: ${playerScore}. CPU: ${computerScore}.`;
    } else {
      return `You lost the game!!!!!
      Final Score: You: ${playerScore}. CPU: ${computerScore}.`;
    }
  }

  function getRandomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
