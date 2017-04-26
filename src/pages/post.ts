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
    this.post['fullUrl'] = window.location.href;

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