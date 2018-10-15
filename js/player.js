class Player {
  constructor(name, id) {
    this.name = name;
    this.score = 0;
    this.turn = false;
    this.id = id;
  }

  submitAnswer(playerGuess, question){
    if (playerGuess === question.answer) {
      this.score += question.pointValue; 
    } else {
      this.score -= question.pointValue;
      this.turn = false;
    }
  }

  // chooseQuestionLevel()

  // submitWager(){

  // }
}

if (typeof module !== 'undefined'){
  module.exports = Player;
}

