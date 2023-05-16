const countLetters = function(arrg) {
  let result = {};
  for (const itm of arrg) {
    if (itm === " ") continue;
    if (result[itm]) {
      result[itm] += 1;
    } else {
      result[itm] = 1;
    }
  }
  return result;
};

//console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;