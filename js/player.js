class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.turn = false;
  }

  submitAnswer(playerGuess, question, i) {
    if (playerGuess === question.answer) {
      this.score += question.pointValue; 
      document.getElementById(i).innerText = this.score;
      playerAnswer.value = '';
      game.changePlayer();
    } else {
      this.score -= question.pointValue;
      document.getElementById(i).innerText = this.score;
      playerAnswer.value = '';
      game.changePlayer();
    }
  }

  toggleTurn() {
    this.turn = !this.turn;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}