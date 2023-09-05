switch(prompt("What s the weather like")){
    case "rainy":
        console.log("Remember to bring an umbella");
        break;
    case "sunny":
        console.log("Dress lightly");
        break;
    case "CLoudy":
        console.log("Go outside");
        break;
    default:
        console.log("UNkown weather type!");
        break;
}

let number = 0;

while (number<=7){   
    console.log("#")
    number++
}

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
    result *= base;
    }
    return result;
};

power(3,5);