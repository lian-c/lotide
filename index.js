// index.js **make sure the original file includes module.exports = 
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const without = require('./without');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const countLetters = require('./countLetters');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const map = require('./map');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const takeUntil = require('./takeUntil');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  without: without,
  countOnly: countOnly,
  letterPositions: letterPositions,
  countLetters: countLetters,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual, 
  map: map,
  findKey: findKey, 
  findKeyByValue: findKeyByValue, 
  takeUntil: takeUntil
};
