import { inject } from 'aurelia-framework';
import { DataService } from '../services/dataService';
import { Markdown } from '../services/markdown';

@inject(DataService, Markdown)
export class Post{
  post: BlogPost;

  constructor (private ds, private md) {
  }
  
  async activate(params): Promise<void> {
    this.post = await this.ds.getPostByUrl(params.url);
  }
}