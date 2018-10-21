var playerOneInput = document.querySelector('.player1-name-input');
var playerTwoInput = document.querySelector('.player2-name-input');
var playerThreeInput = document.querySelector('.player3-name-input');
var startButton = document.querySelector('.start-button');
var startScreen = document.querySelector('.start-screen');
var categoryTitles = document.querySelectorAll('.category');
var playerAnswer = document.querySelector('.question-answer-input');
var submitAnswer = document.querySelector('.submit-answer-button');
var playerScore = document.querySelector('.player-score');
var game;
var domUpdates;
var player1;
var player2;
var player3;

startButton.addEventListener('click', startGame)
submitAnswer.addEventListener('click', submitAnswerHandler)

function startGame() {
  player1 = new Player(playerOneInput.value);
  player2 = new Player(playerTwoInput.value);
  player3 = new Player(playerThreeInput.value);
  player1.turn = true;
  startScreen.classList.add('hidden');
  game = new Game([player1, player2, player3]);
  domUpdates = new DomUpdates();
  game.setCategories();
  game.setCluesForRounds();
  domUpdates.addGameBoardListener();
  domUpdates.setPlayerNames();
  domUpdates.displayQuestions();
  console.log(game);
}

function submitAnswerHandler() {
  var currentQuestion = {
    answer: game.currentAnswer,
    pointValue: game.currentQuestionPointValue
  }
  let currentPlayer = game.players.find((player) => {
    return player.turn === true;
  })
  let playerIndex = game.players.indexOf(currentPlayer);
  currentPlayer.submitAnswer(playerAnswer, currentQuestion, playerIndex);
  
}