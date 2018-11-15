// Write a recursive function that takes one parameter: n and counts down from n.

function countDown(n: number) {
  if (n === 0) return console.log(n);
  else
  console.log(n)
  countDown(n - 1);
}
countDown(10);