const findKey = function(obj, callback) {
  for (let [key, value] of Object.entries(obj)) {
    if (callback(value)) return key;
  }
};

module.export = findKey;