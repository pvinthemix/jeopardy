class Game {
  constructor(players) {
    this.players = players;
    this.roundClues = [];
    this.currentAnswer = null;
    this.currentQuestionPointValue = null;
    this.roundCategories = [];
    this.round = 1;
  }

  setCategories() {
    const categories = Object.entries(data.categories);


    while (this.roundCategories.length < 4) {
      const index = Math.floor(Math.random() * ((categories.length - 1) - 0));
      this.roundCategories.push({name: categories[index][0], categoryId: categories[index][1]});
      categories.splice(index, 1);
    }
  }

  setCluesForRounds() {
    this.roundCategories.forEach((category) => {
      const categoryClues = data.clues.filter((clue) => {
        return clue.categoryId === category.categoryId;
      })
      this.roundClues.push(categoryClues);
    });
  }

  changePlayer() {
    let currentPlayer = this.players.find((player) => {
      return player.turn === true;
    })
    currentPlayer.toggleTurn();
    let playerIndex = this.players.indexOf(currentPlayer);
    if (playerIndex === 2) {
      playerIndex = -1;
    }
    let nextPlayer = this.players[playerIndex + 1];
    nextPlayer.toggleTurn();
  }
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}