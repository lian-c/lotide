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
const takeUntil = function(array, callback) { //stop condition is the callback
  let result = [];
  for (let i of array) {
    if (callback(i) !== true) { //if not true because true is the stop condition
      result.push(i);
    } else {
      return result; //return the result once it hits true
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); //stop condition is when it's less than 0


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); //stop condition is when it reachs ,


assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);//should be true
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);//should be true
assertArraysEqual(results2, data2); //should be false