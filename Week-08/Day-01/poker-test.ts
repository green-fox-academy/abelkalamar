import { test } from 'tape';
import { dealCards } from './poker';

test('dealCards', t => {
  const Black: string[] = [];
  t.equal(dealCards(Black).length, 5);
  t.end();
});

