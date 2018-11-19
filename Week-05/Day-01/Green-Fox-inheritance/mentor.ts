import Person from "./person";

class Mentor extends Person {
  
  protected level: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
    super(name);
    this.level = level;
  }
  
  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} old ${this.gender} ${this.level} mentor.`)
  }

  getGoal() {
    console.log(`My goal is: Educate brilliant junior software developers.`);
  }
}
