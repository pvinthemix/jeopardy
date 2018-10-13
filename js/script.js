var playerOneInput = document.querySelector('.player1-name-input');
var playerTwoInput = document.querySelector('.player2-name-input');
var playerThreeInput = document.querySelector('.player3-name-input');
var startButton = document.querySelector('.start-button');
var startScreen = document.querySelector('.start-screen');
var categoryTitles = document.querySelectorAll('.category');
var player1Display = document.querySelector('.player1-name');


startButton.addEventListener('click', startGame)



function startGame(event) {
  event.preventDefault();
  const player1name = playerOneInput.value;
  const player2name = playerTwoInput.value;
  const player3name = playerThreeInput.value;
  startScreen.classList.add('hidden');
  // const player1 = new Player();
  const game = new Game([player1name, player2name, player3name])
  game.beginGame();
  setNames();
  // domUpdates.generatePlayers([player1name, player2name, player3name])
  console.log(game)
  Array.from(categoryTitles).forEach((title, i) => {
    title.innerText = game.roundOneCategories[i]
  })

};

function setNames(event) {
  const player1name = playerOneInput.value;
  const player2name = playerTwoInput.value;
  const player3name = playerThreeInput.value;
  const nameDisplay = document.createElement('h1');
  nameDisplay.innerHTML = `<h1>${player1name}</h1>`;
  player1Display.append(nameDisplay);


}

