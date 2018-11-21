export default abstract class Animal {

  protected name: string;
  protected age: number;
  protected canItFly: boolean;
  protected gender: string;
  protected class: string;

  constructor() {
  }

  getName(): string {
    return this.name;
  }

  breed() {
    return 'laying eggs';
  }
}
