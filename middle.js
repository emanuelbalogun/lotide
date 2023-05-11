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

module.exports = middle;

