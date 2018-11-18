export class Mentor {

  name: string;
  age: number;
  gender: string;
  level: string;

  constructor(name: string, age: number, gender: string, level: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} old ${this.gender} ${this.level} mentor.`)
  }

  getGoal() {
    console.log(`Educate brilliant junior software developers.`);
  }

}