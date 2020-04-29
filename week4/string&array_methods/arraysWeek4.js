
let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Remove the last item from the vegetable array.
vegetables.pop();

// Remove the first item from the fruit array.
fruit.shift();

// Find the index of "orange."
let orangeIndex = fruit.indexOf("orange");

// Add that number to the end of the fruit array.
fruit.push(orangeIndex);

// Use the length property to find the length of the vegetable array.
let vegetablesLength = vegetables.length;

// Add that number to the end of the vegetable array.
vegetables.push(vegetablesLength);

// Put the two arrays together into one array. Fruit first. Call the new Array "food".
let food = fruit.concat(vegetables);

// Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2);

// Reverse your array.
food.reverse();

//Turn the array into a string and return it.
let foodString = food.toString();
console.log(foodString);