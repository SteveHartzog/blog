import { inject } from 'aurelia-framework';
import { DataService } from '../services/dataService';

@inject(DataService)
export class Posts{
  posts: BlogPost[];

  constructor (private ds) {
  }
  
  async activate(): Promise<void> {
    this.posts = await this.ds.loadPosts();
  }
}