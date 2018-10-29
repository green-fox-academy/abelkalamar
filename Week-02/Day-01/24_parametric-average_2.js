'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Gimme a number! ", function(answer) {
    
  rl.close();
  console.log(answer);
  for (var i = 1; i <= answer; i ++){
        rl.question("Gimme the " + i + ". number!", function(firstNum) {
        console.log(firstNum);
        rl.close();
        
        });
    }
}); 

