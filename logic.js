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

function getHumanChoice() {
    // prompt for the choice
    let choice = prompt("rock, paper or scissors?")
    // return value and bring it to lowerCase to avoid problems
    return choice.toLowerCase();
}

// Initialize global score variables
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    // draw
    if (humanChoice === computerChoice) {
        console.log("It's a DRAW!")
    }
    // rock > scissors WIN
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        ++humanScore;
        console.log(`You win! Rock beats Scissors. YOU:${humanScore} - COMPUTER:${computerScore}`);
    }
    // rock < paper LOSE
    else if (humanChoice == "rock" && computerChoice == "paper") {
        ++computerScore;
        console.log(`You lost! Paper beats Rock. YOU:${humanScore} - COMPUTER:${computerScore}`);
    }
    // paper > rock WIN
    else if (humanChoice == "paper" && computerChoice == "rock") {
        ++humanScore;
        console.log(`You win! Paper beats Rock. YOU:${humanScore} - COMPUTER:${computerScore}`);
    }
    // paper < scissors LOSE
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        ++computerScore;
        console.log(`You lost! Scissors beats Paper. YOU:${humanScore} - COMPUTER:${computerScore}`);
    }
    // scissors > paper WIN
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        ++humanScore;
        console.log(`You win! Scissors beats Paper. YOU:${humanScore} - COMPUTER:${computerScore}`);
    }
    // scissors < rock LOSE
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        ++computerScore;
        console.log(`You lost! Rock beats Scissors. YOU:${humanScore} - COMPUTER:${computerScore}`);
    }
}

let isRunning = true;
while(isRunning) {
    // check human and computer choice
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    // play the round
    playRound(humanSelection, computerSelection);

    // end the game after 3 points
    if (humanScore === 3) {
        console.log("YOU WON THE GAME!")
        isRunning = false;
    }
    else if (computerScore === 3) {
        console.log("YOU LOST THE GAME!")
        isRunning = false;
    }
}