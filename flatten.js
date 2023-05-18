const flatten = function(arr1) {
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

