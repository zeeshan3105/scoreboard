let heading = document.getElementById("heading");
let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");
let timer = document.getElementById("timer");

let add1Home = document.getElementById("add1Home");
let add2Home = document.getElementById("add2Home");
let add3Home = document.getElementById("add3Home");

let add1Guest = document.getElementById("add1Guest");
let add2Guest = document.getElementById("add2Guest");
let add3Guest = document.getElementById("add3Guest");

let StartGame = false;
let EndGame = true;

// TIMER VARIABLES
let totalSeconds = 0;
let intervalId = null;

// TIMER FUNCTION
const Timer = () => {
  if (intervalId !== null) return; // prevent multiple timers

  intervalId = setInterval(() => {
    totalSeconds++;

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    timer.textContent = `${minutes}:${seconds}`;
  }, 1000);
};

// STOP TIMER
const stopTimer = () => {
  clearInterval(intervalId);
  intervalId = null;
};


//Start Game
let startGame = document.getElementById("startGame");

startGame.addEventListener("click", () => {
  StartGame = true;
  EndGame = false;
   Timer();
  checkLeadingTeam();
  endGameClicked = false;
  toggleButtons();
});

//End Game

let endGame = document.getElementById("endGame");
let endGameClicked = false;
endGame.addEventListener("click", () => {
  StartGame = false;
  EndGame = true;
  endGameClicked = true;
  toggleButtons();
 stopTimer();
  checkLeadingTeam();
});

// Leading Team
const checkLeadingTeam = () => {
  if (StartGame) {
    if (Number(homeScore.textContent) > Number(guestScore.textContent)) {
      heading.textContent = "Home Is Leading The Game";
    } else if (Number(homeScore.textContent) < Number(guestScore.textContent)) {
      heading.textContent = "Guest Is Leading The Game";
    } else if (
      Number(homeScore.textContent) === Number(guestScore.textContent)
    ) {
      heading.textContent = "Both Team Has Same Points";
    }
  } else if (endGameClicked) {
    heading.textContent = "Game Has Ended";
  } else {
    heading.textContent = "Click On Start Game button To Start The Timer";
  }
};

checkLeadingTeam();

// New Game
let newGame = document.getElementById("newGame");

const NewGame = () => {
  homeScore.textContent = "0";
  guestScore.textContent = "0";
  endGameClicked = false;
  totalSeconds = 0;
  timer.textContent = "00:00";

  stopTimer();
};

newGame.addEventListener("click", () => {
  NewGame();
  checkLeadingTeam();
  StartGame = false;
  EndGame = true;
  toggleButtons();
});

// Add Points to Home
add1Home.addEventListener("click", () => {
  let home = Number(homeScore.textContent);
  home++;
  homeScore.textContent = home;
  checkLeadingTeam();
});
add2Home.addEventListener("click", () => {
  let home = Number(homeScore.textContent);
  home = home + 2;
  homeScore.textContent = home;
  checkLeadingTeam();
});
add3Home.addEventListener("click", () => {
  let home = Number(homeScore.textContent);
  home = home + 3;
  homeScore.textContent = home;
  checkLeadingTeam();
});

// Add Points to Guest
add1Guest.addEventListener("click", () => {
  let guest = Number(guestScore.textContent);
  guest++;
  guestScore.textContent = guest;
  checkLeadingTeam();
});
add2Guest.addEventListener("click", () => {
  let guest = Number(guestScore.textContent);
  guest = guest + 2;
  guestScore.textContent = guest;
  checkLeadingTeam();
});
add3Guest.addEventListener("click", () => {
  let guest = Number(guestScore.textContent);
  guest = guest + 3;
  guestScore.textContent = guest;
  checkLeadingTeam();
});

// able/disable
const toggleButtons = () => {
  if (StartGame === false) {
    add1Home.disabled = true;
    add2Home.disabled = true;
    add3Home.disabled = true;
    add1Guest.disabled = true;
    add2Guest.disabled = true;
    add3Guest.disabled = true;
  } else {
    add1Home.disabled = false;
    add2Home.disabled = false;
    add3Home.disabled = false;
    add1Guest.disabled = false;
    add2Guest.disabled = false;
    add3Guest.disabled = false;
  }
};

toggleButtons();
