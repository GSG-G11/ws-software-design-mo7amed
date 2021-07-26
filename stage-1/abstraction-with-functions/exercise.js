/*
 * Exercise: Refactor the code!
 *
 * This file is a collection of functions you've been asked to refactor.
 *
 * The primary purpose of this exercise is to use your judgement to decide when
 * and where to introduce appropriate abstractions, and whether you can use
 * either abstractions provided by JavaScript, or write your own.
 *
 * The command
 *   npm run s1.functions
 * will run tests to ensure the functions do what they should. They should all
 * still pass when you've finished refactoring.
 *
 * Advice:
 * + Try to recognise common patterns in the code.
 * + When you have recognised a pattern, think about if you could make a
 *   function to encapsulate it, instead of repeating code in several places.
 */
'use strict';
function capitalisedAnything(input, callback) {
  const keys = Object.keys(input);

  for (var ii = 0; ii < keys.length; ii++) {
    callback(keys[ii]);
  }

}

function capitaliseObjectKeys(input) {
  const result = {};
  capitalisedAnything(input, (key) => {
    const capitalisedKey = key.slice(0, 1).toUpperCase().concat(key.slice(1));
    result[capitalisedKey] = input[key];
  })
  return result;
}



function capitaliseObjectValues(input) {
  const result = {};
  capitalisedAnything(input, (key) => {
    const value = input[key];
    const capitalisedValue = value.slice(0, 1).toUpperCase().concat(value.slice(1));
    result[key] = capitalisedValue;
  })
  return result;

}





function incrementObjectValues(input) {
  const result = {};
  capitalisedAnything(input, (key) => {
    const value = input[key];
    result[key] = value + 1;
  })
  return result;
}

function reverseObjectKeys(input) {
   const result = {};
  capitalisedAnything(input, (key) => {
    const reversedKey = key.split('').reverse().join('');
    result[reversedKey] = input[key];
  })
  return result;
}

module.exports = {
  capitaliseObjectKeys,
  capitaliseObjectValues,
  incrementObjectValues,
  reverseObjectKeys,
};