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
// function to convert first letter of each word to upper case
function capitaliseFirstLetter(value) {
  return value.slice(0, 1).toUpperCase().concat(value.slice(1));
}
// capitalise Object  for key or value 
function capitaliseObject(which) {
  return (input) => {
    const keys = Object.keys(input);
    const result = {};
    if (which === 'keys') {
      for (var ii = 0; ii < keys.length; ii++) {
        const capitalisedKey = capitaliseFirstLetter(keys[ii]);
        result[capitalisedKey] = input[keys[ii]];
      }
    } else {
      for (var ii = 0; ii < keys.length; ii++) {
        const value = input[keys[ii]];
        const capitalisedValue = capitaliseFirstLetter(value);
        result[keys[ii]] = capitalisedValue;
      }
    }
    return result;
  }
}

const capitaliseObjectKeys = capitaliseObject('keys');
const capitaliseObjectValues = capitaliseObject('values');

// end 

function incrementObjectValues(input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const value = input[keys[ii]];
    result[keys[ii]] = value + 1;
  }

  return result;
}

function reverseObjectKeys(input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const reversedKey = keys[ii].split('').reverse().join('');
    result[reversedKey] = input[keys[ii]];
  }

  return result;
}