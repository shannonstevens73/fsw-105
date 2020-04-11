var shopper = {
    name: 'Shannon',
    age: 46,
    isHungry: true,

    person: function() {
        return this.name
    },

    groceries: ['rice', 'sugar', 'soda']

}

console.log (shopper);
console.log (shopper.person());