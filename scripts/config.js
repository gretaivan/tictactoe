function openPlayerConfig (e) {
  const selectPlayerId = +e.target.dataset.playerid;
  editedPlayer = selectPlayerId;

  backdrop.style.display = 'block';
  playerConfigModal.style.display = 'block';
}

function closeConfigModal () {
  backdrop.style.display = 'none';
  playerConfigModal.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  playerFormError.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(e) {
  e.preventDefault(); 
  const formData = new FormData(e.target); 

  const enteredPlayerName = formData.get('username').trim();

  if(!enteredPlayerName) {
    e.target.firstElementChild.classList.add('error');
    playerFormError.textContent = 'Please enter a valid name!'; 
    return;
  }

  const updatePlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatePlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closeConfigModal();

}