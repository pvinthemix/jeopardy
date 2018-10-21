class DomUpdates {
  constructor() {
    this.answer = '';
  }

  setPlayerNames() {
    game.players.forEach((player, i) => {
      let namesAndScore = document.createElement('div');
      namesAndScore.innerHTML = `<div class="name-styling">
        <h2>Player Name: ${player.name}</h2> 
        <h2>Score: <span id="${player.name}-score" class='player-score'>0</span></h2></div>`;
      const playerDisplay = document.querySelector('.bottom-names-container');
      playerDisplay.append(namesAndScore);
    });
  }
  displayQuestions() {
    Array.from(categoryTitles).forEach((title, i) => {
      title.innerText = game.roundCategories[i].name;
    })
  }

  addGameBoardListener() {
    var questionDisplay = document.querySelector('.question-display');
    function playerQuestionSelection(event) {
      let questionBeingAsked;
      let categoryIndex = event.target.classList[1];
      switch (event.target.classList[0]) {
      case 'question100':
        questionBeingAsked = game.roundClues[categoryIndex][0];
        console.log(game.roundClues[categoryIndex][0])
        break;
      case 'question200':
        questionBeingAsked = game.roundClues[categoryIndex][1];
        console.log(game.roundClues[categoryIndex][1])
        break;
      case 'question300':
        questionBeingAsked = game.roundClues[categoryIndex][2];
        console.log(game.roundClues[categoryIndex][2])
        break;
      case 'question400':
        questionBeingAsked = game.roundClues[categoryIndex][3];
        console.log(game.roundClues[categoryIndex][3])
        break;
      case 'question500':
        questionBeingAsked = game.roundClues[categoryIndex][4];
        console.log(game.roundClues[categoryIndex][4])
        break;
      }
      questionDisplay.innerText = questionBeingAsked.question;
      game.currentQuestion = questionBeingAsked.question;
      game.currentAnswer = questionBeingAsked.answer;
      game.currentQuestionPointValue = questionBeingAsked.pointValue;
    }
    let gameTable = document.querySelector('.game-question-table');
    gameTable.addEventListener('click', playerQuestionSelection);
  }

  renderScore(player, score) {
    document.getElementById(`${player}-score`).innerText = score;
  }
}


