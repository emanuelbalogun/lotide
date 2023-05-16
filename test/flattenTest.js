const flatten = require("../flatten");
const assert = require("chai").assert;

describe("Test the flatten function", () => {
  it("when this array is supplied [1, 2, [3, 4], 5, [6]] is should return [ 1, 2, 3, 4, 5, 6 ]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});
