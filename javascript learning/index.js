let age =32;
let username = 'Mike';
let hobbies = ['sport', 'hacking', 'building', 'reading', 'cooking'];


//object

let job = {
    title: "Developer",
    place: "Nairobi",
    salary: 8070274,
};

alert(hobbies[0]);
alert(job.title);

//functions
let adultyears;

function calculateadultyears(){
   return age - 18;
};

adultyears=calculateadultyears();
alert(adultyears);

console.log(37/4);

// objects

let person = {
    name: CSSMathMax,//property

    //function we do not have the function keyword if its in a object

    greet(){
        console.log("Hello everyone")//method
    }
};

person.greet();
