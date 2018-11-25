let numbers = [55, 67, 34, 54, 1, 23, 23, 441];

let maxNumber = Math.max(...numbers);

// reduce 

let sums = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);

// console.log(sums);

let newObject = numbers.reduce((keys, num) =>{
  keys[num] ? keys[num]++ : keys[num] = 1;
  return keys;
}, {})

console.log(newObject)

// filter and sort 

// console.log(numbers.filter(x => x > 99));
// console.log(numbers.sort((a, b) => {return b - a}));

//map

