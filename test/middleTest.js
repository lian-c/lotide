const assert = require('chai').assert
const middle = require('../middle')

describe("# middle", ()=> {
  it("returns [] for [1]", () =>{
    assert.deepEqual(middle([1]),[]);
  });

  it("returns []] for [1,2] as it needs more than 3 items in the array", () =>{
    assert.deepEqual((middle([1, 2])),[]);
  });

  it("returns [2] for [1,2,3]", () =>{
    assert.deepEqual((middle([1, 2, 3])),[2]);
  });
  
  it("returns ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs'] ", () =>{
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]),["Lighthouse"]);
  });
  
  it("returns [3] for [1,2,3,4,5]", () =>{
    assert.deepEqual((middle([1, 2, 3, 4, 5])),[3]);
  });
  
  it("returns [2,3] for [1,2,3,4] since array is an even number", () =>{
    assert.deepEqual((middle([1, 2, 3, 4])),[2,3]);
  });
  
  it("returns [3,4] for [1,2,3,4,5,6] since array is an even number", () =>{
    assert.deepEqual((middle([1, 2, 3, 4,5,6])),[3,4]);
  });

});

