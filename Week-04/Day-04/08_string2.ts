// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function changeXToY(str: string): string {
  if (str.includes('x')) {
    str = str.replace('x', '');
    return changeXToY(str);
  }
  return str;
}
console.log(changeXToY('afsjfdhjxkxxxxskd'));
