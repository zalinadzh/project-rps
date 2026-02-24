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


































































