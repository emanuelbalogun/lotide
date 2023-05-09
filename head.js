const assertEqual = require("./assertEqual").default;


const head = (args) => {
  if (args.length === 0) {
    return undefined;
  }

  return args[0];
};

module.exports = head;