export class Sponsor {

  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  constructor(name: string, age: number, gender: string, company: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = 0;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} years old ${this.gender} 
    who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
  }

  getGoal() {
    console.log(`Hire brilliant junior software developers.`);
  }

  hire() {
    this.hiredStudents++;
  }
}