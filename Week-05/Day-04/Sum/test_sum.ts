import {test} from "tape";
import MyClass from './02_sum';

test('is it equal?', (t: any) => {
  let fox = new MyClass([45, 56, 77, 91, 12]);
  t.notEqual(fox.sum(), 128);
  t.end();
});