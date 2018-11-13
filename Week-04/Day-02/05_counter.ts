'use strict'
export { };

class Counter {

  value: number;

  constructor(value: number = 0) {
    this.value = value;
  }

  add(num: number = 1) {
    this.value += num;
  }

  get() {
    return this.value.toString();
  }

  reset() {
    this.value = 0;
  }
}

let one = new Counter(10);
one.add(25);

console.log(one.value);
console.log(typeof one.get());

one.reset();

console.log(one.value);
