const countLetters = function(strings) {
  let results = {};
  for (let str of strings) {
    if (str === " ") continue; // skips if there's a space
    if (results[str]) {
      results[str] += 1;
    } else {
      results[str] = 1;
    }

  } console.log(results);

};

module.exports = countLetters

//test code
// countLetters("lighthouse in the house");