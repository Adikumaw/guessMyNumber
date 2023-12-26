("use strict");

import Game from "./Game.js";

const start = document.getElementsByClassName("start")[0]; // start button
const again = document.getElementsByClassName("again")[0]; // again button
const checkButton = document.getElementsByClassName("check")[0]; // checkButton
let message = document.getElementsByClassName("message")[0]; // message component
let chances = document.getElementsByClassName("chances")[0]; // chances component
let score = document.getElementsByClassName("score")[0]; // score component
let highScore = document.getElementsByClassName("highscore")[0]; // highScore component
let guess = document.getElementsByClassName("guess")[0]; // user input

let game = new Game();

// updates current score, chances and highScore status
let updateValues = () => {
  chances.innerHTML = game.getChances();
  score.innerHTML = game.getScore();
  highScore.innerHTML = game.getHighScore();
};

// event listner to start button
start.addEventListener("click", () => {
  // make game body visible
  const gameBody = document.getElementsByTagName("main")[0];
  gameBody.classList.add("visible");
  gameBody.classList.remove("hidden");
  message.innerHTML = "Start guessing..."; // show start guessing message
  userInput.value = ""; // empty input area
  game.reset(); // reset game
  updateValues(); // update new values
});

// event listner to again button
again.addEventListener("click", () => {
  // make play again! button to check! button
  if (checkButton.innerHTML == "Play Again!") checkButton.innerHTML = "Check!";
  message.innerHTML = "guess again..."; // show guess again message
  userInput.value = ""; // empty input area
  game.again(); // call again() method
  updateValues(); // update new values
});

// event listner to checkbutton
checkButton.addEventListener("click", () => {
  // trigger click on again button if checkButton is play again!
  if (checkButton.innerHTML == "Play Again!") {
    const event = new Event("click");
    again.dispatchEvent(event);
    return;
  }
  // check the input value..
  message.innerHTML = game.check(guess.value);
  updateValues(); // update new values
  // make check button to play again if wins or loose
  if (message.innerHTML == "you win..." || message.innerHTML == "you lose...")
    checkButton.innerHTML = "Play Again!";
});

// incorrect value checker (checks if the user input gets out of bounds) and promt to re-enter the value
userInput.addEventListener("input", () => {
  const inputValue = userInput.value;
  if (inputValue < 0 || inputValue > 20) {
    alert("Please enter a number between 1 to 20 !");
    userInput.value = "";
  }
});
