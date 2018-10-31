'use strict';
export { };

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ['koal', 'pand', 'zebr'];

// Solution with '.map':
/*
let aanimals = animals.map(function (e) {
  return `${e}a`;
})

console.log(aanimals);
*/

// Solution with '.forEach':

animals.forEach((element, index, array) => {
  array[index] = `${element}a`;
})

console.log(animals);