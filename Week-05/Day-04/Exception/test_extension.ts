'use strict';

import { test } from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './06_extension';

test('add: 2 and 3 is 5', function (t: any): any {
  t.equal(add(2, 3), 5);
  t.end();
});

test('add: 1 and 4 is 5', function (t: any): any {
  t.equal(add(1, 4), 5);
  t.end();
});

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(5, 4, 10), 10);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(3, 12, 5), 12);
  t.end();
});

test('median: four', function (t: any): any {
  t.equal(median([7, 3, 5, 5]), 5);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 2, 5, 4, 3]), 3);
  t.end();
});

test('is vowel: a', function (t: any): any {
  t.ok(isVowel('o'));
  t.end();
});

test('is vowel: u', function (t: any): any {
  t.ok(isVowel('o'));
  t.end();
});

test("is vowel: k", function(t: any): any {
  t.notOk(isVowel("k"));
  t.end();
});

test('translate: bemutatkozik', function (t: any): any {
  t.equal(translate('nevetel'), 'nevevevetevel');
  t.end();
});

test('translate: lagopus', function (t: any): any {
  t.equal(translate('alma'), 'avalmava');
  t.end();
});