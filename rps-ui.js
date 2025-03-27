let humanScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

function resetGame() {
  humanScore = 0;
  computerScore = 0;
}

function getComputerChoice() {
  let choice;
  let value = Math.random();

  if (value < 0.4) {
    choice = "rock";
  } else if (value < 0.6) {
    choice = "paper";
  } else {
    choice = "scissor";
  }
  return choice;
}

rock.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  const winner = playRound(computerChoice, "rock");
  countScore(winner);
  updateDOM(computerChoice, winner);
});
paper.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  const winner = playRound(computerChoice, "paper");
  countScore(winner);
  updateDOM(computerChoice, winner);
});
scissor.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  const winner = playRound(computerChoice, "scissor");

  countScore(winner);
  updateDOM(computerChoice, winner);
});
function playRound(computerChoice, humanChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissor") ||
    (humanChoice == "scissor" && computerChoice == "rock")
  ) {
    console.log("computer wins");
    return "computer";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissor") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissor" && computerChoice == "paper")
  ) {
    console.log("you win");
    return "human";
  } else {
    console.log(`computer also choose ${humanChoice} it's a tie`);
    return "tie";
  }
}
function countScore(roundResult) {
  if (roundResult === "human") {
    humanScore += 1;

    console.log(`human score=${humanScore} computerScore=${computerScore}`);
  } else if (roundResult === "computer") {
    computerScore += 1;

    console.log(`human score=${humanScore} computerScore=${computerScore}`);
  } else {
    console.log(`human score=${humanScore} computerScore=${computerScore}`);
  }
}

function updateDOM(computerChoice, winner) {
  const scoreBoard = document.querySelector(".score");
  const output = document.querySelector(".result");
  const header = document.createElement("p");
  const roundWinner = document.createElement("p");

  output.textContent = "";
  header.textContent = `computer choose: ${computerChoice}`;
  if (winner === "human") {
    roundWinner.textContent = "you won!!";
  } else if (winner === "computer") {
    roundWinner.textContent = "computer Won this round";
  } else {
    roundWinner.textContent = `computer also choose ${computerChoice} It's a tie`;
  }

  header.style.fontSize = "25px";
  output.appendChild(header);
  output.appendChild(roundWinner);
  scoreBoard.textContent = `human score = ${humanScore} | computer Score= ${computerScore}`;
  const gameWinner = document.createElement("p");

  if (humanScore === 3) {
    gameWinner.textContent = " you are the winnner";
    output.appendChild(gameWinner);
    resetGame();
  } else if (computerScore === 3) {
    gameWinner.textContent = " Computer are the winnner";
    output.appendChild(gameWinner);
    resetGame();
  }
}
