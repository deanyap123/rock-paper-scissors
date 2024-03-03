// Users key, either rock paper or scissors
// GUI for these options
// Computer returns random outcome
// Rock Rock, Draw
// Rock Paper, Paper wins
// Rock Scissors, Rock Wins
// Paper, Paper, Draw
// Paper, Scissors, Scissors Wins
// Scissors, Scissors, Draw

function getComputerChoice() {
  const game = ["rock", "paper", "scissors"];
  const randomEvent = Math.random();
  const choice = Math.floor(randomEvent * game.length);
  return game[choice];
}

console.log(getComputerChoice());
