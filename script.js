let r = "Rock";
let p = "Paper";
let s = "Scissors";
let playerSelection;
let computerSelection;

/* Function that randomly returns "Rock", "Paper" or "Scissors" */
function getComputerChoice() {
  const choiceList = [r, p, s];
  let computerSelection =
    choiceList[Math.floor(Math.random() * choiceList.length)];
  console.log(`The computer chose ${computerSelection}`);
}

/* Function that asks the player to choose r for Rock, p for Paper or S for Scissors */
function getPlayerChoice() {
  let playerSelection = prompt(
    "Please choose R for 'Rock', P for 'Paper' or S for 'Scissors'"
  ).toLowerCase();

  switch (playerSelection) {
    case "r":
      playerSelection = r;
      console.log(`You chose ${playerSelection}`);
      break;

    case "p":
      playerSelection = p;
      console.log(`You chose ${playerSelection}`);
      break;

    case "s":
      playerSelection = s;
      console.log(`You chose ${playerSelection}`);
      break;

    default:
      console.log("You need to choose one of the options, R, P or S");
  }
}

getPlayerChoice();
