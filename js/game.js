class Game {
  constructor(players) {
    this.players = players;
    // this.round = round;
    // this.winner = winner;
    this.roundOneCategories = [];
    this.roundTwoCategories = [];
    this.roundThreeCategory = null;
  }

  setNames() {
    let player1 = new Player(player1name);
    let player2 = new Player(player2name);
    let player3 = new Player(player3name);

  }

  beginGame() {
    // this.setNames();
    const categories = Object.keys(data.categories);

    while (this.roundOneCategories.length < 4) {
      const index = Math.floor(Math.random() * ((categories.length - 1) - 0)) + 0;
      this.roundOneCategories.push(categories.splice(index, 1)[0]);
    }
    while (this.roundTwoCategories.length < 4) {
      const index = Math.floor(Math.random() * ((categories.length - 1) - 0)) + 0;
      this.roundTwoCategories.push(categories.splice(index, 1)[0]);
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

