document.getElementById("count-el").innerText=3458167

let count = 0
function increment(){
    count = count +1
    console.log("The button was clicked", count)
}

increment();













//practise


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