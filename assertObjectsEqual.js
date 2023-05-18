const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
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

module.exports = assertObjectsEqual;
