// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function changeXToY(str: string): string {
  if (str.includes('x')) {
    return changeXToY(str.replace('x', ''));
  }
  return str;
}
console.log(changeXToY('afsjfdhjxkxxxxskd'));
