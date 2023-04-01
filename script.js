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

/* Function that takes the player's and computer's choices, compares them and keeps score (score does not work as intended) */
function playRound() {
  let playerScore = 0;
  let computerScore = 0;
  pChoice = getPlayerChoice(playerSelection);
  cpuChoice = getComputerChoice(computerSelection);
  if (
    (pChoice === r && cpuChoice === s) ||
    (pChoice === p && cpuChoice === r) ||
    (pChoice === s && cpuChoice === p)
  ) {
    console.log(`The computer chose ${cpuChoice}`);
    console.log(`${pChoice} VS ${cpuChoice}, You WON!`);
    playerScore += 1;
  } else if (
    (pChoice === s && cpuChoice === r) ||
    (pChoice === r && cpuChoice === p) ||
    (pChoice === p && cpuChoice === s)
  ) {
    console.log(`The computer chose ${cpuChoice}`);
    console.log(`${pChoice} VS ${cpuChoice}, You LOSE!`);
    computerScore += 1;
  } else {
    console.log(`The computer chose ${cpuChoice}`);
    console.log(`${pChoice} VS ${cpuChoice}, It's a DRAW!`);
  }
  return playerScore, computerScore;
}

/* Function that plays the game 5 times */
function game() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}

game();

