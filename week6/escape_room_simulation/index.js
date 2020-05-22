// Escape Room Simulation
var readlineSync = require('readline-sync');

// Get Player Name
const name = readlineSync.question("What is your name? ");
console.log(name + ", you are in a locked room. You must escape!");
var hasKey = false;

// Loop for user input
do {       
    var userChoice = readlineSync.questionInt("What do you want to do, " + name + "?" + "\n 1 Put hand in hole \n 2 Find the key \n 3 Open the door \n 4 Quit ");

    if (userChoice === 1) {
        console.log(name + ", You DIED!!!!! \nGAME OVER");
    } else if (userChoice === 2  && hasKey === true){
        console.log(name + ", You already have the key.")
    } else if (userChoice === 2) { 
        hasKey = true;
        console.log(name + ", You found the KEY!!!") 
    } else if (userChoice === 3 && hasKey === true){
        console.log(name + ", You WON!! You have escaped!!!!");
    } else if (userChoice === 3){
            console.log(name + ", You don't have the key.");
    } else if (userChoice === 4) {
        console.log("Thank you for playing ESCAPE ROOM!!!");
    }}
    while (userChoice === 2 || userChoice === 3 && hasKey === false)   