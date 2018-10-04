![CF](http://i.imgur.com/7v5ASc8.png) 01: Node Ecosystem
========================================================
## Exported Module Values

* Module arithmetic.js exports the following functions: 
add, subtract, multiply, divide.

* the three functions arithmetic.add, .subtract and .multiply require a single input parameter defined as an array, with two or more elements in the array, each of which must be a number. If there are more than elements in the array and all  elements are valid numbers, the operation will continue over all numbers in the input array.

* The function arithmetic.divide requires two input parameters, each of which must be a number. The second input parameter should not be 0.  If the second input parameter is 0, null will be returned.

### Task List

- [x] Initialize directory via npm init
- [x] Include scripts directives in package.json
- [x] Add faker via npm install faker
- [x] Add jest via npm install --save-dev jest
- [x] Add test files under __tests__ for modules arithmetic and greet
- [x] Export each module via module.exports = {};
- [x] Add methods to arithmetic module for multiply, divide
- [x] Add tests to arithmetic.test.js
- [x] Refactor add, subtract, and multiply to take an array input parameter
- [x] Refactor tests as necessary
- [x] Refactor methods to be more DRY and readable
- [x] Add test to greet.test.js
- [x] Add method to greet.js
- [x] Check that tests all pass and that coverage is 100%.

========================================================
========================================================
## Implementation
* Setup the package.json file to run lint checks and tests against the greet and arithmetic modules
* Create a file called `index.js` that requires both the greet and arithmetic modules.
* Use this file to "greet" and perform math operations using the imported functions from the 2 modules
* `console.log()` the return values

### Arithmetic Module

#### Write Arithmetic Module Tests
* Use the faker module to randomize input
* Test each method for proper use (invoked with number arguments)
* Test each method for improper use (invoked with one or more non-number arguments)

#### Add features to the arithmetic module
* Add support for multiply and divide (be careful to not divide by zero!)
* Refactor the add, subtract, multiply to allow for an array of params so that you can do deeper calculations

#### Refactor the arithmetic module
* DRY the code by externalizing any type checking or argument validation from your methods

---


### Greet Module
Create a NodeJS module in the `lib` directory named `greet.js`.  This module should export a single function.
* The `greet` function should have a single parameter (arity of one) that should expect a string as it's input
* The `greet` function should return the input name, concatenated with "hello ": eg. ("hello susan")
* The `greet` function should return `null` if the input is not a string

#### Greet Module Tests
* Use the faker module to randomize input
* Write a test that expects the greet module to return `null` when you supply non-string values
* Write a test the expects the greet module to return `'hello world'`
  * This should happen when invoked with `'world'` as the first argument


### Documentation
In your README.md file, describe the exported values of each module defined in your `lib` directory. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and the expected output behavior (for both valid and invalid use). Feel free to include any additional information that you would like.
