// Create a recursive function called `refactorio`
// that returns it's input's factorial

function refactorio(num: number) {
  if (num === 0) return 1;
  return num * refactorio(num -1); 
}
console.log(refactorio(5));

