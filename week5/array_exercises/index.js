console.log("-------------------------");


// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr){
    const result = arr.filter(function(num){
        if(num >= 5){
            return num;
        }
    });
    return result;
}
console.log("filter #1 output is: ");
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));
console.log("-------------------------");


// Given an array of numbers, return a new array that only includes the even numbers.

function evenOnly(arr){
    const result = arr.filter(function(num){
        if(num % 2 == 0){
            return num;
        }
    });
    return result;
}
console.log("filter #2 output is: ");
console.log(evenOnly([3, 6, 8, 2]));
console.log("-------------------------");


// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.

function fiveCharactersOrFewerOnly(arr){
    const result = arr.filter(function(str){
        if(str.length <= 5){
            return str;
        }
    });
    return result;
}
console.log("filter #3 output is: ");
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));
console.log("-------------------------");


// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

function peopleWhoBelongToTheIlluminati(arr){
    const result = arr.filter(function(person){
        if(person.member === true){
            return person;
        }
    });
    return result;
}
console.log("filter #4 output is: ");
console.log(peopleWhoBelongToTheIlluminati([
    {name: "Angelina Jolie", member: true},
    {name: "Eric Jones", member: false},
    {name: "Paris Hilton", member: true},
    {name: "Kayne West", member: false},
    {name: "Bob Ziroll", member: true},
]));
console.log("-------------------------");



// Make a filtered list of all the people who are old enough to see The Matrix (younger than 18).
function ofAge(arr){
    const result = arr.filter(function(age){
        if(age.age >= 18){
            return age;
        }
    });
    return result;
}
console.log("filter #5 output is: ");
console.log(ofAge([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100},
]));
console.log("-------------------------");



//  Make an array of numbers that are doubles of the first array.
function doubleNumber(arr){
    const result = arr.map(function(num){
          return num * 2;
        
    });
    return result;
}
console.log("map #1 output is: ");
console.log(doubleNumber([2, 5, 100]));
console.log("-------------------------");


// Take an array of numbers and make them strings.
function stringItUp(arr){
    const result = arr.map(function(num){
          return num.toString();
        
    });
    return result;
}
console.log("map #2 output is: ");
console.log(stringItUp([2, 5, 100]));


// Capitalize each of an array of names.
console.log("-------------------------");
console.log("map #3 output is: ");
function capitalizeNames(arr){
    const result = arr.map(function(str){
        var firstLetter = str.slice(0, 1);
        var restOfName =  str.substr(1, str.length);
        return firstLetter.toUpperCase() + restOfName.toLowerCase();
        
            });
    return result;
}
console.log(capitalizeNames(["john", "JACOB", "Jingleheimer", "Schmidt"]));


// Make an array of strings of the names.
console.log("-------------------------");
console.log("map #4 output is: ");
function namesOnly(arr){
    const result = arr.map(function(str){
     return str.name;
        
            });
    return result;
}
console.log(namesOnly([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100},
]));


//  Make an array of strings of the names saying whether or not they can go to The Matrix.
console.log("-------------------------");
console.log("map #5 output is: ");
function makeStrings(arr){
    const result = arr.map(function(str){
        if(str.age >= 18) {
         return str.name + " can go to the Matrix.";
        } else {return str.name + " is under age!!"}
            });
    return result;
}
console.log(makeStrings([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100},
]));


// Make an array of the names in h1s, and the ages in h2s.
console.log("-------------------------");
console.log("map #6 output is: ");
function readyToPutInTheDOM(arr){
    const result = arr.map(function(str){
        return "<h1>" + str.name + "</h1>" + "<h2>" + str.age + "</h2>";
    });
    return result;
}
console.log(readyToPutInTheDOM([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100},
]));



// Turn an array of numbers into a total of all the numbers.
console.log("-------------------------");
console.log("reduce #1 output is: ");
function total(arr){
const result = arr.reduce(function(final, num){
     return final + num;
 
});
     return result;
}
console.log(total([1, 2, 3]));
console.log("-------------------------");


// Turn an array of numbers into a long string of all those numbers.
console.log("reduce #2 output is: ");
function StringConcat(arr){
    const result = arr.reduce(function(final, num){
        final = final + num;
        return final;

}, "");
    return result;
}
console.log(StringConcat([1, 2, 3]));



// Turn an array of voter objects into a count of how many people voted. Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.
console.log("-------------------------");
console.log("reduce #3 output is: ");

function totalVotes(arr){
const result = arr.reduce(function(final, voter){
    if(voter.voted){
        final++;
            }
    return final;    
    
}, 0)
    return result;
}

var voters = [
    {name:'Bob', age: 30, voted: true},
    {name:'Jake', age: 32, voted: true},
    {name:'Kate', age: 25, voted: false},
    {name:'Sam', age: 20, voted: false},
    {name:'Phil', age: 21, voted: true},
    {name:'Ed', age: 55, voted: true},
    {name:'Tami', age: 54, voted: true},
    {name:'Mary', age: 31, voted: false},
    {name:'Becky', age: 43, voted: false},
    {name:'Joey', age: 41, voted: true},
    {name:'Jeff', age: 30, voted: true},
    {name:'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters));



//  Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once.
console.log("-------------------------");
console.log("reduce #4 output is: ");
function shoppingSpree(arr){
const result = arr.reduce(function(final, itemCost){
    final = final + itemCost.price;
    return final;    
    
}, 0)
    return result;
}

var wishlist = [
    {title: "Tesla Model S", price: 90000},
    {title: "4 Carat Diamond Ring", price: 45000},
    {title: "Fancy Hacky Sack", price: 5},
    {title: "Gold Fidgit Spinner", price: 2000},
    {title: "A Second Tesla Model S", price: 90000},
]
console.log(shoppingSpree(wishlist));


// Given an array of arrays, flatten them into a single array. Note: Take a look at Array.concat() to help with this one
console.log("-------------------------");
console.log("reduce #5 output is: ");
function flatten(arr) {
    const result = arr.reduce(function(final, arrItem){
        return final.concat(arrItem);        
    }, []);
        return result;
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays));


// Given an array of potential voters, return an object representing the results of the vote. Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
console.log("-------------------------");
console.log("reduce #6 output is: ");

var voters = [
    {name:'Bob', age: 30, voted: true},
    {name:'Jake', age: 32, voted: true},
    {name:'Kate', age: 25, voted: false},
    {name:'Sam', age: 20, voted: false},
    {name:'Phil', age: 21, voted: true},
    {name:'Ed', age: 55, voted: true},
    {name:'Tami', age: 54, voted: true},
    {name:'Mary', age: 31, voted: false},
    {name:'Becky', age: 43, voted: false},
    {name:'Joey', age: 41, voted: true},
    {name:'Jeff', age: 30, voted: true},
    {name:'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    const result = voters.reduce(function(final, voter){
        if (voter.voted && (voter.age >= 18 && voter.age <= 25)){
            final.youngVotes++;
            final.youth++
        } else if (voter.age >= 18 && voter.age <= 25) {
            final.youth++;
        }

        if (voter.voted && (voter.age >= 26 && voter.age <= 35)){
            final.midVotes++;
            final.mids++;
        } else if (voter.age >= 26 && voter.age <= 35) {
            final.mids++;
        }

        if (voter.voted && (voter.age >= 36 && voter.age <= 55)){
            final.oldVotes++;
            final.olds++;
        } else if (voter.age >= 36 && voter.age <= 55) {
            final.olds++;
        }
        return final;
    }, { youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0});
        return result;
}
console.log(voterResults(voters));


// Sort an array from smallest number to largest.
console.log("-------------------------");
console.log("sort #1 output is: ");
function leastToGreatest(arr) {
result = arr.sort(function(a, b){
    return a - b;
})
    return result;
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));


// Sort an array from largest number to smallest.
console.log("-------------------------");
console.log("sort #2 output is: ");
function greatestToLeast(arr) {
    result = arr.sort(function(a, b){
        return b - a;
    })
        return result;
    }
    console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));


// Sort an array from shortest string to longest.
console.log("-------------------------");
console.log("sort #3 output is: ");
function lengthSort(arr) {
    result = arr.sort(function(a, b){
        return a.length - b.length;
    })
        return result;
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));


// Sort an array alphabetically.
console.log("-------------------------");
console.log("sort #4 output is: ");
function alphabetical(arr) {
    result = arr.sort(function(a, b){
        if (a < b) {
            return -1; // a comes first
          }
          if (a > b) {
            return 1; // b comes first
          }
          
    });
    return result;
}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));


// Sort the objects in the array by age.
console.log("-------------------------");
console.log("sort #5 output is: ");
function byAge(arr) {
    result = arr.sort(function(a, b){
        return a.age - b.age;
          
    });
    return result;
}
console.log(byAge([
    {name:"Quiet Samurai", age: 22},
    {name:"Arrogant Ambassador", age: 100},
    {name:"Misunderstood Observer", age: 2},
    {name:"Unlucky Swami", age: 77},

]));
console.log("-------------------------");

