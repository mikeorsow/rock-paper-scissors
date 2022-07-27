

const buttons = document.querySelectorAll("button.selection");
const resultArea = document.querySelector("#results h3")
const scoreArea = document.querySelector("#score h3");
let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    const playerChoice = this.innerText;
    playRound(playerChoice);
  })
);

function playRound(playerChoice) {
  console.log(
    `Let's get ready to rumblllllleeeeeee! You played ${playerChoice}`
  );

  // get computer choice
  const computerChoice = getComputerChoice();

  // check who won getRoundWinner - returns 'tie', 'player', 'cpu'
  const roundWinner = getRoundWinner(playerChoice, computerChoice);

  // display round result - function that accepts roundWinner, returns tie, win, lose message
  resultArea.textContent = getResultMessage(roundWinner);

  // Increment the winner's score
  if (roundWinner == "player") playerScore++;
  if (roundWinner == "computer") computerScore++;
  

  // update scoreboard
  scoreArea.textContent = `You: ${playerScore}  Computer: ${computerScore}`

  function getComputerChoice() {
    const randomInt = getRandomIntBetween(0, 2);
    const computerChoice = ["Rock", "Paper", "Scissors"][randomInt];
    return computerChoice;
  }

  function getResultMessage(roundWinner) {
    if (roundWinner == "tie") {
      return getTieMessage();
    } 
    if (roundWinner == "player") {
      return getWinMessage();
    } 
    if (roundWinner == "computer"){
      return getLoseMessage();
    }
    

    function getWinMessage() {
      return `You won! ${playerChoice} beats ${computerChoice}!`;
    }

    function getLoseMessage() {
      return `You lost! ${computerChoice} beats ${playerChoice}!`;
    }

    function getTieMessage() {
      return `${playerChoice} vs ${computerChoice}... it's a tie!`;
    }
  }

  function getRoundWinner(playerChoice, computerChoice) {
    const winningCombosArr = ["PaperRock", "ScissorsPaper", "RockScissors"];
    const roundCombo = `${playerChoice}${computerChoice}`;

    if (playerChoice == computerChoice) {
      return "tie";
    } else if (winningCombosArr.includes(roundCombo)) {
      console.log(`round combo is ${roundCombo}`)
      return "player";
    } else {
      return "computer";
    }
  }

  // Returns the winner as either 'player', or 'computer'
  
}

// ---- New Approach ----
// playRound(playerChoice)
// update scores
// display current score
// wrap everything in a while loop, while player score || cpu score is <5, show the game
// After the while loop, we ask the user if they want to play again
// bonus: add a 'reset' or 'start over' button that starts the game over

//   // Initialize Scores
//   let userScore = 0;
//   let computerScore = 0;

//   // Play 'roundsToPlay' number of rounds

//
//     // If it wasn't a tie, calculate the winner of the round
//     else {
//       // See if the user or the computer won.
//       const roundWinner = getRoundWinner(userChoice, computerChoice);

//       // Increment the winner's score
//       roundWinner == "user" ? userScore++ : computerScore++;

//       // Display the round result
//       console.log(getResultMessage(roundWinner));
//     }

//     // ----- FUNCTIONS ----- //

//     // Returns a string that tells the user if they won or lost the round

//     // Returns a string that tells the user it was a tie

//   // Tell the user if they won, lost, or tied the game
//   console.log(getFinalScores());

//   // Returns a string with the final score of the game
//   function getFinalScores() {
//     if (userScore == computerScore) {
//       return `The game was a tie!!!!! Final Score: You: ${userScore}. CPU: ${computerScore}.`;
//     } else if (userScore > computerScore) {
//       return `You won the game!!!!! Final Score: You: ${userScore}. CPU: ${computerScore}.`;
//     } else {
//       return `You lost the game!!!!! Final Score: You: ${userScore}. CPU: ${computerScore}.`;
//     }
//   }

function getRandomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
