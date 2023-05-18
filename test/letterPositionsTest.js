const letterPositions = require("../letterPositions.js");
const assert = require("chai").assert;

describe("Test the letterPostion function", () => {
  it("when check for 'e' it should return 1", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("when check for 'h' it should return 0", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });

  it("when check for 'l' it should return 2,3", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  
  it("when check for 'o' it should return 4", () => {
    assert.deepEqual(letterPositions("hello").o, [4]);
  });
});

//console.log(letterPositions("hello"));
// //assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// console.log(eqArrays(letterPositions("hello").e, [1]));
// console.log(eqArrays(letterPositions("hello").h, [0]));
// console.log(eqArrays(letterPositions("hello").l, [2,3]));
// console.log(eqArrays(letterPositions("hello").o, [4]));
