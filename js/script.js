var playerOneInput = document.querySelector('.player1-name-input');
var playerTwoInput = document.querySelector('.player2-name-input');
var playerThreeInput = document.querySelector('.player3-name-input');
var startButton = document.querySelector('.start-button');
var startScreen = document.querySelector('.start-screen');
var categoryTitles = document.querySelectorAll('.category');
var playerAnswer = document.querySelector('.question-answer-input');
var submitAnswer = document.querySelector('.submit-answer-button');
var game;
var domUpdates;
var player1;

startButton.addEventListener('click', startGame)
submitAnswer.addEventListener('click', submitAnswerHandler)

function startGame() {
  player1 = new Player(playerOneInput.value, Date.now());
  const player2 = new Player(playerTwoInput.value, Date.now());
  const player3 = new Player(playerThreeInput.value, Date.now());
  startScreen.classList.add('hidden');
  game = new Game([player1, player2, player3])
  domUpdates = new DomUpdates();
  game.setCategories();
  game.setQuestions();
  domUpdates.addGameBoardListener();
  domUpdates.setPlayerNames();
  Array.from(categoryTitles).forEach((title, i) => {
    title.innerText = game.roundOneCategories[i];
  })
}

function submitAnswerHandler() {
  var currentQuestion = {
    answer: game.currentAnswer,
    pointValue: game.currentQuestionPointValue
  }
  player1.submitAnswer(playerAnswer.value, currentQuestion)
}