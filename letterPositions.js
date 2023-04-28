const assertEqual = (actual, expected) => {
  let result = actual === expected
    ? `✅✅✅ Assertion Passed: [ ${ actual }] === [ ${expected} ]`
    : `🛑🛑🛑 Assertion failed: [ ${actual}  ] !== [ ${expected} ]`;
  console.log(result);
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};

