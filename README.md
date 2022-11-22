# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lianc/lotide`

**Require it:**

`const _ = require('@lianc/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `head()` : When entered an array, it only returns the first value within the array
*  `tail()` : when entered an array, everything except the first value is returned
*  `middle()` : When entered an array with at least 3 values, it will return the middle (odd number) or middle 2 value (even number)
*  `without()` : Accepts 2 arguments, the first array is used and will be filtering the 2nd argument. (ex. without([1,2,3],[1]) will return [2,3])
*  `countOnly()`: Accepts 2 arguments, the first one is all the items and the second one is the items you do want to count 
*  `letterPositions()`: Accepts a string and will return the 
index(es) of the letter
*  `countLetters()`: Accepts a string and will return how many time the letter occurs 
*  `eqObjects()`: Accepts 2 objects and determines if they are equal
returns true or false
*  `eqArrays()`: Accepts 2 arrays and determines if they are equal returns true or false
*  `assertArraysEqual()`: Asserts if 2 arrays are equal and returns assertion passed or failed
*  `assertEqual()`: Asserts if 2 data entered are equal and returns assertion passed or failed
*  `assertObjectsEqual()`: asserts if 2 objects are equal or not and returns assertion passed or failed
*  `map()`: takes an array and a callback function. Returns a new array with the function actioned on each element within the array
*  `findKey()`: Accepts an object and a function. It will return the first key based on the function 
*  `findKeyByValue()`: Accepts an object and when provided the value, it will return the first key which this value came from.
*  `takeUntil()`: takes an array and a callback function. returns a new array with the callback function being the stop condition. 
