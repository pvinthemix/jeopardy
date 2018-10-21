const chai = require('chai');
const expect = chai.expect;
global.data = require('../js/data.js');
const Game = require('../js/game.js');


describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should set an array of categories', function() {
    game.setCategories();
    expect(game.roundCategories.length).to.equal(4);
  })

  it('should separate round questions into arrays on game object', function() {
    game.setQuestions();
    expect(game.roundQuestions100.length).to.equal(4);
    expect(game.roundQuestions200.length).to.equal(4);
    expect(game.roundQuestions300.length).to.equal(4);
    expect(game.roundQuestions400.length).to.equal(4);
    expect(game.roundQuestions500.length).to.equal(4);
  })
});