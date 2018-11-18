export class Student {

  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;

  constructor(name: string, age: number, gender: string, previousOrganization: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} old ${this.gender} from ${this.previousOrganization}, 
    who skipped ${this.skippedDays} days from the course already.`)
  }

  getGoal() {
    console.log(`My goal is: Be a software developer.`);
  }

  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}

