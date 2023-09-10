let editedPlayer = 0;

const playerConfigOverlay = document.getElementById("config-overlay");
const backDrop = document.getElementById("backdrop");
const formElement = document.querySelector('form');
const errorsOutput = document.getElementById('config-errors')

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelBtn = document.getElementById("cancel-btn");

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelBtn.addEventListener('click', closePlayerConfig);
backDrop.addEventListener('click', closePlayerConfig)

formElement.addEventListener('submit', savePlayerConfig)
