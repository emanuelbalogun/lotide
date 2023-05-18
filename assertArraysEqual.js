const eqArrays = require("./eqArrays");
const assertArraysEqual = function(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    let result = eqArrays(arr1, arr2)
      ? `✅✅✅ Assertion Passed: [ ${arr1}] === [ ${arr2} ]`
      : `🛑🛑🛑 Assertion failed: [ ${arr1}  ] !== [ ${arr2} ]`;
    console.log(result);
  } else {
    return undefined;
  }
};

module.exports = assertArraysEqual;
