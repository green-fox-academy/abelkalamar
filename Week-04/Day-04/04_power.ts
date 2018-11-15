// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).


function powerN(base: number, n: number): number {
  if (base < 1 || n < 1) console.log('\'Base\' and \'n\' should be at least 1!')
  if (n > 2) {
    return base * powerN(base, n - 1);
  } else return base * base;
}
console.log(powerN(10, 5));