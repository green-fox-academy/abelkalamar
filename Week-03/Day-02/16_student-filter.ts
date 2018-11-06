'use strict';
export { };

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function moreThan4(arr: any[]) {
  let names: string[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i].candies > 4) {
      names.push(arr[i].name);
    }
  }
  console.log(`They've got more than 4 candies: ${names.join(' and ')}`);
}

moreThan4(students);

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function averageCandy(arr: any[]) {
  let candies: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    candies += arr[i].candies;
  }
  console.log(`They have ${candies / (arr.length - 1)} candies on average.`);
}
averageCandy(students);

