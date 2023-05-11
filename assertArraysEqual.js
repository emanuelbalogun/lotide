const eqArrays = require("./eqArrays");
const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2)
    ? `✅✅✅ Assertion Passed: [ ${arr1}] === [ ${arr2} ]`
    : `🛑🛑🛑 Assertion failed: [ ${arr1}  ] !== [ ${arr2} ]`;
  console.log(result);
};

module.exports = assertArraysEqual;
