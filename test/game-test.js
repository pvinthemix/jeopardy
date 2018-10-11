const chai = require('chai');
const expect = chai.expect;
const Game = require('../game.js');


describe('Box', function() {
  var game;

  beforeEach(function() {
    game = new Game();
    // runs before all tests in this block
  });

  it ('should return true', function() {

    expect(true).to.equal(true);
  });