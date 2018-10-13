class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  submitAnswer(playerGuess, question){
    if (playerGuess === question.answer) {
      this.score += question.pointValue; 
    } else {
      this.score -= question.pointValue;
    }
  }

  // chooseQuestionLevel()

  // submitWager(){

  // }
}

if (typeof module !== 'undefined'){
  module.exports = Player;
}

