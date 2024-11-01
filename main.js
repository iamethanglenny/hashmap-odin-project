const HashMap = require('./hashMap');

const test = HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')


console.table(test.entries());

test.set('apple', 'green');
test.set('banana', 'brown');

console.log("Before adding 'moon':");
console.log("Entries:", test.entries());
console.log("Number of keys:", test.length());
console.log("Capacity:", test.keys().length);

test.set('moon', 'silver')

console.log("\nAfter adding 'moon':");
console.log("Entries:", test.entries());
console.log("Number of keys:", test.length());
console.log("Capacity:", test.keys().length);