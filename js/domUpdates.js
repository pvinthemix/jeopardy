const domUpdates = {
  setPlayerNames() {
    const playerNamesArray = game.players.forEach((player) => {
      let namesAndScore = document.createElement('h1');
      namesAndScore.innerHTML = `<div class="name-styling">
      <h1 class="name">${player}</h1>
      <h2 class="score ${player}">0</h2>
      </div>`;
      playerDisplay.append(namesAndScore);
    });
  },

  addGameBoardListener() {
    function playerQuestionSelection(event) {
    let categoryIndex = event.target.classList[1];
      switch (event.target.classList[0]) {
        case 'question100':
          console.log(game.roundQuestions100[categoryIndex]);
          break;
        case 'question200':
          console.log(game.roundQuestions200[categoryIndex]);
          break;
        case 'question300':
          console.log(game.roundQuestions300[categoryIndex]);
          break;
        case 'question400':
          console.log(game.roundQuestions400[categoryIndex]);
          break;
        case 'question500':
          console.log(game.roundQuestions500[categoryIndex]);
          break;

      }
    }


    let gameTable = document.querySelector('.game-question-table');
    gameTable.addEventListener('click', playerQuestionSelection);
  }

}

// can we add different classes using interpolation to update the score of each player after their turn without changing every player?//

