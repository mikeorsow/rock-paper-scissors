// Create placeholder reset button for playing the game again
const resetButton = document.createElement("button");

const gameButtons = document.querySelectorAll("button.selection");

// Make buttons light up on click and trigger a round
const clickSelection = (e) => {
  gameButtons.forEach((button) => button.classList.remove("clicked"));
  e.target.classList.add("clicked");
  const playerChoice = e.target.innerText;
  playRound(playerChoice);
};

// Wire up the game buttons with click listeners
gameButtons.forEach((button) =>
  button.addEventListener("click", clickSelection)
);

// Initialize scores
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
  
  // Randomly select the computer's choice
  const getComputerChoice = () => {
    const getRandomIntBetween = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const randomInt = getRandomIntBetween(0, 2);
    const computerChoice = ["Rock", "Paper", "Scissors"][randomInt];
    return computerChoice;
  };

  const computerChoice = getComputerChoice();

  // Calculate who won the round
  const getRoundWinner = () => {
    const winningCombosArr = ["PaperRock", "ScissorsPaper", "RockScissors"];
    const roundCombo = `${playerChoice}${computerChoice}`;

    if (playerChoice == computerChoice) {
      return "tie";
    } else if (winningCombosArr.includes(roundCombo)) {
      return "player";
    } else {
      return "computer";
    }
  };

  const roundWinner = getRoundWinner();

  const resultsH2 = document.querySelector("#results h2");

  // Tell the user if they won, lost, or tied
  const showRoundResultText = () => {
    if (roundWinner == "tie") {
      resultsH2.textContent = `${playerChoice} vs ${computerChoice}... it's a tie!`;
    } else if (roundWinner == "player") {
      resultsH2.textContent = `You won! ${playerChoice} beats ${computerChoice}!`;
    } else if (roundWinner == "computer") {
      resultsH2.textContent = `You lost! ${computerChoice} beats ${playerChoice}!`;
    }
  };

  showRoundResultText();

  const scoreH2 = document.querySelector("#score h2");

  const showUpdatedScores = () => {
    if (roundWinner == "player") ++playerScore;
    if (roundWinner == "computer") ++computerScore;

    scoreH2.textContent = `You: ${playerScore}  Computer: ${computerScore}`;
  };

  showUpdatedScores();

  const showFinalScore = () => {
    if (playerScore > computerScore) {
      resultsH2.innerHTML = `You won the game! <br /> 
      Final Score: You: ${playerScore}. CPU: ${computerScore}.`;
    } else {
      resultsH2.innerHTML = `You lost the game! <br />
      Final Score: You: ${playerScore}. CPU: ${computerScore}.`;
    }
  };

  const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    gameButtons.forEach((button) => button.classList.remove("clicked"));
    gameButtons.forEach((button) => (button.style.display = "block"));
    resultsH2.textContent = "Click to Play";
    resetButton.style.display = "none";
    scoreH2.textContent = "~ Best of 5 wins ~";
  };

  const showResetButton = () => {
    const resultsDiv = document.querySelector("#results");
    resetButton.innerHTML = `Play Again?`;
    resetButton.classList.add("selection", "mt-20");
    resetButton.addEventListener("click", resetGame);
    resetButton.style.display = "block";
    resultsDiv.appendChild(resetButton);
  };

  const clearRoundText = () => {
    gameButtons.forEach((button) => (button.style.display = "none"));
    scoreH2.textContent = "";
  };

  const gameIsOver = playerScore == 5 || computerScore == 5;

  if (gameIsOver) {
    showFinalScore();
    clearRoundText();
    showResetButton();
  }
}
