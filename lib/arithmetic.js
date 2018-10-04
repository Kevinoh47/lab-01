'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(a) {
  if( a.constructor !== Array || a.length < 2 ) { return null; }
  let sum = a.reduce(function(total, current) {
    if (typeof current !== 'number' || isNaN(current)) {
      return null;
    } else {
      return total + current;
    }
  }, 0);
  return sum;
};

// arithmetic.subtract = function (a,b) {
//   if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
//   return a-b;
// };

arithmetic.subtract = function(a) {
  if( a.constructor !== Array || a.length < 2 ) { return null; }
  let sub = a.reduce(function(accumulator, current) {
    if (typeof current !== 'number' || isNaN(current)) {
      return null;
    } else {
      return accumulator - current;
    }
  }); // no initialValue provided, so reduce executes callback at index 1 rather than 0
  return sub;
};

arithmetic.multiply = function(a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  return a*b;
};

arithmetic.divide = function(a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' || b === 0) { return null; }
  return a/b;
};



