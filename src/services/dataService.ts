import { inject } from 'aurelia-framework';
import * as _ from 'lodash/lodash.min';
import { HttpClient } from 'aurelia-fetch-client';
import { Config } from './config';
import * as moment from 'moment';


// polyfill fetch client conditionally
const fetch = !self.fetch ? System.import('isomorphic-fetch') : Promise.resolve(self.fetch);

@inject('firebaseRoot', Config, HttpClient)
export class DataService {
  posts: {}[];
  categories: string[];

  constructor (private firebaseRoot, private blogConfig: Config, private http: HttpClient) {
    this.http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl(this.blogConfig.source);
    });
  }

  async getData(data: string, refresh:boolean = false) {
    let items;
    try {
      const response = await this.http.fetch(data + '.json');
      items = await response.json();
    } catch (err) {
      console.log(`err: ${err}`);
      return [];
    }
    return items;
  }
  
  async loadPosts(refresh:boolean = false) {
    if (this.posts === undefined || refresh === true) {
      this.posts = _.sortBy(await this.getData('posts'), (post) => {
        return moment(post.posted);
      }).reverse();
    }
    return this.posts;
  }

  async loadCategories(refresh:boolean = false) {
    if (this.categories === undefined || refresh === true) {
        this.categories = await this.getData('categories');
    }
    return this.categories;  
  }

  async getPostsByCategory(category: string, refresh: boolean = false) {
    if (this.posts === undefined || refresh === true) {
      this.posts = await this.getData('posts');
    }
    return _.filter(this.posts, (post) => {
      for(let cat of post['categories']) {
        if (cat.toLowerCase() === category.toLowerCase()) {
          return true;
        }
      }
      return false;
    });
  }

  async getPostByUrl(url: string, refresh: boolean = false) {
    if (this.posts === undefined || refresh === true) {
      this.posts = await this.getData('posts');
    }
    return this.posts[_.findIndex(this.posts, { 'url': url })];
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    
    item.id = childSnapshot.key;

    returnArr.push(item);
  });

  return returnArr;
};
