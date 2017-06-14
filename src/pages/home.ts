import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { DataService } from '../services/dataService';

@autoinject
export class Posts{
  posts: BlogPost[];
  content: any;

  constructor (public event: EventAggregator, private ds: DataService) {
  }

  attached() {
    this.event.publish('hideTitlebar', true);
  }
  
  async activate(): Promise<void> {
    this.content = await this.ds.getContent();
    this.posts = await this.ds.loadPosts();

    // console.log(this.content);
  }
}
