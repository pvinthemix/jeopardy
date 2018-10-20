const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
global.domUpdates = require('../js/domUpdates.js');
const Player = require('../js/player.js');
const Question = require('../js/Question.js');
const data = require('../js/data.js');

chai.spy.on(global.domUpdates, 'renderScore', () => {});
//add every domUpdates method in this fashion   Use an array with the methods inside //
  describe('Player', function() {
    var player1;
    var question;

    beforeEach(function() {
      player1 = new Player('Paul');
      question = new Question(data.clues[0]);
    });

    it('should be a function', function() {
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