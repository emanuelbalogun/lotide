const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const letterPosition = require('./letterPositions');
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const map = require('./map');
const without = require('./without');
const takeUntil = require('./takeUntil');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  letterPosition: letterPosition,
  findKey: findKey,
  findKeyByValue : findKeyByValue,
  flatten : flatten,
  map: map,
  without: without,
  takeUntil: takeUntil
};