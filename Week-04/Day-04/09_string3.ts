// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function separateWithStar(str: string): string {
  if (str.lastIndexOf('*') === str.length - 2) return str;
  else return separateWithStar(str = str.slice(0 ,str.lastIndexOf('*') + 2) + '*' + str.slice(str.lastIndexOf('*') + 2));
}
console.log(separateWithStar('Let\'s separate this content with stars.'));
