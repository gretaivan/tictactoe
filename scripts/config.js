function openPlayerConfig (e) {
  const selectPlayerId = +e.target.dataset.playerid;
  editedPlayer = selectPlayerId;

  backdrop.style.display = 'block';
  playerConfigModal.style.display = 'block';
}

function cancelConfigModal () {
  backdrop.style.display = 'none';
  playerConfigModal.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  playerFormError.textContent = '';
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


  
}