const assertArraysEqual = require("./assertArraysEqual");

const middle = function(arr1) {
  let result = [];
  if (arr1.length <= 2) return result;
  const index = Math.floor(arr1.length / 2);

  if (arr1.length % 2 === 0) {
    result = arr1.slice(index - 1, index + 1);
  } else {
    result = arr1.slice(index, index + 1);
  }
  return result;
};

console.log(middle([1, 2, 3, 4, 5, 6, 7]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6,7,8]), [4,5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6,7,8,9]), [5]);

