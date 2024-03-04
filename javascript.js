function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function capitalize(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
}

function oneRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);
  computerSelection = capitalize(getComputerChoice());

  if (playerSelection === computerSelection) {
    return "Its a draw";
  } else if (
    (playerSelection === "Rock") & (computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    return "You Win";
  } else {
    return "You lose";
  }
}

function playGame() {
  let yourScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++) {
    let answer = prompt("Rock, Paper, or Scissors? :)");
    const result = oneRound(answer);
    console.log(result);

    if (result === "You Win") {
      yourScore++;
    } else if (result === "You lose") {
      computerScore++;
    }
  }

  if (yourScore === computerScore) {
    console.log("Tie, Rematch?", yourScore, computerScore);
  } else if (yourScore > computerScore) {
    console.log("Congrats, You Won", yourScore, computerScore);
  } else if (yourScore < computerScore) {
    console.log("Gameover, You Lost");
  }
}

playGame();
