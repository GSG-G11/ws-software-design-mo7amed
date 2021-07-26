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

function capitaliseObjectKeys (input) {
  const newInput = JSON.parse(JSON.stringify(input))
  for(const key in newInput){
    const newKey = key[0].toUpperCase() + key.slice(1)
    newInput[newKey] = newInput[key]
    delete newInput[key]
  }
  return newInput;
}


function capitaliseObjectValues (input) {
  const newInput = JSON.parse(JSON.stringify(input))
  for(const key in newInput){
    newInput[key] = newInput[key][0].toUpperCase() + newInput[key].slice(1)
  }
  return newInput;
}

function incrementObjectValues (input) {
  const newInput = JSON.parse(JSON.stringify(input))
  for(const key in newInput){
    newInput[key]++
  }
  return newInput;
}

function reverseObjectKeys (input) {
  const newInput = {}
  const result = Object.keys(input).map((elem) => {
    const newKey = elem.split('').reverse().join('')
    newInput[newKey] = input[elem]
  })
  return newInput;
}

// OR

function reverseObjectKeys (input) {
  const newInput = JSON.parse(JSON.stringify(input))  
  for(const key in newInput){
    const newKey = key.split('').reverse().join('')
    newInput[newKey] = newInput[key]
    delete newInput[key]
  }
  return newInput;
}

module.exports = {
  capitaliseObjectKeys,
  capitaliseObjectValues,
  incrementObjectValues,
  reverseObjectKeys,
};
