const chai = require('chai');
const expect = chai.expect;
const Game = require('../js/game.js');


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
    expect(game.roundOneCategories).to.equal([])
  })
  
});


