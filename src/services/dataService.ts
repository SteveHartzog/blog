import { inject } from 'aurelia-framework';
import * as _ from 'lodash/lodash.min';
import { HttpClient } from 'aurelia-fetch-client';
import * as moment from 'moment';

import * as FirebaseConfig from '../config/firebase.config.json';
import {ContentType, ContentInterface, FirebaseConfigInterface} from '../common/interfaces';
import {snapshotToArray} from '../common/functions';

// polyfill fetch client conditionally
const fetch = !self.fetch ? System.import('isomorphic-fetch') : Promise.resolve(self.fetch);

@inject(HttpClient)
export class DataService {
  private config: FirebaseConfigInterface = FirebaseConfig;

  posts: {}[];
  categories: string[];

  constructor (private http: HttpClient) {
    this.http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl(this.config.databaseURL);
    });
  }

  async getContent(type: ContentType = 'post'): Promise<ContentInterface[]> {
    let data;

    await firebase.database().ref()
      .child('content')
      .orderByChild('type')
      .equalTo(type)
      .once('value', snapshot => data = snapshotToArray(snapshot));

    return data;
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
  
  async loadPosts(refresh:boolean = false): Promise<any[]> {
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

  async getPostByUrl(url: string, refresh: boolean = false): Promise<any> {
    if (this.posts === undefined || refresh === true) {
      this.posts = await this.getData('posts');
    }
    return this.posts[_.findIndex(this.posts, { 'url': url })];
  }
}
