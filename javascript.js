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
  const randomIndex = Math.floor(randomEvent * game.length);
  return game[randomIndex];
}

function capitalize(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
}

function singleRound(playerSelection, computerSelection) {
  computerSelection = capitalize(getComputerChoice());
  playerSelection = capitalize(playerSelection);

  if (playerSelection === computerSelection) {
    return `Computer: ${computerSelection} It's a draw`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return `Computer: ${computerSelection} you win`;
  } else {
    return `Computer: ${computerSelection}  you lose`;
  }
}

console.log(singleRound("Rock"));

// rock paper lose
// paper scissors lose
// scissors rock lose

// rock scissors win
// paper rock win
// scissors paper win

// rock rock draw
// paper paper draw
// scissors scissors draw
