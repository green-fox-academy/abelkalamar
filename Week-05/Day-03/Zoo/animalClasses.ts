import Animal from "./animal";

export class Reptile extends Animal {

  constructor(name: string) {
    super();
    this.name = name;
    this.class = 'Reptile';
  }
}

export class Bird extends Animal {

  constructor(name: string) {
    super();
    this.name = name;
    this.class = 'Reptile';
  }
}

export class Mammal extends Animal {

  constructor(name: string) {
    super();
    this.name = name;
    this.class = 'Mammal';
  }

  breed(): string {
    return 'pushing miniature versions out';
  }
}