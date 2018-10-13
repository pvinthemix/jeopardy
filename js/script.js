var playerOneInput = document.querySelector('.player1-name-input');
var playerTwoInput = document.querySelector('.player2-name-input');
var playerThreeInput = document.querySelector('.player3-name-input');
var startButton = document.querySelector('.start-button');
var startScreen = document.querySelector('.start-screen');
var categoryTitles = document.querySelectorAll('.category');
var player1Display = document.querySelector('.player1-name');
var player2Display = document.querySelector('.player2-name');
var player3Display = document.querySelector('.player3-name');


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
  
  const nameDisplay1 = document.createElement('h1');
  nameDisplay1.innerHTML = `
  <h1 class="player1-name">${player1name}</h1>`;
  player1Display.append(nameDisplay1);
  
  const nameDisplay2 = document.createElement('h1');
  nameDisplay2.innerHTML = `
  <h1 class="player2-name">${player2name}</h1>`;
  player2Display.append(nameDisplay2); 
  
  const nameDisplay3 = document.createElement('h1');
  nameDisplay3.innerHTML = `
  <h1 class="player3-name">${player3name}</h1>`;
  player3Display.append(nameDisplay3);


}

