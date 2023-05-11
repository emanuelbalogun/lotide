
const tail = (args) => {
  if (args.length === 0 || args.length === 1) {
    return [];
  }

  return args.slice(1);
};

module.exports = tail;
