import Printable from "./printable";

class Thing implements Printable {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
    this.completed = false;
  }

  public complete() {
    this.completed = true;
  }

  get getName() {
    return this.name;
  }

  get getCompleted() {
    return this.completed;
  }

  printAllFields() {
    console.log(this.completed);
    console.log(this.name);
  }
}

export { Thing };
