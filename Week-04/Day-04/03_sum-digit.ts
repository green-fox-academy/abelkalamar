// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).


let sum: number = 0;
function sumDigits(num: number): number {
  if (num / 10 > 10) {
    sum += (num % 10);
    sumDigits(Math.floor(num / 10));
    return sum
  } else {
    return sum += (Math.floor((num / 10) + (num % 10)));
  }
}
console.log(sumDigits(109987));

