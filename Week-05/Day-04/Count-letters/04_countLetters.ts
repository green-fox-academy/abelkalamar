export default function countLetters(sentence: string): Object {
  let dictionary = {};
  sentence.split('').forEach(e => {
    if (e !== ' '){
    dictionary[e] ? dictionary[e]++ : dictionary[e] = 1;
    }
  });
  return dictionary;
}
console.log(countLetters('apples on the tree'));
