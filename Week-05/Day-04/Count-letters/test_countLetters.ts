import countLetters from './04_countLetters';
import {test} from 'tape';

test('test on countLetters', (t: any) => {
  t.deepEqual(countLetters('apples on the tree'), countLetters('eert eht no selppa')), 
  t.end();
}) ;