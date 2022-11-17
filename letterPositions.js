const eqArrays = function(first, sec) {
  for (let i = 0; i <= first.length; i++) {
    if (first[i] !== sec[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(first, sec) {
  if (eqArrays(first, sec) === true) {
    console.log(`✅✅✅ Assertion Passed: ${first} is same as ${sec}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${first} does not equal to ${sec}`);
  }
};

const letterPositions = function(sentence) { //function
  let result = {   //the result should be an object
  };
  for (let i = 0; i < sentence.length; i++) { //for loop to loop thru each letter
    let letter = sentence[i]; //the whole string with i being the index
    if (letter === " ") continue; //trying to skip the " " in any string
    let array = []; //creating a new array for each letter
    array.push(i); //pushes the index into an array
    if (result[letter]) {
      result[letter].push(i);
    } else {
      result[letter] = array; //add the array into each letter - add to array
    }
  } return (result);
};



console.log(letterPositions("hello")); //should output {h: [0], e:[1] , l:[2,3], o:[4]}
assertArraysEqual(letterPositions("hello").l, [2,3]);