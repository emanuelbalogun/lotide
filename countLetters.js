const assertEqual = (actual, expected) => {
  let result =
    actual === expected
      ? `✅✅✅ Assertion Passed: [ ${actual}] === [ ${expected} ]`
      : `🛑🛑🛑 Assertion failed: [ ${actual}  ] !== [ ${expected} ]`;
  console.log(result);
};

const countLetters = function (arrg) {
  let result = {};
  for (const itm of arrg) {
    if (result[itm]) {
      result[itm] += 1;
    } else {
      result[itm] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, ' ': 3, n: 1 }