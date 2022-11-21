const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual([1,2,3],[1,2,3]); //should be true
assertArraysEqual([1,2,3],[1,2,3,4]);//should be falsey