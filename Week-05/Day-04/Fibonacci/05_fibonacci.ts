export default function fibonacci(num: number) {

  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else if (num < 0) {
    throw 'Num is less than 0!';
  } else if (num % 1 !== 0) {
    throw 'Num must be an integer!';
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
