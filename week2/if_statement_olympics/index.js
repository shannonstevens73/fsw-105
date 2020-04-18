// Shannon Stevens
// Preliminaries

if (5 > 3) {
    console.log("is greater than");
}

if ("cat" == 3) {
    console.log("is the length");
}

if ("cat" == "dog") {
    console.log("are the same");
}
    else {
        console.log("not the same")
    }

// Bronze Medal

var person = {
    name: "Bobby",
    age: 12
}
    
if (person.age >= 18){
    console.log("Bobby is allowed to go to the movie.")
} else {
    console.log("Bobby is not allowed to go to the movie.")
}

var person = {
    name: "Bobby",
    age: 12
}
    
if (person.name.startsWith("B")){
    console.log("Bobby is allowed to go to the movie.")
} else {
    console.log("Bobby is not allowed to go to the movie.")
}

var person = {
    name: "Bobby",
    age: 12
}
    
if (person.name.startsWith("B") && person.age >= 18){
    console.log("Bobby is allowed to go to the movie.")
} else {
    console.log("Bobby is not allowed to go to the movie.")
}

// Silver Medal

if (1 === "1"){
    console.log("strict")
} else (1 == "1") 
    console.log("loose")

if (1 <= 2 && 2 === 4) {
    console.log("yes")
}

// Gold Medal

myVar = "dog";
if(typeof myVar === 'string'){
    console.log("true")
}

let boolean = true;
if(boolean = true){
    console.log("true")
}

if (typeof myNewVariable !== 'undefined'){
    console.log("variable is defined")
}   else (typeof myNewVariable === 'undifined')
    console.log("variable is undefined")

myNewVariable = 12;
if (typeof myNewVariable !== 'undefined'){
    console.log("variable is defined")
}   else if (typeof myNewVariable === 'undifined')
    console.log("variable is undefined")

if ("s" > 12){
    console.log("s is greater than 12")
}

if ("z" > 1){
    console.log("z is greater 1")
}

if ("g" > 3){
    console.log("g is greater than 3")
}

if ("a" > 0){
    console.log("a is greater than 0")
}