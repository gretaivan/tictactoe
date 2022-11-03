function startNewGame() {
  if(players[0].name === '' || players[1].name === '') {
    startError.innerText = "Please set custom player names for both players to start the game!";
    return; 
  }
  activePlayerField.innerText = players[activePlayer].name;
  document.getElementById("active-game").style.display ="block";

}

function switchPlayer() {
  if(activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerField.innerText = players[activePlayer].name;
}

function checkWinner(tile) {
  console.log(tile);
}

function selectTile(e) {

  console.log("active player: "  + activePlayer) 

  if(gameData[e.target.dataset.row - 1][e.target.dataset.col - 1] !== 0)  return;

  e.target.textContent = players[activePlayer].symbol;
  e.target.classList.add('disabled');

  gameData[e.target.dataset.row - 1][e.target.dataset.col - 1] = activePlayer + 1;
  console.table(gameData);
  checkWinner(e.target);
  switchPlayer();
}