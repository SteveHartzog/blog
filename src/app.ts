import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Blog';
    // config.options.pushState = true;
    config.map([
      { route: [''], name: 'home', moduleId: './pages/home', nav: true, title: 'Home' },
      { route: ['blog'], name: 'blog', moduleId: './pages/blog', nav: false, title: 'Blog' },
      { route: ['post/:url'], name: 'post', moduleId: './pages/post', nav: false, title: 'Post' },
      { route: ['about'], name: 'about', moduleId: './pages/about', nav: true, title: 'About' },
      { route: ['portfolio'], name: 'portfolio', moduleId: './pages/portfolio', nav: true, title: 'Portfolio' },
      { route: ['contact'], name: 'contact', moduleId: './pages/contact', nav: true, title: 'Contact' },
      { route: ['category/:cat'], name: 'category', moduleId: './pages/category', nav: false, title: 'Category' }
    ]);

    this.router = router;
  }
}
