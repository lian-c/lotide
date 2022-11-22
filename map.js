/* Our map function will take in two arguments:

  An array to map
  A callback function
The map function will return a new array based on the results of the callback function. */

// const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {

    results.push(callback(item));
  }
  return results;
};

module.exports = map;


// const grades = [73, 69, 3, 100, 50]; //
// const anotherGrade = [80, 52, 48, 81, 65];
// const results1 = map(grades, (x) => x > 70);
// const results2 = map(anotherGrade, (x) => x > 70);

// assertArraysEqual(results1, results2); //true grades that pass/fail if over 70

// const dinnerIng = ["ground beef", "buns", "ketchup", "mayo", "cheese", "lettuce"];
// const groceryList = ["soda", "ground beef", "buns", "ketchup", "mayo", "cheese", "lettuce", "treats"];


// const sameItem = map(dinnerIng, (x) => {
//   for (let ing of groceryList) {
//     if (x === ing) {
//       return x;
//     }
//   }
// });
// assertArraysEqual(dinnerIng, sameItem); //true map filters out the extra things that aren't needed for the dinner in grocery list

// const alphabetical = ["a", 'b', 'c', 'd', 'e', 'f'];
// const words = ['apple', 'banana', 'cat', 'donkey', 'echo', 'frog'];
// const onlyFirstLetter = map(words, word => word[0]);
// assertArraysEqual(alphabetical, onlyFirstLetter); //should be true and test the first letter of array





