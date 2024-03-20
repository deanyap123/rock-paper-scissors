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
    return "Its a Draw";
  } else if (
    (playerSelection === "Rock") & (computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    return "You Win";
  } else {
    return "You Lose";
  }
}

let playScore = 0;
let compScore = 0;
let currentRound = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const message = document.querySelector(".message");
const yourScore = document.querySelector(".your-score");
const computerScore = document.querySelector(".computer-score");
const round = document.querySelector(".round");

rock.addEventListener("click", () => {
  if (currentRound < 5) {
    handlePlayerChoice("rock");
    currentRound++;
    round.textContent = `Round : ${currentRound}`;
  }
});

paper.addEventListener("click", () => {
  if (currentRound < 5) {
    handlePlayerChoice("paper");
    currentRound++;
    round.textContent = `Round : ${currentRound}`;
  }
});

scissors.addEventListener("click", () => {
  if (currentRound < 5) {
    handlePlayerChoice("scissors");
    currentRound++;
    round.textContent = `Round : ${currentRound}`;
  }
});
function handlePlayerChoice(playerChoice) {
  const result = oneRound(playerChoice);
  if (result === "You Win") {
    playScore++;
    yourScore.textContent = `Your score : ${playScore}`;
    message.textContent = result;
  } else if (result === "You Lose") {
    compScore++;
    computerScore.textContent = `Computer score : ${compScore}`;
    message.textContent = result;
  } else {
    message.textContent = "Draw";
  }

  console.log("Current round:", currentRound);

  if (currentRound === 4) {
    finalScore();
  }
}

function finalScore() {
  if (playScore === compScore) {
    message.textContent = "Tie, Rematch?";
  } else if (playScore > compScore) {
    message.textContent = "Congrats, You Won";
  } else if (playScore < compScore) {
    message.textContent = "Gameover, You lost";
  }
}
