const assertEqual = (actual, expected) => {
  let result = actual === expected
    ? `✅✅✅ Assertion Passed: [ ${ actual }] === [ ${expected} ]`
    : `🛑🛑🛑 Assertion failed: [ ${actual}  ] !== [ ${expected} ]`;
  console.log(result);
};

const eqObjects = function(actual, expected) {
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return  "🛑🛑🛑 Assertion failed";
  }

  for (const [key,value] of Object.entries(actual)) {
    if (expected[key] !== value) {
      return  "🛑🛑🛑 Assertion failed";
    }
  }
  return "✅✅✅ Assertion Passed";
}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log (eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject));

console.log(eqObjects(shirtObject , shirtObject));

console.log(eqObjects(anotherShirtObject , shirtObject));
//assertEqual(eqObjects(shirtObject , longSleeveShirtObject),eqObjects(shirtObject , longSleeveShirtObject));
