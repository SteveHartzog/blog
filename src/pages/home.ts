import { inject } from 'aurelia-framework';
import { DataService } from '../services/dataService';

@inject(DataService)
export class Posts{
  posts: BlogPost[];
  content: any;

  constructor (private ds) {
  }
  
  async activate(): Promise<void> {
    this.content = await this.ds.getContent();
    this.posts = await this.ds.loadPosts();

    console.log(this.content);
  }
}
