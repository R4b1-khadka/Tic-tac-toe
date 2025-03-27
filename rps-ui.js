let humanScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

function getComputerChoice() {
  let choice;
  value = Math.random();
  if (value < 0.4) {
    choice = "rock";
  }
  if (value < 0.6) {
    choice = "paper";
  } else {
    choice = "scissor";
  }
  return choice;
}

let computerChoice = getComputerChoice();
rock.addEventListener("click", () => {
  let winner = playRound(computerChoice, "rock");
});
paper.addEventListener("click", () => {
  const winner = playRound(computerChoice, "paper");
});
scissor.addEventListener("click", () => {
  let winner = playRound(computerChoice, "scissor");
  console.log(winner);
  countScore(winner);
});
function playRound(computerChoice, humanChoice) {
  const output = document.querySelector(".result");
  const header = document.createElement("div");

  header.textContent = `computer choose: ${computerChoice}`;
  header.style.fontSize = "25px";
  output.appendChild(header);

  if (humanChoice === computerChoice) {
    console.log(`computer also choose ${humanChoice} it's a tie`);
  } else if (
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
  }
}
function countScore(roundResult) {
  if (roundResult === "human") {
    humanScore += 1;
    console.log("you win ");
    console.log(`human score=${humanScore} computerScore=${computerScore}`);
  } else if (roundResult === "computer") {
    computerScore += 1;
    console.log("computer win");
    console.log(`human score=${humanScore} computerScore=${computerScore}`);
  } else {
    console.log("it's a tie");
    console.log(`human score=${humanScore} computerScore=${computerScore}`);
  }
}
// function playGame() {
//   for (let i = 0; i < 1; i++) {
//     let roundResult;

//     // let computerChoice = getComputerChoice();
//     // console.log(computerChoice);
//     // let humanChoice = getHumanChoice();

//     if (roundResult === "human") {
//       humanScore += 1;
//       console.log("you win ");
//       console.log(`human score=${humanScore} computerScore=${computerScore}`);
//     } else if (roundResult === "computer") {
//       computerScore += 1;
//       console.log("computer win");
//       console.log(`human score=${humanScore} computerScore=${computerScore}`);
//     } else if (roundResult === "invalid!") {
//       console.log("invalid input no points given!!");
//       console.log(`human score=${humanScore} computerScore=${computerScore}`);
//     } else {
//       console.log("it's a tie");
//       console.log(`human score=${humanScore} computerScore=${computerScore}`);
//     }
//     console.log("-------------------------");
//   }
//   if (humanScore > computerScore) {
//     console.log("player wins");
//   } else if (humanScore < computerScore) {
//     console.log("computer wins");
//   } else {
//     console.log("it's a tie.");
//   }
// }
// playGame();
