function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlay.style.display = 'block';
    backDrop.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlay.style.display = 'none';
    backDrop.style.display = 'none';
    formElement.firstElementChild.classList.remove('error')
    errorsOutput.textContent = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();

    if (!enteredPlayername){
        event.target.firstElementChild.classList.add('error')
        errorsOutput.textContent = 'Please enter a Valid name!';
        return;
    }

    const updatedPlayerdata= document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerdata.children[1].textContent = enteredPlayername;
}