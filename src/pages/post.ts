import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { DataService } from '../services/dataService';
import { Markdown } from '../services/markdown';
import * as  _ from 'lodash';

import * as AuthorConfig from '../config/author.config.json';
import { ContentInterface, AuthorInterface, ISocial} from '../common/interfaces';

@autoinject
export class Post {
  public author: AuthorInterface;
  public social: ISocial;
  
  post: ContentInterface;

  constructor (public event: EventAggregator, private ds: DataService, private md: Markdown) {
  }
  
  async activate(params): Promise<void> {
    this.post = await this.ds.getPostByUrl(params.url);
    this.event.publish('setContentTitle', this.post.title);
    let authorConfig = JSON.parse(JSON.stringify(AuthorConfig)) as AuthorInterface[];
    this.author = _.find(authorConfig, (author) => { return author.name === this.post.author; });
    this.post['fullUrl'] = encodeURIComponent(window.location.href.replace('/post/', '/#/post/'));

    // Reset scroll height carried over from home
    window.scrollTo(0, 0);
  }
}
