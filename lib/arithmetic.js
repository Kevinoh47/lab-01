'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(a) {
  if(!inputArrayCheck(a)) { return null; }
  let sum = a.reduce(function(accumulator, current) {
    if (!numCheck(current)) {
      return null;
    } else {
      return accumulator + current;
    }
  }, 0);
  return sum;
};

arithmetic.subtract = function(a) {
  if(!inputArrayCheck(a)) { return null; }
  let sub = a.reduce(function(accumulator, current) {
    if (!numCheck(current)) {
      return null;
    } else {
      return accumulator - current;
    }
  }); // no initialValue provided, so reduce begins executing callback at index 1 rather than 0, allowing us to subtract from the initial value.
  return sub;
};

arithmetic.multiply = function(a) {
  if(!inputArrayCheck(a)) { return null; }
  let multiplied = a.reduce(function(accumulator, current) {
    if (!numCheck(current)) {
      return null;
    } else {
      return accumulator * current;
    }
  }, 1); //accumulator needs to be 1 for multiplication
  return multiplied;
};

arithmetic.divide = function(a,b) {
  if( !numCheck(a) || !numCheck(b) || b === 0) { 
    return null; }
  return a/b;
};

// helper functions
function numCheck(current) {
  return (typeof current !== 'number' || isNaN(current)) ? false : true;
}

function inputArrayCheck(a) {
  return ( a.constructor !== Array || a.length < 2 ) ? false : true;
}



