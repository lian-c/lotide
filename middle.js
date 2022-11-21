const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 1) {
    let n = (array.length / 2);
    return array.splice(n, 1);
  } else if (array.length % 2 === 0) {
    let n = ((array.length / 2) - 1);
    return array.splice(n, 2);
  }
}

module.exports = middle;
