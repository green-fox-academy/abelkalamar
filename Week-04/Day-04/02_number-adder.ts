// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function sumOfNums(num: number): number {
  if (num === 0) return 0;
  return num + sumOfNums(num - 1);
}
console.log(sumOfNums(10));