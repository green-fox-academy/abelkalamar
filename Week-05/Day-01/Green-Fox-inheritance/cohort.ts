import Student from "./student";
import Mentor from "./mentor";

export default class Cohort {

  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  addMentor(mentor: Mentor) {
    this.mentors.push(mentor);
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.mentors.length} mentors and ${this.students.length} students.`)
  }

}
