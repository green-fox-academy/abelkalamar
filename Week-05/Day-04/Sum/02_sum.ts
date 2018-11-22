export default class MyClass {

  private content: number[];

  constructor(nums: number[]) {
    this.content = nums;
  }

  sum() {
    let sum: number = 0;
    this.content.forEach(e => {
      sum += e;
    })
    return sum;
  }
}
