// Set number of times to play the game
const roundsToPlay = getRoundsToPlay();

// Check if the user wants to play the game
if (roundsToPlay > 0) {
  runGame(roundsToPlay);
} else {
  console.log(`Got it! No Rock, Paper, Scissors for you today!`);
}

// Run the game!
function runGame(roundsToPlay) {

  // Initialize Scores
  let userScore = 0;
  let computerScore = 0;

  // Play 'roundsToPlay' number of rounds
  for (let i = 0; i < roundsToPlay; i++) {
    // Prompt user for their choice.
    const promptInput = prompt("Choose Rock, Paper, or Scissors");

    // Check if the user hit cancel
    if (promptInput === null) {
      return console.log(`Game exited!`);
    }

    // Make user choice first letter uppercase, the rest lowercase
    const userChoice = makeFirstCharUpper(promptInput);

    // Get the computer's choice.
    const randomInt = getRandomIntBetween(0, 2);
    const computerChoice = ["Rock", "Paper", "Scissors"][randomInt];

    // Store current round number to display in round result message
    const roundNumber = i + 1;

    // Check for a tie
    if (userChoice == computerChoice) {
      console.log(tieMessage());
    }
    // If it wasn't a tie, calculate the winner of the round
    else {
      // See if the user or the computer won.
      const roundWinner = getRoundWinner(userChoice, computerChoice);

      // Increment the winner's score
      roundWinner == "user" ? userScore++ : computerScore++;

      // Display the round result
      console.log(getResultMessage(roundWinner));
    }

    // ----- FUNCTIONS ----- //

    // Returns a string that tells the user if they won or lost the round
    function getResultMessage(roundWinner) {
      return roundWinner == "user" ? winMessage() : loseMessage();

      function winMessage() {
        return `You won round ${roundNumber}! ${userChoice} beats ${computerChoice}!`;
      }

      function loseMessage() {
        return `You lost round ${roundNumber}! ${computerChoice} beats ${userChoice}!`;
      }
    }

    // Returns a string that tells the user it was a tie
    function tieMessage() {
      return `${userChoice} vs ${computerChoice}... round ${roundNumber} is a tie!`;
    }

    // Returns the winner as either 'user', or 'computer'
    function getRoundWinner(userChoice, computerChoice) {
      const winningCombosArr = ["paperrock", "scissorspaper", "rockscissors"];
      const currentRoundCombo = getRoundCombo(userChoice, computerChoice);
      const roundWinner = winningCombosArr.includes(currentRoundCombo)
        ? "user"
        : "computer";
      return roundWinner;

      function getRoundCombo(choice1, choice2) {
        return `${choice1}${choice2}`.toLowerCase();
      }
    }
  }

  // Tell the user if they won, lost, or tied the game
  console.log(getFinalScores());

  // Returns a string with the final score of the game
  function getFinalScores() {
    if (userScore == computerScore) {
      return `The game was a tie!!!!! Final Score: You: ${userScore}. CPU: ${computerScore}.`;
    } else if (userScore > computerScore) {
      return `You won the game!!!!! Final Score: You: ${userScore}. CPU: ${computerScore}.`;
    } else {
      return `You lost the game!!!!! Final Score: You: ${userScore}. CPU: ${computerScore}.`;
    }
  }
}

// Prompt the user to see how many times they want to play.
// Returns an int, or 0 if the user enters a string, empty string, or hits cancel.
function getRoundsToPlay() {
  let promptInput = prompt(
    "How many times would you like to play Rock Paper Scissors?",
    5
  );

  // Handle cancel
  if (promptInput === null) {
    return (promptInput = 0);
  }
  // By default, prompt returns a string, so let's convert to int
  else {
    return parseInt(promptInput);
  }
}

function getRandomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeFirstCharUpper(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}
