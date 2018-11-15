// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

let sum = 0;

function sumOfNums(num: number) {
  if (num === 0) return 0;
  sum += num;
  sumOfNums(num - 1);
  return sum;
}
console.log(sumOfNums(10));