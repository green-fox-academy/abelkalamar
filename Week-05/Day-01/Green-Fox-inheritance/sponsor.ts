import Person from "./person";

class Sponsor extends Person {

  protected company: string;
  hiredStudents: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
    super(name);
    this.company = company;
    this.hiredStudents = 0;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
  }

  getGoal() {
    console.log(`My goal is: Hire brilliant junior software developers.`);
  }

  hire() {
    this.hiredStudents++;
  }
}
