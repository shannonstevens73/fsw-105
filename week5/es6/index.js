
console.log("----------Question #1----------");
//Replace all the vars with let and const

let name = "John";
let age = 101;

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        name;
        if (pets[i] === "cat") {
            name = "fluffy";
        } else {
            name = "spot";
        }
        console.log("pet name: ", name);
        pet.name = name;
        petObjects.push(pet);
    }
    return petObjects;
}       
    console.log("man name ", name);   

runForLoop(["cat", "dog"])


console.log("----------Question #2----------");
//Re-write this .map() using an arrow function:  Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

mapVegetables = arr => {
    return arr.map( carrot => {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables([carrots]));

console.log("----------Question #3----------");
// Re-write this .filter() using an arrow function

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

filterForFriendly = arr => {
    return arr.filter( person => {
        return person.friendly;
    })
}
console.log(filterForFriendly(people));

console.log("----------Question #4----------"); 
//Re-write the following functions to be arrow functions

doMathSum = (a, b) => {
    return a + b;
}

var produceProduct = (a, b) => {
    return a * b;
}
console.log(doMathSum(5, 5));
console.log(produceProduct(5, 5))

console.log("----------Question #5----------"); 
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following 
/*
Hi Kat Stark, how does it feel to be 40?
firstName should defalt to "Jane"
lastName should default to "Doe"
age should default to 100 
*/

function printString(firstName = "Jane", lastName = "Doe", age = 100){
    return "Hi " + firstName + " " + lastName + ", how does it feel to be " + age + "?";
}

console.log(printString("Kat","Stark", 40))




console.log("----------Question #6----------");
// Use template literals to build the string from #5
function printString(firstName = "Jane", lastName = "Doe", age = 100){
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
}

console.log(printString("Kat","Stark", 40))


console.log("----------Question #7----------");
// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }

];

filterForDogs = arr => {
    return arr.filter(animal => (animal.type === "dog") ? true : false
)}
console.log(filterForDogs(animals));



console.log("----------Question #8----------");
// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
// Hi Janice!
// Welcome to Hawaii.
// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.
printGreeting = (location, name) => {
    return `Hi ${name}!
    
    Welcome to ${location}.
    
    I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`;
}

console.log(printGreeting("Hawaii","Janice"))