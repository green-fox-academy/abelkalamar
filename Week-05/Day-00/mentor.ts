export class Mentor {

  name: string;
  age: number;
  gender: string;
  level: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'famele', level: string = 'intermediate') {
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