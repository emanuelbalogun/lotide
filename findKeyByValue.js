const findKeyByValue = function(searchedobject, searchvalue) {
  const keys = Object.keys(searchedobject);

  for (let lt of keys) {
    if (searchedobject[lt] === searchvalue) {
      return lt;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;