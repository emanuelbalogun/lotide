const head = require("../head");
const assert = require("chai").assert;

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([6]), 5);
// assertEqual(head([""]), 5);

describe("Test for the head methods", () => {
  it("Should return the first number", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("Should return the first word", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("Should return false", () => {
    assert.strictEqual(head([6]), 6);
  });

  it("Should return false where array is empty", () => {
    assert.strictEqual(head([""]), "");
  });
});
