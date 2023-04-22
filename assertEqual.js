const assertEqual = (actual, expected) => {
  let result = actual === expected
    ? `✅✅✅ Assertion Passed: [ ${ actual }] === [ ${expected} ]`
    : `🛑🛑🛑 Assertion failed: [ ${actual}  ] !== [ ${expected} ]`;
  console.log(result);
};

assertEqual("Lighthouse Labs", "LighthouseLabs");
assertEqual(1, "1");
assertEqual("Emmanuel","Emmanuels");
assertEqual(18, 18);