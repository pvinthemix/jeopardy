class Game {
  constructor(players) {
    this.players = players;
    // this.round = round;
    // this.winner = winner;
    this.roundOneCaterogies = [];
    this.roundTwoCaterogies = [];
    this.roundThreeCategory = null;
  }


  beginGame() {
    const categories = Object.keys(data.categories)
    console.log(categories)

    while (this.roundOneCaterogies.length < 4) {
      const index = Math.floor(Math.random() * ((categories.length - 1) - 0)) + 0
      this.roundOneCaterogies.push(categories.splice(index, 1)[0])
    }
    while (this.roundTwoCaterogies.length < 4) {
      const index = Math.floor(Math.random() * ((categories.length - 1) - 0)) + 0
      this.roundTwoCaterogies.push(categories.splice(index, 1)[0])
    }
    this.roundThreeCategory = categories[0];
  }

  resetGame() {

  }

  updateRound() {

  }

  declareWinner() {

  }

}



if (typeof module !== 'undefined') {
  module.exports = Game;
};

