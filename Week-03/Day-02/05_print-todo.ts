'use strict';
export { };

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let secondTodo: string = ' - Download games\n'
let subTodo: string = '     - Diablo\n'

todoText = `My todo:\n ${todoText} ${secondTodo} ${subTodo}`;

//let abc: string = 'hello';

//abc = abc.padStart(5, )

console.log(todoText);