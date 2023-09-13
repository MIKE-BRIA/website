const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]


let editedPlayer = 0;
let activePlayer = 0;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backDrop = document.getElementById("backdrop");
const formElement = document.querySelector('form');
const errorsOutput = document.getElementById('config-errors');
const gameArea = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelBtn = document.getElementById("cancel-btn");
const startNewgame = document.getElementById('start-game-btn');
//const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelBtn.addEventListener('click', closePlayerConfig);
backDrop.addEventListener('click', closePlayerConfig)

formElement.addEventListener('submit', savePlayerConfig)
startNewgame.addEventListener('click', StartNewGame);

//for (const gameFieldElement of gameFieldElements){
    //gameFieldElement.addEventListener('click', selectGameField)
//}

gameBoardElement.addEventListener('click', selectGameField)
