let r = "Rock";
let p = "Paper";
let s = "Scissors";
r < p < s < r;
let playerSelection;
let computerSelection;

/* Function that randomly returns "Rock", "Paper" or "Scissors" */
function getComputerChoice() {
  const choiceList = [r, p, s];
  let computerSelection =
    choiceList[Math.floor(Math.random() * choiceList.length)];
  return computerSelection;
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
      return playerSelection;
      break;

    case "p":
      playerSelection = p;
      console.log(`You chose ${playerSelection}`);
      return playerSelection;
      break;

    case "s":
      playerSelection = s;
      console.log(`You chose ${playerSelection}`);
      return playerSelection;
      break;

    default:
      console.log("You need to choose one of the options, R, P or S");
  }
}

function playRound() {
  pChoice = getPlayerChoice(playerSelection);
  cpuChoice = getComputerChoice(computerSelection);
  if (pChoice > cpuChoice) {
    console.log(`The computer chose ${cpuChoice}`);
    console.log(`${pChoice} VS ${cpuChoice}, You WON!`);
  } else if (pChoice < cpuChoice) {
    console.log(`The computer chose ${cpuChoice}`);
    console.log(`${pChoice} VS ${cpuChoice}, You LOSE!`);
  } else {
    console.log(`The computer chose ${cpuChoice}`);
    console.log(`${pChoice} VS ${cpuChoice}, It's a DRAW!`);
  }
}

playRound();
