
//console.log(playRound(userChoice, computerChoice))

// ---- To-Do ----
// Write a NEW function called game(). 
// Call the playRound function inside of this one to play a 5 round game 
// that keeps score and reports a winner or loser at the end.
const getRandomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getComputerChoice = () => ["rock", "paper", "scissors"][getRandomIntBetween(0,2)];
const makeFirstCharUpper = (string) => string.slice(0,1).toUpperCase() + string.slice(1);
const handleCancel = (promptOutput) => {
    if (!promptOutput ){
        return console.log("Well, ok then! No game for you!");
    }
}
// Ask the user how many times they want to play the game








const game = () => {

    let numTimesToPlay = prompt("How many times would you like to play Rock Paper Scissors?", 5)
    let userScore = 0;
    let computerScore = 0;
    
    
    if (!numTimesToPlay || numTimesToPlay == 0) {
        return console.log("Well, ok then! No game for you!");
    } 
    // Cancel == null
    // Empty OK == ""
    // parseInt("") == 0
    
    // To-Do: Catch if the user enters a non-number
    // WORKS BUT IS UGLY!!!!
    while (isNaN(numTimesToPlay)) {
        numTimesToPlay = prompt(`${numTimesToPlay} ain't no number! Please enter a number between 1 and 10!`)
    }
    
    // To-Do: Catch if the user enters a number less then 1 or greater than 10
    // BAD ATTEMPT BELOW
    // while (numTimesToPlay < 1 || numTimesToPlay > 10) {
    //     console.log("That's a lot of times! Let's keep it 10 or under please!");
    //     numTimesToPlay = prompt("Please enter a number between 1 and 10!")
    // }
   
    
        
        // test auto-generated computerChoice, prompted userChoice
        // call playRound in a for loop
        for (let i = 0; i < numTimesToPlay; i++) {
    
            const winningChoicesArr = ["paperrock", "scissorspaper", "rockscissors"];
            
            // Prompt user for their choice. Store answer in userChoice.
            const userChoice = makeFirstCharUpper(prompt("Choose Rock, Paper, or Scissors").toLowerCase());
            console.log(`userChoice is ${userChoice}`);
            
            // Get the computer's choice. Store answer in computerChoice.
            const computerChoice = makeFirstCharUpper(getComputerChoice());
            console.log(`computerChoice is ${computerChoice}`);
            
            let playRound = (userChoice, computerChoice) => {
                
                const roundChoices = `${userChoice}${computerChoice}`.toLowerCase();
    
                if (computerChoice == userChoice) {
                    return `${userChoice} vs ${computerChoice}... it's a tie!`
                }
                else if (winningChoicesArr.includes(roundChoices)) { 
    
                    userScore++;
                    return `You win! ${userChoice} beats ${computerChoice}!`;
                }
                else {
                    computerScore++
                    return `You lose! ${computerChoice} beats ${userChoice}!`
                }
            }
    
            console.log(playRound(userChoice, computerChoice));
            console.log(`Your score: ${userScore}. CPU score: ${computerScore}`)
        }

        if (userScore == computerScore) {
            return console.log(
                `It's a tie!!!!! Final Score: You: ${userScore}. CPU: ${computerScore}.`
            )
        } 
        else if (userScore > computerScore) {
            return console.log(
                `You Win!!!!! Final Score: You: ${userScore}. CPU: ${computerScore}.`
            )
        }
        else {
            return console.log(
                `You Lose!!!!! Final Score: You: ${userScore}. CPU: ${computerScore}.`
            )
        }
}

game();