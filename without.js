const assertArraysEqual = function (arr1, arr2) {
  let result = eqArrays(arr1, arr2)
    ? `✅✅✅ Assertion Passed: [ ${arr1}] === [ ${arr2} ]`
    : `🛑🛑🛑 Assertion failed: [ ${arr1}  ] !== [ ${arr2} ]`;
  console.log(result);
};

const eqArrays = function (arr1, arr2) {
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

const without = function (source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove[source[i]]) {
      result.push(source[i]);
    }
  }
  return result;
};

console.log(without([1,2,3],[2]));