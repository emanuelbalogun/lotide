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

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2)
    ? `✅✅✅ Assertion Passed: [ ${arr1}] === [ ${arr2} ]`
    : `🛑🛑🛑 Assertion failed: [ ${arr1}  ] !== [ ${arr2} ]`;
  console.log(result);
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(arr,callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]),['g','c','t','m','t']);
assertArraysEqual(map(words, word => word[1]),['r','o','o','a','o']);