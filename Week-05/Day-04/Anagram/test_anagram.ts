import { test } from 'tape';
import areAnagrams from './03_anagram';

test('are these words anagrams?', (t: any) => {
  t.equal(areAnagrams('need', 'eedn'), true);
  t.end();
})
