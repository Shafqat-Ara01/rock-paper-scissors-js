let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//Generate computer choice

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

//draw
const drawGame = () => {
  console.log("Game was draw!");
  msg.innerText = "Game was draw. Play again!";
  msg.style.backgroundColor = "#6C5CE7";
  msg.style.color = "#ffffff";
};

// showWinner

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("you win!");
    msg.innerText = `Congratulations! Your ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor = "#FFD93D";
    msg.style.color = "#000000";
    userScore++;
    userScorePara.innerText = userScore;
  } else {
    console.log("you lose!");
    msg.innerText = `Oops! ${compChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor = "#FF6B81";
    msg.style.color = "#ffffff";
    compScore++;
    compScorePara.innerText = compScore;
  }
};

// userChoice & comp choce

const playGame = (userChoice) => {
  console.log("userChoice is = ", userChoice);
  const compChoice = genCompChoice();
  console.log("compChoice is =", compChoice);

  // conditions of game
  if (userChoice === compChoice) {
    drawGame(); // make a draw function
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper, scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "rock" ? true : false;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    // show winner
    showWinner(userWin, userChoice, compChoice);
  }
};

//Each choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
