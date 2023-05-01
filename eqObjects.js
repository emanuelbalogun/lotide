const assertEqual = (actual, expected) => {
  let result = actual === expected
    ? `✅✅✅ Assertion Passed: [ ${ actual }] === [ ${expected} ]`
    : `🛑🛑🛑 Assertion failed: [ ${actual}  ] !== [ ${expected} ]`;
  console.log(result);
};

const eqObjects = function(object1, object2) {

}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject);

assertEqual(eqObjects(shirtObject , longSleeveShirtObject),eqObjects(shirtObject , longSleeveShirtObject));
