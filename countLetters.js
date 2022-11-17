const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

countLetters("lighthouse in the house");