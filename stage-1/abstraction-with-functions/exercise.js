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

function capitalise(str){
   str.slice(0, 1).toUpperCase().concat(str.slice(1));
}
function reverseStr(str){
  str.split('').reverse().join('');
}


function capitaliseObjectKeys (input) {
  
  const keys = Object.keys(input);
  const result = {};
  for (var ii = 0; ii < keys.length; ii++) {
    const capitalisedKey = capitalise(keys[ii])
    result[capitalisedKey] = input[keys[ii]];
  }

  return result;
}


function capitaliseObjectValues (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const capitalisedValue =  capitalise(input[keys[ii]])
    result[keys[ii]] = capitalisedValue;
  }

  return result;
}

function incrementObjectValues (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const value = input[keys[ii]];
    result[keys[ii]] = value + 1;
  }

  return result;
}

function reverseObjectKeys (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const reversedKey = reverseStr(keys[ii])
    result[reversedKey] = input[keys[ii]];
  }

  return result;
}

module.exports = {
  capitaliseObjectKeys,
  capitaliseObjectValues,
  incrementObjectValues,
  reverseObjectKeys,
};
