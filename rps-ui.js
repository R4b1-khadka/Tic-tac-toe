let humanScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  console.log(`human score=${humanScore} computerScore=${computerScore}`);
}

function getComputerChoice() {
  let choice;
  value = Math.random();

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
});
paper.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  const winner = playRound(computerChoice, "paper");
});
scissor.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  const winner = playRound(computerChoice, "scissor");

  countScore(winner);
  // let dom= updateDOM(winner,computerChoice,"scissors")
});
function playRound(computerChoice, humanChoice) {
  const output = document.querySelector(".result");
  const header = document.createElement("div");

  header.textContent = `computer choose: ${computerChoice}`;
  header.style.fontSize = "25px";
  output.appendChild(header);

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

  if (humanScore === 3) {
    console.log(" you are the winnner");
    resetGame();
  } else if (computerScore === 3) {
    console.log("computer win this game");
    resetGame();
  }

  // if (humanScore > computerScore) {
  //   console.log("player wins");
  // } else if (humanScore < computerScore) {
  //   console.log("computer wins");
  // } else {
  //   console.log("it's a tie.");
  // }
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
