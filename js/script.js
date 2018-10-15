var playerOneInput = document.querySelector('.player1-name-input');
var playerTwoInput = document.querySelector('.player2-name-input');
var playerThreeInput = document.querySelector('.player3-name-input');
var startButton = document.querySelector('.start-button');
var startScreen = document.querySelector('.start-screen');
var categoryTitles = document.querySelectorAll('.category');
var playerDisplay = document.querySelector('.bottom-names-container');
var game;

startButton.addEventListener('click', startGame)

function startGame(event) {
  const player1name = playerOneInput.value;
  const player2name = playerTwoInput.value;
  const player3name = playerThreeInput.value;
  startScreen.classList.add('hidden');
  game = new Game([player1name, player2name, player3name])
  game.setCategories();
  game.setQuestions();
  domUpdates.addGameBoardListener();
  domUpdates.setPlayerNames();
  console.log(game)
  Array.from(categoryTitles).forEach((title, i) => {
    title.innerText = game.roundOneCategories[i];
  })
};
