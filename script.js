const userScore = document.querySelector(".user");
const computerScore = document.querySelector(".computer");

let userWins = 0;
let computerWins = 0;

userScore.textContent = `User: ${userWins}`;
computerScore.textContent = `Computer: ${computerWins}`;

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "Scissors"
  ) {
    userWins++;
    return "You";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "Paper"
  ) {
    computerWins++;
    return "Computer";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "Rock"
  ) {
    return "Tie";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "Paper"
  ) {
    return "Tie";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "Rock"
  ) {
    userWins++;
    return "You";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "Scissors"
  ) {
    computerWins++;
    return "Computer";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "Scissors"
  ) {
    return "Tie";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "Paper"
  ) {
    userWins++;
    return "You";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "Rock"
  ) {
    computerWins++;
    return "Computer";
  }
}

const output = document.querySelector(".output");

const icons = document.querySelectorAll(".icons");
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    output.textContent = `Winner: ${playRound(icon.id, computerPlay())}`;
    userScore.textContent = `User: ${userWins}`;
    computerScore.textContent = `Computer: ${computerWins}`;
  });
});
