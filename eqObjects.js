const eqArrays = require('./eqArrays');

const eqObjects = function(actual, expected) {
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return false;
  }

  for (const [key, value] of Object.entries(actual)) {
    if (expected[key] !== value) {
      if (Array.isArray(expected[key]) && eqArrays(expected[key], value)) {
        return true;
      } else {
        return false;
      }
    }
  }
  //return "✅✅✅ Assertion Passed";
  return true;
};


module.exports = eqObjects;