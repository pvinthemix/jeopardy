const chai = require('chai');
const expect = chai.expect;
const Player = require('../js/player.js');
const Question = require('../js/Question.js');
const data = require('../js/data.js');

beforeEach(function() {
  var player1 = new Player('Paul');
  var question = new Question(data.clues[0]);
});

  describe('Player', function() {
    it('should be a function', function() {
      var player1 = new Player('Paul');
      expect(player1).isFunction().to.equal(true);
    })

    it('should increase player score if correct', function() {
      player1.submitAnswer('golf', question);
      expect(player1.score).to.equal(100);
      expect(playerAnswer.value).to.equal('');
    })

    it('should decrease player score if incorrect', function() {
      player1.submitAnswer('basketball', question);
      expect(player1.score).to.equal(-100);
      expect(playerAnswer.value).to.equal('');
  })
})