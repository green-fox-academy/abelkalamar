import { test } from 'tape';
import {Apples} from './01_apples';

test('is it apple?', (t: any) => {
  const actual = Apples.getApple();
  const expected = 'apple';

  t.equal(actual, expected);
  t.end();
});
