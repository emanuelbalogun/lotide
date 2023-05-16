const tail = require("../tail.js");
const assert = require("chai").assert;

let result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

describe("Test the tail function",()=>{
  it("should return Lighthouse",()=>{
    assert.equal(result[0],"Lighthouse");
  });
  
  it("should return Labs",()=>{
    assert.equal(result[1],"Labs");
  });
});
