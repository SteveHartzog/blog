import { autoinject } from 'aurelia-framework';
import { DataService } from '../services/dataService';

@autoinject
export class Posts{
  posts: BlogPost[];
  content: any;

  constructor (private ds: DataService) {
  }
  
  async activate(): Promise<void> {
    this.content = await this.ds.getContent();
    this.posts = await this.ds.loadPosts();

    console.log(this.content);
  }
}
