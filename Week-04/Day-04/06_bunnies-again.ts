// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnyEars(numOfBunnies: number) {
  if (numOfBunnies <= 1) return 2;
  else if (numOfBunnies % 2 === 1) {
  return 2 + bunnyEars(numOfBunnies - 1);
  } else return 3 + bunnyEars(numOfBunnies - 1);
}
console.log('Number of ears:', bunnyEars(5));