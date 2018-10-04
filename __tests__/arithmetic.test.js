'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');
let a = faker.random.number();
let b = faker.random.number();

describe ('Divide', () => {
  it('requires two params, both numerals', () => {
    if(b === 0) b = 47;
    let expectedNumber = a / b;
    let result = arithmetic.divide(a, b);
    expect(result).toEqual(expectedNumber);
  });

  it('does not allow just one param', () => {
    let result = arithmetic.divide(a);
    expect(result).toBeNull();
  });

  it('does not allow non-numeric values', () => {
    let result = arithmetic.divide(a, 'seven');
    expect(result).toBeNull();
  });

  it('does not allow the denominator to be 0', () => {
    let result = arithmetic.divide(a, 0);
    expect(result).toBeNull();
  });
});

describe ('Multiply', () => {
  it('requires two params, both numerals', () => {
    let expectedNumber = a * b;
    let result = arithmetic.multiply(a, b);
    expect(result).toEqual(expectedNumber);
  });

  it('does not allow just one param', () => {
    let result = arithmetic.multiply(a);
    expect(result).toBeNull();
  });

  it('does not allow non-numeric values', () => {
    let result = arithmetic.multiply(a, 'seven');
    expect(result).toBeNull();
  });
});

describe('Addition', () => {
  const inputArr = [a,b];
  it('requires an array holding at least two numbers', () => {
    let expectedNumber = a + b;
    let result = arithmetic.add(inputArr);
    expect(result).toEqual(expectedNumber);
  });

  it('does not allow just one number in the input array', () => {
    const inputArr = [a];
    let result = arithmetic.add(inputArr);
    expect(result).toBeNull();
  });

  it('does not allow non-numeric values in the input array', () => {
    const inputArr = [a,b,'0','1'];
    let result = arithmetic.add(inputArr);
    expect(result).toBeNull();
  });
});

describe('Subtraction', () => {
  const inputArr = [a,b];
  it('requires an array holding at least two numbers', () => {
    let expectedNumber = a - b;
    let result = arithmetic.subtract(inputArr);
    expect(result).toEqual(expectedNumber);
  });

  it('does not allow just one number in the input array', () => {
    const inputArr = [a];
    let result = arithmetic.subtract(inputArr);
    expect(result).toBeNull();
  });

  it('does not allow non-numeric values in the input array', () => {
    const inputArr = [a,b,'0','1'];
    let result = arithmetic.subtract(inputArr);
    expect(result).toBeNull();
  });

  it('subtracts multiple numbers correctly', () => {
    const inputArr = [a, b, b, a];
    let expectedNumber = a - b - b - a;
    let result = arithmetic.subtract(inputArr);
    expect(result).toEqual(expectedNumber);
  });
});
