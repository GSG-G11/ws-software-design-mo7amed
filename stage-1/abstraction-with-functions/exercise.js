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

const fun = (input, cb) => {
  const keys = Object.keys(input),
    result = new Object();
  cb(input, result, keys);
  return result;
};

const capitaliseCharKeys = (input, result, keys) => {
  keys.forEach((element) => {
    const capitalisedKey = element
      .slice(0, 1)
      .toUpperCase()
      .concat(element.slice(1));
    result[capitalisedKey] = input[element];
  });
};
const capitaliseCharValue = (input, result, keys) => {
  keys.forEach((element) => {
    const value = input[element];
    const capitalisedValue = value
      .slice(0, 1)
      .toUpperCase()
      .concat(value.slice(1));
    result[element] = capitalisedValue;
  });
};
const incObjValue = (input, result, keys) => {
  keys.forEach((element) => {
    const value = input[element];
    result[element] = value + 1;
  });
};
const reverseKeys = (input, result, keys) => {
  keys.forEach((element) => {
    const reversedKey = element.split("").reverse().join("");
    result[reversedKey] = input[element];
  });
};

//
function capitaliseObjectKeys(input) {
  return fun(input, capitaliseCharKeys);
}

function capitaliseObjectValues(input) {
  return fun(input, capitaliseCharValue);
}
function incrementObjectValues(input) {
  return fun(input, incObjValue);
}
function reverseObjectKeys(input) {
  return fun(input, reverseKeys);
}

module.exports = {
  capitaliseObjectKeys,
  capitaliseObjectValues,
  incrementObjectValues,
  reverseObjectKeys,
};
