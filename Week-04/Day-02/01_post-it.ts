'use strict'
export { };

class PostIt {

  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(bgC: string, txt: string, txtCol: string) {
    this.backgroundColor = bgC;
    this.text = txt;
    this.textColor = txtCol;
  }
}
let obj1 = new PostIt('orange', 'Idea 1', 'blue');
let obj2 = new PostIt('pink', 'Awesome', 'black');
let obj3 = new PostIt('yellow', 'Superb', 'green');

