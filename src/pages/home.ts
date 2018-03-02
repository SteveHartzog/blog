import { autoinject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import { DataService } from "../services/dataService";

import { SiteConfigInterface, AuthorInterface } from "../common/interfaces";

let ApplicationConfig = require("../config/application.config.json");
let AuthorConfig = require("../config/author.config.json");

@autoinject
export class Posts {
  posts: BlogPost[];
  content: any;

  constructor(public event: EventAggregator, private ds: DataService) {
    let author = AuthorConfig[0] as AuthorInterface;
    this.event.publish("setSiteTitle");
    this.event.publish("setContentAuthor", author.name);
  }

  // attached() {
  //   this.event.publish('hideTitlebar', true);
  // }

  async activate(): Promise<void> {
    this.content = await this.ds.getContent();
    this.posts = await this.ds.loadPosts();

    // console.log(this.content);
  }
}
