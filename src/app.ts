import { Aurelia, autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import { Config } from './services/config';

@autoinject
export class App {
  router: Router;
  public bConf: Config;

  constructor(private blogConfig: Config) {
    this.bConf = this.blogConfig;
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Home';
    config.addPipelineStep('postcomplete', PostCompleteStep);
    config.options.pushState = true;
    config.map([
      { route: [''], name: 'home', moduleId: PLATFORM.moduleName('./pages/home'), nav: true, title: 'Home' },
      { route: ['blog'], name: 'blog', moduleId: PLATFORM.moduleName('./pages/blog'), nav: false, title: 'Blog' },
      { route: ['post/:url'], name: 'post', moduleId: PLATFORM.moduleName('./pages/post'), nav: false, title: 'Post' },
      { route: ['about'], name: 'about', moduleId: PLATFORM.moduleName('./pages/about'), nav: true, title: 'About' },
      // { route: ['portfolio'], name: 'portfolio', moduleId: PLATFORM.moduleName('./pages/portfolio'), nav: true, title: 'Portfolio' },
      // { route: ['contact'], name: 'contact', moduleId: PLATFORM.moduleName('./pages/contact'), nav: true, title: 'Contact' },
      { route: ['category/:cat'], name: 'category', moduleId: PLATFORM.moduleName('./pages/category'), nav: false, title: 'Category' }
    ]);

    this.router = router;
  }
}

class PostCompleteStep {
  run(routingContext, next) {
    window.scrollTo(0, 0);
  }
}
