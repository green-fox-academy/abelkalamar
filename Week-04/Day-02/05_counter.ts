'use strict'
export { };

class Counter {

  value: number;
  defaultValue: number;

  constructor(value: number = 0) {
    this.value = value;
    this.defaultValue = value;
  }

  add(num: number = 1): void {
    this.value += num;
  }

  get(): string {
    return this.value.toString();
  }

  reset(): void {
    this.value = this.defaultValue;
  }
}

let one = new Counter(10);
one.add(25);

console.log(one.value);
console.log(typeof one.get());

one.reset();

console.log(one.value);
