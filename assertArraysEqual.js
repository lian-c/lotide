// eqArrays will compare 2 arrays and if they're all the same it'll return true
//assertArraysEqual will log if it's true or false

const eqArrays = function(first, sec) {
  for (let i = 0; i <= first.length; i++) {
    if (first[i] !== sec[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(first, sec) {
  if (eqArrays(first,sec) === true) {
    console.log(`✅✅✅ Assertion Passed: ${first} is same as ${sec}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${first} does not equal to ${sec}`);
  }
};

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,2,3,4]);