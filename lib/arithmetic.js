'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(a) {
  if( a.constructor !== Array || a.length < 2 ) { return null; }
  let sum = a.reduce(function(accumulator, current) {
    if (typeof current !== 'number' || isNaN(current)) {
      return null;
    } else {
      return accumulator + current;
    }
  }, 0);
  return sum;
};

arithmetic.subtract = function(a) {
  if( a.constructor !== Array || a.length < 2 ) { return null; }
  let sub = a.reduce(function(accumulator, current) {
    if (typeof current !== 'number' || isNaN(current)) {
      return null;
    } else {
      return accumulator - current;
    }
  }); // no initialValue provided, so reduce begins executing callback at index 1 rather than 0, allowing us to subtract from the initial value.
  return sub;
};

arithmetic.multiply = function(a) {
  if( a.constructor !== Array || a.length < 2 ) { return null; }
  let multiplied = a.reduce(function(accumulator, current) {
    if (typeof current !== 'number' || isNaN(current)) {
      return null;
    } else {
      return accumulator * current;
    }
  }, 1); //accumulator needs to be 1 for multiplication
  return multiplied;
};

arithmetic.divide = function(a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' || b === 0) { return null; }
  return a/b;
};



