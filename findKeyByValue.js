// const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) { // we are entering the object and value to obtain the key
  for (let key of Object.keys(object)) {  //Object.keys give you an array of the keys in the object,the for..of loop gets the individual key
    if (object[key] === value) { //object[key] will give the value so object["comedy"] would be "Brooklyn Nine-Nine" and making sure it is equal
      console.log(key);
      return key;
    }
  }
};

module.exports = findKeyByValue;
//test code
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");
// findKeyByValue(bestTVShowsByGenre, "The Wire");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);