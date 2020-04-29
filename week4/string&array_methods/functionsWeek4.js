// Make a function that will return any given string into all caps followed by the same string all lowercase.
function nameUpperLower(str) {
    let strUpper = str.toUpperCase();
    let strLower = str.toLowerCase();
    return "Your word in Upper then Lower case: " + strUpper.concat(strLower)
}
console.log("----------");
console.log(nameUpperLower("hello"));
console.log("----------");

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
function halfLength(str) {
    let middleOfString = Math.floor(str.length/2);
    return "The middle point of the string is: " + middleOfString;
}
console.log(halfLength("Shannon"));
console.log("----------");

// Make a function that uses slice() and the other functions you've written to return the first half of the string.
function returnFirstHalf(str) {
    let firstHalf = str.slice(0, Math.floor(str.length/2));
    return "The first half of the string is: " + firstHalf;
}
console.log(returnFirstHalf("Schoolwork"));
console.log("----------");

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
function upperLowerEvenOdd(str) {
    if (str % 2 !== 0) {
        let firstHalf = str.slice(0, Math.floor(str.length/2));
        let secondHalf = str.substr(str.length/2, str.length);
        return firstHalf.toUpperCase() + secondHalf.toLowerCase();
    } else if (str % 2 === 0){
        let firstHalf = str.slice(0, str.length/2);
        let secondHalf = str.substr(str.length/2, str.length);
        return firstHalf.toUpperCase() + secondHalf.toLowerCase();
    }
}
    console.log(upperLowerEvenOdd("evenWord"));
    console.log(upperLowerEvenOdd("oddWord"));
    console.log("----------");
   

    
