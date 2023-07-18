//DOM MANIPULATION

//Reveal Event

const revealbtn = document.querySelector('.reveal-btn');

const hiddencontent = document.querySelector('.hidden-content');

function revealcontent(){
    if(hiddencontent.classList.contains('reveal-btn')){
        hiddencontent.classList.remove('reveal-btn')
    }else{
        hiddencontent.classList.add('reveal-btn')
    }
};

revealbtn.addEventListener('click', revealcontent);