const middle = require("../middle");
const assert = require("chai").assert;
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [4]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6,7,8]), [4,5]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6,7,8,9]), [5]);

describe("Testing out the lotide middle function", () => {
  it("Return the middle number of the array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });

  it("Return the middle number of the array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("Return the middle number of the array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });

  it("Return the middle number of the array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
  });
});
