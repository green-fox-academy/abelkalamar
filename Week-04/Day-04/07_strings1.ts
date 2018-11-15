// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.
export{ };

function changeXToY(str: string): string {
  if (str.includes('x')) {
    return changeXToY(str.replace('x', 'y'));
  }
  return str;
}
console.log(changeXToY('xxx'));
