class Player {
  constructor(name, id) {
    this.name = name;
    this.score = 0;
    this.id = id;
  }

  submitAnswer(playerGuess, question) {
    if (playerGuess === question.answer) {
      this.score += question.pointValue; 
      playerAnswer.value = '';
      document.querySelector('.player').innerText = this.score;
      domUpdates.changeScore();
    } else {
      this.score -= question.pointValue;
      document.querySelector('.player').innerText = this.score;
      domUpdates.changeScore();
      playerAnswer.value = '';
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}