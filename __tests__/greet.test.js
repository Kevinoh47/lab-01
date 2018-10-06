'use strict';

const greet = require('../lib/greet.js');
const faker = require('faker');

let name = faker.name.firstName();

describe('Greet', () => {
  it('can output hello world correctly', () => {
    let result = greet.greet('world');
    expect(result).toEqual(`hello world`);
  });

  it('can output any valid input string', () => {
    let result = greet.greet(name);
    expect(result).toEqual(`hello ${name}`);
  });

  it('requires the input to be a string', () => {
    let badTypeName = {name: name};
    let result = greet.greet(badTypeName);
    expect(result).toBeNull();
  });

  it('an empty string returns hello', () => {
    let name = '';
    let result = greet.greet(name);
    expect(result).toEqual(`hello ${name}`);
  });
});