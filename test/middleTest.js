const assert = require('chai').assert
const middle = require('../middle')

// describe("# middle", ()=> {
//   it("returns 1 for [1,2,3]", () =>{
//     assert.strictEqual(head([1,2,3]),1);
//   });

//   it("returns '5' for ['5']", () =>{
//     assert.strictEqual(head(['5']),'5');
//   });

//   it("returns 5 for [5,6,7]", () =>{
//     assert.strictEqual(head([5,6,7]),5);
//   });
  
//   it("returns 'hello' for ['Hello', 'Lighthouse', 'Labs'] ", () =>{
//     assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]),"Hello");
//   });

// });


// assertArraysEqual((middle([1])),[]); // => []
// assertArraysEqual((middle([1, 2])),[]);
// assertArraysEqual((middle([1, 2, 3])),[2]); // => [2]
// assertArraysEqual((middle([1, 2, 3, 4, 5])),[3]); // => [3]
// assertArraysEqual((middle([1, 2, 3, 4])),[2,3]); // => [2, 3]
// assertArraysEqual((middle([1, 2, 3, 4, 5, 6])),[3,4]);// => [3, 4]
