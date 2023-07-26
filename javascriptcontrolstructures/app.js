

//FUNCTIONS WITH IF ELSE STATEMENTS


function mathfun() {
    let x = 20;
    if (x === 5) {
        console.log("We have a 5");
    } else if (x === 9) {
        console.log("We are doing pretty much better");
    } else {
        console.log(" It seems that we are fucked up");
    }
};

console.log("Good morning")
mathfun();


function threeOrSeven(num) {
    if ((num%3 ===0) || (num%7 ===0)) {
        return true
    }else {
        return false
    }
  // your code here...
}

console.log(threeOrSeven(3));   // => true
console.log(threeOrSeven(42));  // => true
console.log(threeOrSeven(8));   // => false


//LOOPS

let index = 0;

// this is the condition that will be checked every time this loop is run
while (index < 10) {
  console.log("The number is " + index);
  // this is common shorthand for index = index + 1
  index++;
}


let testString = "testing";

// We can use the testString's length as our condition!
// Since we know the testString's index starts at 0
// and our index starts at 0 we can access each letter:
for (let index = 0; index < testString.length; index += 1) {
  let letter = testString[index];
  console.log(letter);
}



function logBetween(lownum, highnum){
    for (let i = lownum; i <=highnum; i+=1){
        console.log(i)
    }
}

logBetween(2,20)

function logbetweenwhile(lownum, highnum){
    let q = lownum
    while (q <= highnum){
        console.log(q)
        q +=1
    }
}
