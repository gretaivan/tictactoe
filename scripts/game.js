function startNewGame() {
  if(players[0].name === '' || players[1].name === '') {
    startError.innerText = "Please set custom player names for both players to start the game!";
    return; 
  }

  document.getElementById("active-game").style.display ="block";
}