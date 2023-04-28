const assertEqual = (actual, expected) => {
  let result = actual === expected
    ? `✅✅✅ Assertion Passed: [ ${ actual }] === [ ${expected} ]`
    : `🛑🛑🛑 Assertion failed: [ ${actual}  ] !== [ ${expected} ]`;
  console.log(result);
};

// allItems: an array of strings that we need to loop through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for(let i = 0; i < allItems.length; i++) {
    console.log("i am here");
  }
  return result;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);