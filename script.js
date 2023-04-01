let r = "Rock";
let p = "Paper";
let s = "Scissors";
let playerSelection;
let computerSelection;

/* Function that randomly returns "Rock", "Paper" or "Scissors" */
function getComputerChoice() {
    const choiceList = [r,p,s];
    let computerSelection = choiceList[Math.floor(Math.random()*choiceList.length)];
    console.log(computerSelection);
}

getComputerChoice();