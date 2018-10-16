const domUpdates = {
  setPlayerNames() {
    const playerNamesArray = game.players.forEach((player) => {
      let namesAndScore = document.createElement('div');
      namesAndScore.innerHTML = `<h2>Player Name: ${player.name}</h2> 
            <h2>Score: 0</h2>`;
      playerDisplay.append(namesAndScore);
    });
  },

  addGameBoardListener() {
    function playerQuestionSelection(event) {
      let question;
    let categoryIndex = event.target.classList[1];
      switch (event.target.classList[0]) {
        case 'question100':
          question = game.roundQuestions100[categoryIndex];
          break;
        case 'question200':
          question = game.roundQuestions200[categoryIndex];
          break;
        case 'question300':
          question = game.roundQuestions300[categoryIndex];
          break;
        case 'question400':
          question = game.roundQuestions400[categoryIndex];
          break;
        case 'question500':
          question = game.roundQuestions500[categoryIndex];
          break;
      }

      questionDisplay.innerText = question.question;


    }

    let gameTable = document.querySelector('.game-question-table');
    gameTable.addEventListener('click', playerQuestionSelection);
  }

}

// can we add different classes using interpolation to update the score of each player after their turn without changing every player?//

