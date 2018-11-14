import { BlogPost } from './blogpost';

export class Blog {

  name: string;
  blogposts: BlogPost[];

  constructor(name: string) {
    this.name = name;
    this.blogposts = [];
  }

  delete(index: number): void {
    this.blogposts.splice(index, 1);
  }

  update(index: number, post: BlogPost): void {
    this.blogposts.splice(index, 1, post);
  }

}

