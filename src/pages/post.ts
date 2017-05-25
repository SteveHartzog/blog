import { autoinject } from 'aurelia-framework';
import { DataService } from '../services/dataService';
import { Markdown } from '../services/markdown';
debugger;
import * as ApplicationConfig from '../config/application.config.json';

import {SiteConfigInterface} from '../common/interfaces';

@autoinject
export class Post {
  public config: SiteConfigInterface;
  
  post: BlogPost;

  constructor (private ds: DataService, private md: Markdown) {
  }
  
  async activate(params): Promise<void> {
    this.post = await this.ds.getPostByUrl(params.url);
    this.post['fullUrl'] = encodeURIComponent(window.location.href.replace('/post/', '/#/post/'));

    // show titlebar when past the title
    window.addEventListener('scroll', function() {
      let titlebar = document.getElementById('titlebar');
      let postBody = document.getElementById('postbody');
      if (postBody) {
        if (window.scrollY > (postBody['offsetTop'] - 100)) {
          titlebar.style.display = 'block';
        } else {
          titlebar.style.display = 'none';
        }
      }
    });
    // Reset scroll height carried over from home
    window.scrollTo(0, 0);
  }
}
