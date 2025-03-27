let humanScore = 0;
let computerScore = 0;
// function getHumanChoice() {
//   let input = prompt("choose rock, paper or scissor:");
//   let humanChoiceLwr = input.toLowerCase();
//   return humanChoiceLwr;
// }

const rock = document.getElementById("rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

rock.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  playRound(computerChoice, "rock");
  console.log(computerChoice);
});
paper.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  playRound(computerChoice, "paper");
  console.log(computerChoice);
});
scissor.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  playRound(computerChoice, "scissor");
  console.log(computerChoice);
});

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

function playRound(computerChoice, humanChoice) {
  console.log(`you choose ${humanChoice}`);
  console.log(`computer choose ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log(`computer also choose ${humanChoice} it's a tie`);
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissor") ||
    (humanChoice == "scissor" && computerChoice == "rock")
  ) {
    // console.log("computer wins");
    return "computer";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissor") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissor" && computerChoice == "paper")
  ) {
    return "human";
  } else {
    console.log("invalid input!! please enter valid input");
    return "invalid!";
  }
}
// function playGame() {
//   for (let i = 0; i < 1; i++) {
//     let computerChoice = getComputerChoice();
//     // console.log(computerChoice);
//     // let humanChoice = getHumanChoice();

//     let roundResult = playRound(computerChoice, humanChoice);
//     if (roundResult === "human") {
//       humanScore += 1;
//       console.log("you win ");
//       console.log(
//         `human score=${humanScore} computerScore=${computerScore}`
//       );
//     } else if (roundResult === "computer") {
//       computerScore += 1;
//       console.log("computer win");
//       console.log(
//         `human score=${humanScore} computerScore=${computerScore}`
//       );
//     } else if (roundResult === "invalid!") {
//       console.log("invalid input no points given!!");
//       console.log(
//         `human score=${humanScore} computerScore=${computerScore}`
//       );
//     } else {
//       console.log("it's a tie");
//       console.log(
//         `human score=${humanScore} computerScore=${computerScore}`
//       );
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
// const btn = document.getElementsByClassName("btn");

// btn.addEventListener("click", alert("hello"));
