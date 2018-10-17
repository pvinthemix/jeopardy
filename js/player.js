class Player {
  constructor(name, id) {
    this.name = name;
    this.score = 0;
    this.turn = false;
    this.id = id;
  }

  submitAnswer(playerGuess, question){
    if (playerGuess === question.answer) {
      console.log('winner winner')
      this.score += question.pointValue; 
    } else {
      console.log('nah nah')
      this.score -= question.pointValue;
      this.turn = false;
    }
  }


}

if (typeof module !== 'undefined'){
  module.exports = Player;
}

