function getComputerChoice() {
    const choice = Math.random();
    if (choice < 1 / 3) {
        return "rock";
    } else if (choice < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice());

function getHumanChoice() {
 let choice = prompt("Введите ваш выбор: rock, paper или scissors");
 return choice;
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie! both chose " + humanChoice);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

































































