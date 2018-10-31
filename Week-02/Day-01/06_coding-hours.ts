'use strict';
export { };

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let dailyCode: number = 6;
let weeks: number = 17;
let workdays: number = 5;

let codingHours: number = dailyCode * weeks * workdays;

console.log(`Coding hours in a semester = ${codingHours} hours.`);
console.log(`We spend ${Math.round(codingHours / (17 * 52) * 100)}% of our time with coding.`);