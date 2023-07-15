// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

let coursename = "hacking";
let courseprice = 30;
let coursegoals = ["new skills", " breaking into stuff", " solving problems"];

console.log(coursegoals);


// 2) Output ("alert") the three variable values

alert (coursename);
alert(courseprice);
alert(coursegoals);
// 3) Try "grouping" the three variables together and still output their values thereafter

let onlinecourse={
    name: "hacking",
    price:30,
    goals: ["new skills", " breaking into stuff", " solving problems"],
}

alert (onlinecourse.name);
alert (onlinecourse.price);
alert (onlinecourse.goals);
// 4) Also output the second element in your "main goals" variable

alert(onlinecourse.goals[1]);
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)


function getlistitem(array, arrayindex){
    let arrayelement = array[arrayindex];
    return arrayelement;
}

let firstgoal=getlistitem(onlinecourse.goals,1);

console.log(firstgoal);
// 6) Execute your custom command from (5) and output ("alert") the result
alert(firstgoal);