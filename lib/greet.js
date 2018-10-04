'use strict';

let greet = module.exports = {};

greet.greet = function(name) {
  if (typeof name !== 'string') {
    return null;
  } else {
    return `hello ${name}`;
  }
};

