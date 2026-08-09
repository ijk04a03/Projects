function getComputerChoice() {
    let arr1 = ["rock", "paper", "scissors"];
    let i = Math.floor((Math.random()) * 3);
    return arr1[i];
}


function getUserChoice() {
    let userChoice = window.prompt("Choose between rock, paper, scissors : ");
    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice()?.toLowerCase();
    if (computerChoice == userChoice) {
        console.log("This round is a tie");
        console.log(`Scores are comp : ${computerScore} and user : ${humanScore}`);
    } else if ((computerChoice == "rock" && userChoice == "scissors") ||
        (computerChoice == "scissors" && userChoice == "paper") ||
        (computerChoice == "paper" && userChoice == "rock")) {
        computerScore++;
        console.log("Computer won this round.");
        console.log(`Scores are comp : ${computerScore} and user : ${humanScore}`);
    } else {
        if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
            humanScore++;
            console.log("Human won this round.");
            console.log(`Scores are comp : ${computerScore} and user : ${humanScore}`);
        }
        else console.log("invalid input from user");
    }
}

for (let i = 5; i > 0; i--) {
    playRound();
}