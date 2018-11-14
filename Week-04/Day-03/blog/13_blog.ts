import { BlogPost } from './blogpost';
import { Blog } from './blog';

let myBlog = new Blog('myBlog');

myBlog.blogposts[0] = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet', '2000.05.04.');
myBlog.blogposts[1] = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
myBlog.blogposts[2] = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');

myBlog.delete(2);
myBlog.update(1, new BlogPost('Abel Kalamar', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet', '201811.14.'));

console.log(myBlog.blogposts);