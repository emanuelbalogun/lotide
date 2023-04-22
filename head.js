const assertEqual = (actual, expected) => {
  let result =
    actual === expected
      ? `✅✅✅ Assertion Passed: [ ${actual}] === [ ${expected} ]`
      : `🛑🛑🛑 Assertion failed: [ ${actual}  ] !== [ ${expected} ]`;
  console.log(result);
};

const head = (args) => {
  if (args.length === 0) {
    return undefined;
  }

  return args[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6]), 5);
assertEqual(head([""]), 5);