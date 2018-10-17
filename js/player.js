class Player {
  constructor(name, id) {
    this.name = name;
    this.score = 0;
    // this.turn = false;
    this.id = id;
  }

  submitAnswer(playerGuess, question) {
    if (playerGuess === question.answer) {
      this.score += question.pointValue; 
      playerAnswer.value = '';
    } else {
      this.score -= question.pointValue;
      // this.turn = false;
      playerAnswer.value = '';
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}