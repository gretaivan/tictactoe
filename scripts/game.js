function resetGame() {
  gameOver = false; 
  activePlayer = 0; 
  currentRound = 1; 
  gameOverElement.firstElementChild.innerHTML = 'You won, <span id="winner-name"> PLAYER NAME</span>!';
  gameOverElement.style.display = 'none';


  let gameBoardTile = 0;

  for(let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      console.log(gameFieldElements)
      gameFieldElements[gameBoardTile].innerHTML = '';
      gameFieldElements[gameBoardTile].classList.remove('disabled');
      gameBoardTile++; 
    }
  }
  activePlayerField.parentElement.style.display = 'block';
}

function startNewGame() {
  if(players[0].name === '' || players[1].name === '') {
    startError.innerText = "Please set custom player names for both players to start the game!";
    return; 
  }

  resetGame(); 
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

function selectTile(e) {

  console.log("active player: "  + activePlayer) 

  if(gameData[e.target.dataset.row - 1][e.target.dataset.col - 1] !== 0 || gameOver === true)  return;

  e.target.textContent = players[activePlayer].symbol;
  e.target.classList.add('disabled');

  gameData[e.target.dataset.row - 1][e.target.dataset.col - 1] = activePlayer + 1;

  let winnerId = checkForWinner();

  if (winnerId !== 0) {
    endGame(winnerId); 
  }

  currentRound++; 
  switchPlayer();
}

function checkForWinner() {
  //check rows
  for(let i = 0; i < gameData.length; i++){
    if (
      gameData[i][0] > 0 && 
      gameData[i][0] === gameData[i][1] && 
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0]; 
    }
  }

  // check columns
  for(let i = 0; i < gameData.length; i++){
    if (
      gameData[0][i] > 0 && 
      gameData[0][i] === gameData[1][i] && 
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i]; 
    }
  }

  //check top left to bottom right
  if(
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] && 
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0]
  }

   //check top right to bottom left
  if(
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] && 
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2]
  }

  //return draw
  if(currentRound === 9){
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  gameOver = true;
  activePlayerField.parentElement.style.display = 'none';
  gameOverElement.style.display = 'block';

  if(winnerId > 0) {
    gameOverElement.firstElementChild.firstElementChild.textContent = players[winnerId - 1].name;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!"; 
  }
  

}
