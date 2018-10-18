const chai = require('chai');
const expect = chai.expect;
const Game = require('../js/game.js');
const data = require('../js/data.js');


describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ('should return true', function() {

    expect(true).to.equal(true);  
  });

  it ('should set an array of categories', function() {
    game.setCategories();
    expect(game.roundOneCategories.length).to.equal(4);
    expect(game.roundTwoCategories.length).to.equal(4);
    expect(game.roundThreeCategory.length).to.equal(1);
  })
  
  it ('should set round questions into separate arrays on the game object', function() {
    game.setQuestions();
    expect(game.roundQuestions100.length).to.equal(4);
    expect(game.roundQuestions200.length).to.equal(4);
    expect(game.roundQuestions300.length).to.equal(4);
    expect(game.roundQuestions400.length).to.equal(4);
    expect(game.roundQuestions500.length).to.equal(4);
  }) 
});


