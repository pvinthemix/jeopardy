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
  playerOneName.innerText = playerOneInput.value;
  playerTwoName.innerText = playerTwoInput.value;
  playerThreeName.innerText = playerThreeInput.value;
  startScreen.classList.add('hidden');
  populate();
};

function populate() {
  console.log(categoryTitles);
  Array.from(categoryTitles).map((title, index) => {
    var categoriesArray = Object.keys(data.categories);
    title.innerHTML = categoriesArray[index]
  console.log(categoriesArray);
  })
}