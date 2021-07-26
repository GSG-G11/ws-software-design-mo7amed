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

const genericFunction = (input,callback) => {
  const keys = Object.keys(input);
  const result = {};
  callback(keys,result,input);
  return result
}

function capitalisedKey(keys,result,input){
  keys.forEach((key) => {
    const capitalisedKey =key.slice(0, 1).toUpperCase().concat(key.slice(1));
    result[capitalisedKey] =  input[key];
  })
}

function capitalisedValues (keys,result,input) {
  keys.forEach((key) => {
    const value = input[key];
    const capitalisedValue = value.slice(0, 1).toUpperCase().concat(value.slice(1));
    result[key] = capitalisedValue;
  })
}

function incrementValues (keys,result,input) {
  keys.forEach((key)=> {
    const value = input[key];
    result[key] = value + 1;
  }) 
}

function reverseKeys (keys,result,input) {
  keys.forEach((key) => {
    const reversedKey = key.split('').reverse().join('');
    result[reversedKey] = input[key];
  })
}

function capitaliseObjectKeys (input) {
  return genericFunction(input,capitalisedKey)
}
function capitaliseObjectValues (input) {
  return genericFunction(input,capitalisedValues)
}
function incrementObjectValues (input) {
  return genericFunction(input,incrementValues)
}
function reverseObjectKeys (input) {
  return genericFunction(input,reverseKeys)
}

module.exports = {
  capitaliseObjectKeys,
  capitaliseObjectValues,
  incrementObjectValues,
  reverseObjectKeys,
};
