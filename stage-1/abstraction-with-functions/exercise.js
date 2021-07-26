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
const genericKeys = (input, func) => {
    return Object.keys(input).
    map((i) => {
        return func(i);
    });
}
const genericVal = (input, func) => {
    const keys = Object.keys(input);
    return keys.
    map((i) => {
        return func(keys[i]);
    });
}
const capatlise = (str) => {
    return str.slice(0, 1).toUpperCase().concat(str.slice(1))
}
const capatliseValues = (str) => {
    return str.slice(0, 1).toUpperCase().concat(str.slice(1));
}
const increment = (n) => {
    return n + 1
}
const reverseStr = (str) => {
    return str.split('').reverse().join('');
}

const capitaliseObjectKeys = (input) => {
    return genericKeys(input, capatlise);
}

const capitaliseObjectValues = (input) => {
    return genericVal(input, capatliseValues);
}

const incrementObjectValues = (input) => {
    return genericVal(input, increment);
}

const reverseObjectKeys = (input) => {
    return genericKeys(input, reverseStr);

}

module.exports = {
    capitaliseObjectKeys,
    capitaliseObjectValues,
    incrementObjectValues,
    reverseObjectKeys,
};
