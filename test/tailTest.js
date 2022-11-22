const tail = require('../tail');
const assert= require('chai').assert


describe("# tail", ()=> {
  it("returns ['Lighthouse', 'Labs']for ['Yo Yo','Lighthouse', 'Labs']", () =>{
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  });

  it("returns '5' for ['5']", () =>{
    assert.deepEqual(tail(['5','5']),['5']);
  });


});