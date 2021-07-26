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
/*
function newExercise (input , cb) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    // const capitalisedKey = keys[ii].slice(0, 1).toUpperCase().concat(keys[ii].slice(1));
    // result[capitalisedKey] = input[keys[ii]];
    cb(keys,ii)
  }

  return result;
}
//////


function capitaliseObjectKeys (input) {
  // const keys = Object.keys(input);
  // const result = {};

  // for (var ii = 0; ii < keys.length; ii++) {
  //   const capitalisedKey = keys[ii].slice(0, 1).toUpperCase().concat(keys[ii].slice(1));
  //   result[capitalisedKey] = input[keys[ii]];
  // }

  // return result;
  newExercise(input , (keys,ii) =>{
    const capitalisedKey = keys[ii].slice(0, 1).toUpperCase().concat(keys[ii].slice(1));
    result[capitalisedKey] = input[keys[ii]];
  })
  newExercise(input , (keys, ii)=>{
    const value = input[keys[ii]];
    const capitalisedValue = value.slice(0, 1).toUpperCase().concat(value.slice(1));
    result[keys[ii]] = capitalisedValue;
  })
  newExercise(input ,(keys, ii)=>{
    const value = input[keys[ii]];
    result[keys[ii]] = value + 1;
  })
  newExercise(input ,(keys, ii)=>{
    const reversedKey = keys[ii].split('').reverse().join('');
    result[reversedKey] = input[keys[ii]];;
  })
}


function capitaliseObjectValues (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const value = input[keys[ii]];
    const capitalisedValue = value.slice(0, 1).toUpperCase().concat(value.slice(1));
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
    const reversedKey = keys[ii].split('').reverse().join('');
    result[reversedKey] = input[keys[ii]];
  }

  return result;
}
*/

function newExercise(input, cb) {
  const keys = Object.keys(input);
  const result = {};
  for (var ii = 0; ii < keys.length; ii++) {
    cb(keys, ii, result);
  }
  return result;
}

function capitaliseObjectKeys (input) {
  return newExercise(input , (keys,ii, result) =>{
    const capitalisedKey = keys[ii].slice(0, 1).toUpperCase().concat(keys[ii].slice(1));
    result[capitalisedKey] = input[keys[ii]];
  })
}


function capitaliseObjectValues (input) {
  return newExercise(input , (keys,ii, result) =>{
    const value = input[keys[ii]];
    const capitalisedValue = value.slice(0, 1).toUpperCase().concat(value.slice(1));
    result[keys[ii]] = capitalisedValue;
  })
}

function incrementObjectValues (input) {
  return newExercise(input , (keys,ii, result) =>{
    const value = input[keys[ii]];
    result[keys[ii]] = value + 1;
  })

}

function reverseObjectKeys (input) {
  return newExercise(input , (keys,ii, result) =>{
    const reversedKey = keys[ii].split('').reverse().join('');
    result[reversedKey] = input[keys[ii]];
  })
}


module.exports = {
  capitaliseObjectKeys,
  capitaliseObjectValues,
  incrementObjectValues,
  reverseObjectKeys,
};
