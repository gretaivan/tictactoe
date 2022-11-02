let editedPlayer = 0;

const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'O'
  },

]

const playerConfigModal = document.getElementById("config-modal");
const backdrop = document.getElementById("backdrop");
const cancelConfigModalBtn = document.getElementById("cancel-modal-btn");
const formElement = document.querySelector('form');
const playerFormError = document.getElementById('config-errors');


const editPlayerOneBtn = document.getElementById("edit-player-1");
const editPlayerTwoBtn = document.getElementById("edit-player-2");



editPlayerOneBtn.addEventListener("click", openPlayerConfig);
editPlayerTwoBtn.addEventListener("click", openPlayerConfig);

cancelConfigModalBtn.addEventListener("click", closeConfigModal);
backdrop.addEventListener("click", closeConfigModal);

formElement.addEventListener("submit", savePlayerConfig);