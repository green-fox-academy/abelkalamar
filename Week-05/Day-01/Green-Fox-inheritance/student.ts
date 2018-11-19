import { Person } from "./person";

export class Student extends Person {

  protected previousOrganization: string;
  protected skippedDays: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life') {
    super(name);
    this.skippedDays = 0;
    this.previousOrganization = previousOrganization;
  }

  getGoal() {
    console.log(`My goal is: Be a junior software developer.`);
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`)
  }

  skipDays() {
    this.skippedDays++;
  }
}
