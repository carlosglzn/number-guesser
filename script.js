let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Function to generate a random number between 0 and 9
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// Function to determine which guess is closest to the target number

const compareGuesses = (user, computer, target) => {
  if (Math.abs(target - user) > Math.abs(target - computer)) {
    return false;
  } else if (Math.abs(target - user) <= Math.abs(target - computer)) {
    return true;
  }
};

// Function to correctly increase the winner's score after each round

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  } else {
    console.log("Error!");
  }
};

// Function to update the round number after each round

const advanceRound = () => {
    currentRoundNumber ++;
};