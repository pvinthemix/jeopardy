const domUpdates = {
  setPlayerNames() {
    const playerNamesArray = game.players.forEach((player) => {
  let namesAndScore = document.createElement('h1');
  namesAndScore.innerHTML = `<div class="name-styling">
  <h1 class="name">${player}</h1>
  <h2 class="score">0</h2>
  </div>`;
  playerDisplay.append(namesAndScore);
  });
  }
}

