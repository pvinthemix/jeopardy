var playerOneInput = document.querySelector('.player1-name-input');
var playerTwoInput = document.querySelector('.player2-name-input');
var playerThreeInput = document.querySelector('.player3-name-input');
var startButton = document.querySelector('.start-button');
var playerOneName = document.querySelector('.player1-name');
var playerTwoName = document.querySelector('.player2-name');
var playerThreeName = document.querySelector('.player3-name');
var startScreen = document.querySelector('.start-screen');
var categoryTitles = document.querySelectorAll('.dan');


startButton.addEventListener('click', startGame)



function startGame(event) {
  event.preventDefault();
  const player1name = playerOneInput.value;
  const player2name = playerTwoInput.value;
  const player3name = playerThreeInput.value;
  startScreen.classList.add('hidden');
  const game = new Game([player1name, player2name, player3name])
  game.beginGame()
  console.log(game)
  Array.from(categoryTitles).forEach((title, i) => {
    title.innerText = game.roundOneCaterogies[i]
  })
  
};



