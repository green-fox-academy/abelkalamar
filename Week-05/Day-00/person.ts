export class Person {

  name: string;
  age: number;
  gender: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  Person

  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} old ${this.gender}.`)
  }

  getGoal() {
    console.log(`My goal is: Live for the moment.`);
  }
}
