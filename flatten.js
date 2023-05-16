//const assertArraysEqual = require('./assertArraysEqual');

const flatten = function (arr1) {
  let result = [];
  if (Array.isArray(arr1)) {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        for (let ijk = 0; ijk < arr1[i].length; ijk++) {
          result.push(arr1[i][ijk]);
        }
      } else {
        result.push(arr1[i]);
      }
    }
  } else {
    return undefined;
  }
  return result;
};

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(flatten([1, [3, 4], 5, [6,20]]));

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[ 1, 2, 3, 4, 5, 6 ]);
