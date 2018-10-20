class DomUpdates {
  constructor() {
    this.answer = '';
  }

  setPlayerNames() {
    game.players.forEach((player, i) => {
      let namesAndScore = document.createElement('div');
      namesAndScore.innerHTML = `<div class="name-styling">
        <h2>Player Name: ${player.name}</h2> 
        <h2>Score: <span id="${i}" class='player-score'>0</span></h2></div>`;
      const playerDisplay = document.querySelector('.bottom-names-container');
      playerDisplay.append(namesAndScore);
    });
  }

  addGameBoardListener() {
    var questionDisplay = document.querySelector('.question-display');
    function playerQuestionSelection(event) {
      let questionBeingAsked;
      let categoryIndex = event.target.classList[1];
      switch (event.target.classList[0]) {
      case 'question100':
        questionBeingAsked = game.roundQuestions100[categoryIndex];
        break;
      case 'question200':
        questionBeingAsked = game.roundQuestions200[categoryIndex];
        break;
      case 'question300':
        questionBeingAsked = game.roundQuestions300[categoryIndex];
        break;
      case 'question400':
        questionBeingAsked = game.roundQuestions400[categoryIndex];
        break;
      case 'question500':
        questionBeingAsked = game.roundQuestions500[categoryIndex];
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

  renderScore(score) {
    document.getElementById(i).innerText = score;
  }
}


