// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

export{ };

function changeXToY(str: string): string {
  if (str.includes('x')) {
    str = str.replace('x', 'y');
    console.log(str);
    return changeXToY(str);
  }
  return str;
}
console.log(changeXToY('xxx'));

