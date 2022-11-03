function startNewGame() {
  if(players[0].name === '' || players[1].name === '') {
    startError.innerText = "Please set custom player names for both players to start the game!";
    return; 
  }

  document.getElementById("active-game").style.display ="block";
}

function switchPlayer() {
  if(activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function selectTile(e) {
  e.target.textContent = players[activePlayer].symbol;
  e.target.classList.add('disabled');
  switchPlayer();
}