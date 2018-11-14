import { Students } from "./students";

export class Teacher {

  name: string;
  age: number;
  energy: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.energy = 10;

  }
  answer():void {
    this.energy--;
    console.log('Google it!');
  }

  teach(name: Students): void {
    name.learn();
  }
}