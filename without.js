// eqArrays will compare 2 arrays and if they're all the same it'll return true
//assertArraysEqual will log if it's true or false

// const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

//assertArraysEqual([1, 2, 3], [1, 2, 3]);
//only push when it loops over all the items to remove and it does not match

const without = function (source, itemsToRemove) {
  let itemsToKeep = source
  for (let i = 0; i < itemsToRemove.length; i++) { 
    itemsToKeep = itemsToKeep.filter((item) => item !== itemsToRemove[i])

  }     return(itemsToKeep)
};

module.exports = without;
//test  below commented out for now due to index.js
// without([1, 2, 3, 1], [1, "2"]) // => [2,3]

// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
