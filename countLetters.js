const assertEqual = (actual, expected) => {
  let result =
    actual === expected
      ? `✅✅✅ Assertion Passed: [ ${actual}] === [ ${expected} ]`
      : `🛑🛑🛑 Assertion failed: [ ${actual}  ] !== [ ${expected} ]`;
  console.log(result);
};

const countLetters = function() {
  console.log("implementing count letter");
}

countLetters();