'use strict';
export { };

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

const divideBy10 = (num: number): number => {
  if (num === 0) {
    throw 'fail';
  }
  return 10/num;
}

try {
  console.log(divideBy10(0));
} catch(e) {
  console.log(e);
}