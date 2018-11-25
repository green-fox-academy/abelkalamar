import { frequentNumbers, getNumbers } from './practice03';

import { test } from 'tape';

test ('frequentNumbers[values] length', (t : any) => {
  t.equal(Object.keys(frequentNumbers(getNumbers('text.txt'))).length, 90);
  t.end();
})