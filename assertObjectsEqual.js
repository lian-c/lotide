const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if ((eqObjects(actual,expected)) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)}  is same as ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} does not equal to ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual

//test codes below
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const cd = { c: "1", d: ["2", 3] };
// const cd2 = { c: "1", d: ["2", 3, 4] };


// assertObjectsEqual(cd2,cd);
// assertObjectsEqual(ab, ba);
// assertObjectsEqual(ab, abc);