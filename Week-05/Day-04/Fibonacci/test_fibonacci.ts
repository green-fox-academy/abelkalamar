import { test } from 'tape';
import fibonacci from './05_fibonacci';

test('num = 0, and num = 20', (t: any) => {
  t.equal(fibonacci(0), 0);
  t.ok(fibonacci(20));
  t.end();
})

test('num = -1', (t: any) => {
  t.throws(fibonacci(-1));
  t.end();
})

test('num = törtszám', (t: any) => {
  t.throws(fibonacci(1.55));
  t.end();
})
