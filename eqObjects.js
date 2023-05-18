const eqArrays = require('./eqArrays');

const eqObjects = function(actual, expected) {
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return false;
  }

  for (const [key, value] of Object.entries(actual)) {
    if (expected[key] !== value) {
      if (Array.isArray(expected[key]) && eqArrays(expected[key], value)) {
        return true;
      } else {
        return false;
      }
    }
  }
  //return "✅✅✅ Assertion Passed";
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
//console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
console.log(eqObjects(shirtObject, longSleeveShirtObject));

console.log(eqObjects(shirtObject, shirtObject));

console.log(eqObjects(anotherShirtObject, shirtObject));
//assertEqual(eqObjects(shirtObject , longSleeveShirtObject),eqObjects(shirtObject , longSleeveShirtObject));

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
module.exports = eqObjects;