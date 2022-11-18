const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, fn) {
  for (let key of Object.keys(object)) {
    if ((fn(object[key]) === true)) {
      return key;
    }
  }
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result, "noma");

const FavShows = findKey({
  "The Office": { fav: 2 },
  "Death Note": { fav: 3 },
  "Vincenzo": { fav: 1 },
  "Parks & Rec": { fav: 4 },
  "The Genius": { fav: 3 }
}, x => x.fav === 1); // => "Vincenzo"

assertEqual(FavShows, "Vincenzo");