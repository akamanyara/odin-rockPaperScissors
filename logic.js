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