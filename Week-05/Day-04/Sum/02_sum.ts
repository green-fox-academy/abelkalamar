export default class myClass {

  private content: number[];

  constructor(nums) {
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
