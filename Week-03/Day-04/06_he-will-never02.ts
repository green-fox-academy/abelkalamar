'use strict';
export { };

// Things are a little bit messed up
// Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
// Assemble the fragments into the out variable

let out: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];

let hashmap = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};

//console.log(Object.values(hashmap));

const decode = (arr: number[], obj: any): string => {
  let keys: string[] = Object.keys(obj);
  let str: string[] = Object.values(obj);
  let message: string = '';
  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = 0; j < keys.length; j++) {
      if (+keys[j] === arr[i]) {
        message += str[j].toString();
      }
    }
  }
  return message;
}

console.log(decode(notSoCrypticMessage, hashmap));


/*
notSoCrypticMessage.forEach((element) => { out += hashmap[element] });


console.log( out);*/
