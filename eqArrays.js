const eqArrays = function(first, sec) {
  for (let i = 0; i <= first.length; i++) {
    if (first[i] !== sec[i]) {
      return false;
    }
  } return true;
};
module.exports = eqArrays;