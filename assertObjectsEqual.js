

const eqArrays = function(first, sec) { //compared array
  for (let i = 0; i <= first.length; i++) {
    if (first[i] !== sec[i]) {
      return false;
    }
  } return true;
};

const eqObjects = function(first, second) {
  let firstObject = Object.keys(first); //array of the keys for first object []
  let secObject = Object.keys(second); //array of the keys for second object []
  if (firstObject.length !== secObject.length) { //if first and second object array diff length  return false
    return false;
  }
  for (let key of firstObject) { //first for loop into the object 1 grabbing the keys so like a and b
    let value1 = first[key];  //this is the value for first[a]
    let value2 = second[key]; //value for second[a]
    if (Array.isArray(value1) && Array.isArray(value2)) { //checks if array is true then it will compare
      return (eqArrays(value1, value2));

    }
    if (value1 !== value2 && Array.isArray(value1) !== true) {
      return false;
    }
  } return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if ((eqObjects(actual,expected)) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)}  is same as ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} does not equal to ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };


assertObjectsEqual(cd2,cd);
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);