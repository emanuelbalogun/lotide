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

const middle = function (arr1) {
  let result = [];
  if (arr1.length <= 2) return result;
  const index = Math.floor(arr1.length / 2);

  if (arr1.length % 2 === 0) {
    console.log("i am even");
    result = arr1.slice(index, index + 2);
  } else {
    result = arr1.slice(index, index + 1);
  }
  return result;
};

console.log(middle([1, 2, 3, 4, 5, 6, 7]));
