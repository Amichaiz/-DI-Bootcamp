// Exercise 1

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
fruits.sort();
fruits.push('Kiwi');
fruits.splice(0,1);
fruits.reverse();
console.log(fruits);


// Exercise 2

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let innerArray = moreFruits[1];
let innerItem = innerArray[1].toString();
console.log(innerItem);