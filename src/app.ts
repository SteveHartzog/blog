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

  smoothScrollTo(elementId, duration) {
    let target = document.getElementById(elementId).offsetTop;
    let offset = window.pageYOffset;
    let delta  = target - window.pageYOffset; // Y-offset difference
    duration = duration || 1000;              // default 1 sec animation
    let start = Date.now();                   // get start time
    let timer;

    if( timer ) {
      clearInterval(timer); // stop any running animation
    }

    function step() {
      let y;
      let factor = (Date.now() - start) / duration; // get interpolation factor
      if( factor >= 1 ) {
        clearInterval(timer); // stop animation
        factor = 1;           // clip to max 1.0
      }
      y = factor * delta + offset;
      window.scrollBy(0, y - window.pageYOffset);
    }

    timer = setInterval(step, 10);
    return timer; // return the interval timer, so you can clear it elsewhere
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Home';

    config.addPipelineStep('postcomplete', PostCompleteStep);

    config.options.pushState = true;
    
    config.map([
      { route: [''], name: 'home', moduleId: PLATFORM.moduleName('pages/home'), nav: true, title: 'Home' },

      { route: ['blog'], name: 'blog', moduleId: PLATFORM.moduleName('pages/blog'), nav: false, title: 'Blog' },

      { route: ['post/:url'], name: 'post', moduleId: PLATFORM.moduleName('pages/post'), nav: false, title: 'Post' },

      { route: ['about'], name: 'about', moduleId: PLATFORM.moduleName('pages/about'), nav: true, title: 'About' },

      { route: ['category/:cat'], name: 'category', moduleId: PLATFORM.moduleName('pages/category'), nav: false, title: 'Category' },
      
      { route: 'setup', name: 'setup', moduleId: PLATFORM.moduleName('setup/setup'), nav: true, title: 'Setup' },
    ]);

    this.router = router;
  }
}

class PostCompleteStep {
  run(routingContext, next) {
    window.scrollTo(0, 0);
  }
}
