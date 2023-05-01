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

const assertArraysEqual = function (arr1, arr2) {
  let result = eqArrays(arr1, arr2)
    ? `✅✅✅ Assertion Passed: [ ${arr1}] === [ ${arr2} ]`
    : `🛑🛑🛑 Assertion failed: [ ${arr1}  ] !== [ ${arr2} ]`;
  console.log(result);
};

const flatten = function (arr1) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    
    if (Array.isArray(arr1[i])) {
      for (let ijk = 0; ijk < arr1[i].length; ijk++) {
        result.push(arr1[i][ijk]);
      }
      
    } else {
      result.push(arr1[i]);
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
