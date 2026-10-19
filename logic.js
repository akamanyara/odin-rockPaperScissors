function getComputerChoice() {
    // calculate random number
    let choiceNumber = Math.floor(Math.random() * 3);
    let choice;

    // assign choice variable based on randomized number
    switch(choiceNumber) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            return "wrong case number";
    }
    // return the computer choice
    return choice;
}

// function getHumanChoice() {
//     // prompt for the choice
//     let choice = prompt("rock, paper or scissors?")
//     // return value and bring it to lowerCase to avoid problems
//     return choice.toLowerCase();
// }

// Initialize global score variables
let humanScore = 0;
let computerScore = 0;
const scoreText = document.querySelector("#score-text");

function playRound(humanChoice, computerChoice) {
    
    // draw
    if (humanChoice === computerChoice) {
        scoreText.textContent = "It's a DRAW!";
    }
    // rock > scissors WIN
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        ++humanScore;
        scoreText.textContent = `You win! Rock beats Scissors.`;
    }
    // rock < paper LOSE
    else if (humanChoice == "rock" && computerChoice == "paper") {
        ++computerScore;
        scoreText.textContent = `You lost! Paper beats Rock.`;
    }
    // paper > rock WIN
    else if (humanChoice == "paper" && computerChoice == "rock") {
        ++humanScore;
        scoreText.textContent = `You win! Paper beats Rock.`;
    }
    // paper < scissors LOSE
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        ++computerScore;
        scoreText.textContent = `You lost! Scissors beats Paper.`;
    }
    // scissors > paper WIN
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        ++humanScore;
        scoreText.textContent = `You win! Scissors beats Paper.`;
    }
    // scissors < rock LOSE
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        ++computerScore;
        scoreText.textContent = `You lost! Rock beats Scissors.`;
    }
}

const score = document.querySelector("#score")
const winner = document.createElement("h3");
// new game logic
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (humanScore >= 5 || computerScore >= 5) {
            humanScore = 0;
            computerScore = 0;
        }
        
        // event.target.id gives us string id value so rock will be "rock"
        playRound(event.target.id, getComputerChoice())
        
        score.textContent = `SCORE: ${humanScore} - ${computerScore}`;

        if (humanScore === 5) {
            winner.textContent = `WINNER: YOU! - click to restart`;
            score.appendChild(winner);
        }
        else if (computerScore === 5) {
            winner.textContent = `WINNER: COMPUTER! YOU LOST... - click to restart`;
            score.appendChild(winner);
        }
    });
});