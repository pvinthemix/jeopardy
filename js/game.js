class Game {
  constructor(players) {
    this.players = players;
    this.roundOneCategories = [];
    this.roundTwoCategories = [];
    this.roundThreeCategory = null;
    this.round = 1;
  }

  instantiatePlayers() {
  
  }

  beginGame() {
    const categories = Object.keys(data.categories);

    while (this.roundOneCategories.length < 4) {
      const index = Math.floor(Math.random() * ((categories.length - 1) - 0)) + 0;
      this.roundOneCategories.push(categories.splice(index, 1)[0]);
    }
    while (this.roundTwoCategories.length < 4) {
      const index = Math.floor(Math.random() * ((categories.length - 1) - 0)) + 0;
      this.roundTwoCategories.push(categories.splice(index, 1)[0]);
    }
    this.roundThreeCategory.push(categories[0]);
  }

  setQuestions() {
    let categoryIdArray;

    if (this.round === 1) { 
      categoryIdArray = this.roundOneCategories.map((category) => {
        return data.categories[category]
      });
      // return categoryIdArray;
    } else if (this.round === 2) {
      categoryIdArray = this.roundTwoCategories.map((category) => {
        return data.categories[category]
      });
      // return categoryIdArray;
    } else {
      categoryIdArray = this.roundThreeCategory.map((category) => {
        return data.categories[category]
      });
      // return categoryIdArray;
    }
    
    this.roundQuestions100 = this.roundQuestions(100, categoryIdArray);
    this.roundQuestions200 = this.roundQuestions(200, categoryIdArray);
    this.roundQuestions300 = this.roundQuestions(300, categoryIdArray);
    this.roundQuestions400 = this.roundQuestions(400, categoryIdArray);
    this.roundQuestions500 = this.roundQuestions(500, categoryIdArray);
    // this.questions = [...this.roundQuestions100, ...this.roundQuestions200, ...this.roundQuestions300, ...this.roundQuestions400, ...this.roundQuestions500];
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

