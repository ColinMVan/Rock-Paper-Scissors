let counter = 0;

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("What do you want to play? ");
    console.log(playRound(playerChoice, computerPlay()));
  }
  switch (counter) {
    case counter === 2:
      console.log("You tied the best of 5.");
      break;
    case counter > 2:
      console.log("You won the best of 5!");
      break;
    default:
      console.log("You lost the best of 5.");
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "Scissors"
  ) {
    counter++;
    return "You win! Rock beats scissors";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "Paper"
  ) {
    return "You lose! Paper beats rock";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "Rock"
  ) {
    return "You tied! Rock doesn't beat rock";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "Paper"
  ) {
    return "You tied! Paper doesn't beat Paper";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "Rock"
  ) {
    counter++;
    return "You win! Paper beats rock";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "Scissors"
  ) {
    return "You lose! Scissors beats paper";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "Scissors"
  ) {
    return "You tied! Scissors doesn't beat scissors";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "Paper"
  ) {
    counter++;
    return "You win! Scissors beats paper";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "Rock"
  ) {
    return "You lose! Rock beats paper";
  }
}

playGame();
