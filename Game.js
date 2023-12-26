// Game class

class Game {
  constructor() {
    this.chances = 20;
    this.score = 0;
    this.highScore = 0;
    this.randomNumber;
    this.randomNumberGenerator();
  }

  // getter for the status variables...
  getChances() {
    return this.chances;
  }
  getScore() {
    return this.score;
  }
  getHighScore() {
    return this.highScore;
  }

  // check user input and return string accordingly
  check(input) {
    // if user wins
    if (input == this.randomNumber) {
      this.score = this.chances;
      if (this.score > this.highScore) {
        this.highScore = this.score;
      }
      return "you win...";
    }
    this.chances--;
    // if user loses
    if (this.chances < 1) return "you lose...";

    // if user's values is not matched
    return input < this.randomNumber ? "too low..." : "too high...";
  }

  // random number generator
  randomNumberGenerator() {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    this.randomNumber = randomNumber;
  }

  // reset status values except highScore
  again() {
    this.chances = 20;
    this.score = 0;
    this.randomNumberGenerator();
  }

  // reset all status values
  reset() {
    this.again();
    this.highScore = 0;
  }
}

export default Game;
