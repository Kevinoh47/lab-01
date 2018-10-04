'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');
let a = faker.random.number();
let b = faker.random.number();

describe ('Divide', () => {
  it('requires two params, both numerals', () => {
    if(b === 0) b = 47; // no dividing by zero in this test. 
    let expectedNumber = a / b;
    let result = arithmetic.divide(a, b);
    expect(result).toEqual(expectedNumber);
  });

  it('does not allow just one param', () => {
    let result = arithmetic.divide(a);
    expect(result).toBeNull();
  });

  it('does not allow non-numeric values', () => {
    let result = arithmetic.divide(a, '1');
    expect(result).toBeNull();
  });

  it('does not allow the denominator to be 0', () => {
    let result = arithmetic.divide(a, 0);
    expect(result).toBeNull();
  });
});

describe ('Multiply', () => {
  it('requires an array holding at least two numbers', () => {
    const inputArr = [a,b];
    let expectedNumber = a * b;
    let result = arithmetic.multiply(inputArr);
    expect(result).toEqual(expectedNumber);
  });

  it('does not allow just one number in the input array', () => {
    const inputArr = [a];
    let result = arithmetic.multiply(inputArr);
    expect(result).toBeNull();
  });

  it('does not allow non-numeric values in the input array', () => {
    const inputArr = [a,b,'0','1'];
    let result = arithmetic.multiply(inputArr);
    expect(result).toBeNull();
  });

  it('multiplies multiple numbers correctly', () => {
    const inputArr = [a, b, b];
    let expectedNumber = a * b * b;
    let result = arithmetic.multiply(inputArr);
    expect(result).toEqual(expectedNumber);
  });
});

describe('Addition', () => {
  it('requires an array holding at least two numbers', () => {
    const inputArr = [a,b];
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

  it('adds multiple numbers correctly', () => {
    const inputArr = [a, b, b, a];
    let expectedNumber = a + b + b + a;
    let result = arithmetic.add(inputArr);
    expect(result).toEqual(expectedNumber);
  });
});

describe('Subtraction', () => {
  it('requires an array holding at least two numbers', () => {
    const inputArr = [a,b];
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
