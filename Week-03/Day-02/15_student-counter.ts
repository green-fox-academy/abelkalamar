'use strict';

const students: any[] = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9.5, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

function candiesOfStudents(arr: any[]) {
  for (let i: number = 0; i < arr.length; i++) {
    console.log(Object.values(arr[i])[0] + ' has ' + Object.values(arr[i])[2] + ' candies.')
  }
}
candiesOfStudents(students);

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function sumOfAges(arr: any[]) {
  let age: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (Object.values(arr[i])[2] < 5) {
      age += students[i].age;
    }
  }
  console.log('Sum of the age of people who has less then 5 candies is ' + age + '.');
}
sumOfAges(students);

// Solution with forEach: not working yet :(
/*
function sumOfAges2(arr: any[]): string {
  let age: number = 0;
  arr.forEach(function(e, i, a) {
    if(a[i][2] < 5){
      age += e.age;
    }
  });
  return `Sum of the age of people who has less then 5 candies is ${age}.`;
}
console.log(sumOfAges2(students));
*/