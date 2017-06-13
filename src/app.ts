import { Aurelia, autoinject } from 'aurelia-framework'
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

import * as ApplicationConfig from './config/application.config.json';
import * as AuthorConfig from './config/author.config.json';
import { SiteConfigInterface, AuthorInterface } from './common/interfaces';

@autoinject
export class App {
  router: Router;
  public config: SiteConfigInterface;
  public author: AuthorInterface;
  public navBar;
  public contentTitle;

  constructor(public event: EventAggregator) {
    this.config = ApplicationConfig as SiteConfigInterface;
    this.author = AuthorConfig[0] as AuthorInterface;
    this.event.subscribe('hideTitlebar', (reset) => { this.hideTitlebar(reset); });
    this.event.subscribe('setContentTitle', (title) => { this.setContentTitle(title); });
  }

  setContentTitle(title) {
    console.log(`contentTitle: '${title}'`);
    this.contentTitle = title;
  }

  hideTitlebar(reset?: Boolean) {
    console.log(`reset? ${reset}`);
    if (reset) {
      this.setContentTitle('');
    }
    let cover = document.getElementById('cover');
    if (cover && cover.style.display !== 'none') {
      document.body.style.overflow = 'hidden';
      if (this.router.currentInstruction.config.name === 'home') {
        let titlebar = document.getElementById('titlebar');
        if (titlebar) {
          titlebar.style.display = 'none';
          this.disableScroll();
        }
      }
    }
  }

  disableScroll() {
    let keys = {37: 1, 38: 1, 39: 1, 40: 1};
    function preventDefaultForScrollKeys(e) {
      if (this.keys[e.keyCode]) {
          this.preventDefault(e);
          return false;
      }
    }

    function preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault)
          e.preventDefault();
      e.returnValue = false;  
    }

    if (window.addEventListener) { // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
    }
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
  }

  smoothScrollTo(elementId, duration) {
    (function enableScroll() {
      function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;  
      }
      if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
      }
      window.onmousewheel = document.onmousewheel = null; 
      window.onwheel = null; 
      window.ontouchmove = null;  
      document.onkeydown = null;
    })();

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
      let cover = document.getElementById('cover');
      let factor = (Date.now() - start) / duration; // get interpolation factor
      if( factor >= 1 ) {
        clearInterval(timer); // stop animation
        factor = 1;           // clip to max 1.0
      }
      y = factor * delta + offset;
      window.scrollBy(0, y - window.pageYOffset);
      if (factor >= 1 && elementId === 'pageStart') {
        cover.style.display = 'none';
        window.scrollTo(0, 0);
        document.getElementById('titlebar').style.display = 'block';
        document.body.style.overflow = 'visible';    
      }
    }

    timer = setInterval(step, 10);
    return timer; // return the interval timer, so you can clear it elsewhere
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Home';
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
