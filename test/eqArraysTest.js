// const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')
const assert = require('chai').assert


describe("## eqAssert", ()=> {
  it("[1,2,3] matches [1,2,3] should return true", ()=> {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
  });
  
  it("[1,2,3] does not match [1,2,3,4] should return false", ()=> {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3,4]), false); 

  });

});


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3",4]),false); // should be falsey