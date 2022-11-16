const eqArrays = function (first, sec) {
  for (let i = 0; i <= first.length; i++) {
    if (first[i] !== sec[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function (first, sec) {
  if (eqArrays(first, sec) === true) {
    console.log(`✅✅✅ Assertion Passed: ${first} is same as ${sec}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${first} does not equal to ${sec}`);
  }
};


const middle = function(array) {
  if (array.length <= 2) {
    console.log([]);
    return [];
  }
  if (array.length % 2 === 1) {
    let n = (array.length / 2);
    console.log(array.splice(n, 1));
  } else if (array.length % 2 === 0) {
    let n = ((array.length / 2) - 1);
    console.log(array.splice(n, 2));
  }
}

middle([1]) // => []
middle([1, 2])
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

