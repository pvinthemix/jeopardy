const chai = require('chai');
const expect = chai.expect;
const Player = require('../js/player.js');
const Question = require('../js/Question.js');
const data = require('../js/data.js');


describe('Player', function() {
  var player1;
  var question;

  beforeEach(function() {
    player1 = new Player('Paul');
    question = new Question(data.clues[0])
  });


  it('should increase player score if correct', function() {
    player1.submitAnswer('golf', question);
    expect(player1.score).to.equal(100)
  })


  it('should decrease player score if incorrect', function() {
    player1.submitAnswer('basketball', question);
    expect(player1.score).to.equal(-100)
    expect(player1.turn).to.equal(false)
  })



})