function StartNewGame(){
    if (players[0].name === '' || players[1].name === ''){
        alert("please set a custom name for both players");
        return;
    }

    gameArea.style.display = 'block';
}