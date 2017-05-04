import { inject } from 'aurelia-framework';
import { DataService } from '../services/dataService';
import { Markdown } from '../services/markdown';
import { Config } from '../services/config';


@inject(Config, DataService, Markdown)
export class Post{
  post: BlogPost;

  constructor (private bConf: Config, private ds, private md: Markdown) {
  }
  
  async activate(params): Promise<void> {
    this.post = await this.ds.getPostByUrl(params.url);
    this.post['fullUrl'] = encodeURIComponent(window.location.href.replace('/post/', '/#/post/'));

    // show titlebar when past the title
    window.addEventListener('scroll', function() {
      let titlebar = document.getElementById('titlebar');
      let postBody = document.getElementById('postbody');
      if (window.scrollY > (postBody['offsetTop'] - 100)) {
        titlebar.style.display = 'block';
      } else {
        titlebar.style.display = 'none';
      }
    });
  }
}