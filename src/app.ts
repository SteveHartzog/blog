import { Aurelia, autoinject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import { Router, RouterConfiguration } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";

let ApplicationConfig = require("./config/application.config.json");
// let AuthorConfig = require("./config/author.config.json");

import { SiteConfigInterface, AuthorInterface } from "./common/interfaces";

@autoinject
export class App {
  router: Router;
  public navBar;
  public contentTitle: string;
  public siteTitle: string;
  public contentAuthor: string;
  public siteBlurb: string;
  public config: SiteConfigInterface;
  public isCover: boolean;

  constructor(public event: EventAggregator) {
    this.siteBlurb = ApplicationConfig.siteBlurb;
    this.config = ApplicationConfig as SiteConfigInterface;
    this.isCover = true;
    let app = this;
    this.event.subscribe("setSiteTitle", () => {
      app.siteTitle = app.config.siteTitle;
      app.contentTitle = "";
    });
    this.event.subscribe("setContentTitle", title => {
      app.contentTitle = title;
    });
    this.event.subscribe("setContentAuthor", author => {
      app.contentAuthor = author;
    });
  }

  smoothScrollTo(elementId, duration) {
    let cover = document.getElementById("cover");
    this.isCover = false;
    // cover.style.display = "none";
    cover.className += " slideOut";
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Home";
    config.options.pushState = true;

    config.map([
      { route: [""], name: "home", moduleId: PLATFORM.moduleName("pages/home"), nav: true, title: "Home" },
      { route: ["blog"], name: "blog", moduleId: PLATFORM.moduleName("pages/blog"), nav: false, title: "Blog" },
      { route: ["post/:url"], name: "post", moduleId: PLATFORM.moduleName("pages/post"), nav: false, title: "Post" },
      { route: ["about"], name: "about", moduleId: PLATFORM.moduleName("pages/about"), nav: true, title: "About" },
      {
        route: ["category/:cat"],
        name: "category",
        moduleId: PLATFORM.moduleName("pages/category"),
        nav: false,
        title: "Category"
      },
      { route: "setup", name: "setup", moduleId: PLATFORM.moduleName("setup/setup"), nav: true, title: "Setup" }
    ]);

    this.router = router;
  }

  getYear() {
    return new Date().getFullYear();
  }
}
