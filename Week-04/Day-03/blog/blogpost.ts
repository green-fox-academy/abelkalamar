'use strict'

export class BlogPost {

  authorName: string;
  title: string;
  text: string;
  publicationDate: string;

  constructor(autName: string, title: string, txt: string, pubDate: string) {
    this.authorName = autName;
    this.title = title;
    this.text = txt;
    this.publicationDate = pubDate;
  }
}

