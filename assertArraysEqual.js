// eqArrays will compare 2 arrays and if they're all the same it'll return true
//assertArraysEqual will log if it's true or false

const eqArrays = require('./eqArrays')

const assertArraysEqual = function(first, sec) {
  if (eqArrays(first,sec) === true) {
    console.log(`✅✅✅ Assertion Passed: ${first} is same as ${sec}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${first} does not equal to ${sec}`);
  }
};

module.exports = assertArraysEqual;