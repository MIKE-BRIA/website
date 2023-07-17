//DOM MANIPULATION

//EVENT LISTNERS

//element.addEventListner("click", function);  ------syntax

const buttontwo = document.querySelector('.btn-2');

function alertbtn(){
    alert("I am a beliver")
};

buttontwo.addEventListener("click", alertbtn);


//MOUSEOVER

const backgroundcolor = document.querySelector('.boxes-box-3');

function changecolor(){
    backgroundcolor.style.backgroundColor = 'lightblue'
}
backgroundcolor.addEventListener("mouseover", changecolor)