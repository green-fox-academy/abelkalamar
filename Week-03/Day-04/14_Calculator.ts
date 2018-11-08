'use strict';
export { };

// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.

// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:

// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

// You should use the command line arguments to accept user input

// It should work like this:

// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye

const args = process.argv.splice(2); // Just a helper for you to get started

//console.log('Input params are', args);

function calculate(a: string[]) {
  if (args.length !== 3) {
    console.log('Please add 3 arguments.')
  }
  switch(a[0]) {
    case '+' || '-':
      return eval(a[1] + a[0] + a[2]);
    case 'multiply':
      return +a[1] * +a[2];
    case 'slash':
      return +a[1] / +a[2];
    case '%':
      return +a[1] % +a[2];
  }
}
console.log(calculate(args));




