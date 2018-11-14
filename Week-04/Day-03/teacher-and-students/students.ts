import { Teacher } from "./teacher";

export class Students {

  name: string;
  age: number;
  knowledge: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.knowledge = 1;
  }

  learn(): void {
    this.knowledge++;
  }

  question(name: Teacher):void {
    name.answer();
  }
}