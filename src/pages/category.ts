import { inject } from 'aurelia-framework';
import { DataService } from '../services/dataService';
import { Markdown } from '../services/markdown';

@inject(DataService, Markdown)
export class Category{
  heading: string;
  posts: BlogPost[];

  constructor (private ds, private md) {
  }
  
  async activate(params): Promise<void> {
    this.heading = 'Category: ' + params.cat;
    this.posts = await this.ds.getPostsByCategory(params.cat.toLowerCase());
  }
}

