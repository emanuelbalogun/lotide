

const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  const results = {};
  let sentencearray = sentence.split("");
  for (let i = 0; i < sentencearray.length; i++) {
    if (sentencearray[i] === " ") continue;
    if (results[sentencearray[i]]) {
      results[sentencearray[i]].push(i);
    } else {
      results[sentencearray[i]] = [i];
    }
  }
  return results;
};

console.log(letterPositions("hello"));
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.log(eqArrays(letterPositions("hello").e, [1]));
console.log(eqArrays(letterPositions("hello").h, [0]));
console.log(eqArrays(letterPositions("hello").l, [2,3]));
console.log(eqArrays(letterPositions("hello").o, [4]));