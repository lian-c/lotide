const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(first, sec) { //compared array
  for (let i = 0; i <= first.length; i++) {
    if (first[i] !== sec[i]) {
      return false;
    }
  } return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };
const acb = { a: "1", c: "3", b: "2" };

const dc = { d: ["2", 3], c: "1" };

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };



assertEqual(eqObjects(cd, cd2), false); // => false
assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => false
assertEqual(eqObjects(abc, acb), true); // => true
assertEqual(eqObjects(cd, dc), true); // => true