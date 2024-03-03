// Users key, either rock paper or scissors
// GUI for these options
// Computer returns random outcome
// Rock Rock, Draw
// Rock Paper, Paper wins
// Rock Scissors, Rock Wins
// Paper, Paper, Draw
// Paper, Scissors, Scissors Wins
// Scissors, Scissors, Draw

// if (
//     computerSelection === "rock" ||
//     computerSelection === "paper" ||
//     computerSelection === "scissors"
//   ) {
//     alert("It's a drawlololol");
//   }

function getComputerChoice() {
  const game = ["rock", "paper", "scissors"];
  const randomEvent = Math.random();
  const choice = Math.floor(randomEvent * game.length);
  return game[choice];
}

const com = getComputerChoice();

// const playerSelection = prompt("rock, paper or scissors?", "");

function singleRound(playerSelection, computerSelection) {
  computerSelection = com;
  playerSelection = `${playerSelection.charAt(0).toUpperCase()}${playerSelection
    .slice(1)
    .toLowerCase()}`;

  if (playerSelection === "Rock" && computerSelection === "rock") {
    return `Computer: ${computerSelection.toUpperCase()} It's a draw`;
  } else if (playerSelection === "Rock" && computerSelection === "paper") {
    return `Computer: ${computerSelection.toUpperCase()} you lose`;
  } else if (playerSelection === "Rock" && computerSelection === "scissors") {
    return `Computer: ${computerSelection.toUpperCase()} you win`;
  } else if (playerSelection === "Paper" && computerSelection === "paper") {
    return `Computer: ${computerSelection.toUpperCase()} It"s a draw`;
  } else if (playerSelection === "Paper" && computerSelection === "rock") {
    return `Computer: ${computerSelection.toUpperCase()} you win`;
  } else if (playerSelection === "Paper" && computerSelection === "scissors") {
    return `Computer: ${computerSelection.toUpperCase()} you lose`;
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "scissors"
  ) {
    return `Computer: ${computerSelection.toUpperCase()} It"s a draw`;
  } else if (playerSelection === "Scissors" && computerSelection === "paper") {
    return `Computer: ${computerSelection.toUpperCase()} you win`;
  } else if (playerSelection === "Scissors" && computerSelection === "rock") {
    return `Computer: ${computerSelection.toUpperCase()} you lose`;
  }
}

console.log(singleRound("scissors"));
