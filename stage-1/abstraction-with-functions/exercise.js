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

function capitaliseString(string){
  return string.slice(0, 1).toUpperCase().concat(string.slice(1));
}

function increment(n){
  return n + 1;
}

function reverseString(string){
  return string.split('').reverse().join('');
}

function loopObject(obj, callback){
  const arr = Object.keys(obj);

  for(let i = 0; i < arr.length; i++){
    callback(arr[i]);
  }
}

function capitaliseObjectKeys (input) {
  const result = {};

  loopObject(input, function(key){

    const capitalisedKey = capitaliseString(key);

    result[capitalisedKey] = input[key];

  });

  return result;
}


function capitaliseObjectValues (input) {
  const result = {};

  loopObject(input, function(key){

    const capitalisedValue = capitaliseString(input[key]);

    result[key] = capitalisedValue;

  });

  return result;
}

function incrementObjectValues (input) {
  const result = {};


  loopObject(input, function(key){

    const val = input[key];

    result[key] = increment(val);

  });

  return result;
}

function reverseObjectKeys (input) {
  const result = {};

  loopObject(input, function(key){

    const reversedKey = reverseString(key);

    result[reversedKey] = input[key];

  });

  return result;
}

module.exports = {
  capitaliseObjectKeys,
  capitaliseObjectValues,
  incrementObjectValues,
  reverseObjectKeys,
};
