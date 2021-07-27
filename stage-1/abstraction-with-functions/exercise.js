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
"use strict";

function genericFunction(input, callback) {
  const keys = Object.keys(input);
  const result = {};
  keys.forEach(callback()); //for (var ii = 0; ii < keys.length; ii++) callback();
  return result;
}

function capitaliseObjectKeys(input) {
  return genericFunction(input, () => {
    const capitalisedKey = keys[ii]
      .slice(0, 1)
      .toUpperCase()
      .concat(keys[ii].slice(1));
    result[capitalisedKey] = input[keys[ii]];
  });
}

function capitaliseObjectValues(input) {
  return genericFunction(input, () => {
    const value = input[keys[ii]];
    const capitalisedValue = value
      .slice(0, 1)
      .toUpperCase()
      .concat(value.slice(1));
    result[keys[ii]] = capitalisedValue;
  });
}

function incrementObjectValues(input) {
  return genericFunction(input, () => {
    const value = input[keys[ii]];
    result[keys[ii]] = value + 1;
  });
}

function reverseObjectKeys(input) {
  return genericFunction(input, () => {
    const reversedKey = keys[ii].split("").reverse().join("");
    result[reversedKey] = input[keys[ii]];
  });
}

module.exports = {
  capitaliseObjectKeys,
  capitaliseObjectValues,
  incrementObjectValues,
  reverseObjectKeys,
};
