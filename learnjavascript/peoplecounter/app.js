//document.getElementById("count-el").innerText=3458167

let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0
function increment(){
    count +=1
    countEl.innerText= count
}

function decrement(){
    count -=1
    countEl.innerText=count
}

let saveEl = document.getElementById("save-el")

function save(){
    let entry= count + " - "
    saveEl.textContent += entry
    countEl.innerText=0
    count =0
}









//practise not part of the main code


function log(){
    console.log(42);
};
log()

let lap1=34;
let lap2=33;
let lap3=36;

function sum(){
    let add = lap1+lap2+lap3;
    console.log(add);
};

sum()

let lapscompleted = 0;
function complete(){

    while (lapscompleted <= 3){
        console.log("Not complete yet")
        lapscompleted++
    }

};

complete()

let mess ="You got three new messages buddy";
console.log(mess)