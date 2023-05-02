const eqObjects = function (actual, expected) {
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return false;
  }

  for (const [key, value] of Object.entries(actual)) {
    if (expected[key] !== value) {
      if (Array.isArray(expected[key]) && eqArrays(expected[key], value)) {
        return true;
      } else if (
        Array.isArray(expected[key]) &&
        !eqArrays(expected[key], value)
      ) {
        return false;
      } else {
        return false;
      }
    }
  }
  //return "✅✅✅ Assertion Passed";
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  let result = eqObjects(actual, expected)
    ? `✅✅✅ Assertion Passed: [ ${inspect(actual)} === [ ${inspect(
        expected
      )} ]`
    : `🛑🛑🛑 Assertion failed: [ ${inspect(actual)}  ] !== [ ${inspect(
        expected
      )} ]`;
  console.log(result);
};

assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" });
