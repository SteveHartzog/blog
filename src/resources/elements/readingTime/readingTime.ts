import { bindable } from 'aurelia-framework';
import * as readingTime from 'reading-time';
import * as util from '../../../services/utilities';

export class ReadingTime {
  @bindable selector: string;
  currentScrollHeight: number;
  eta: HTMLElement;
  debounceTimout: number = 250;
  displayTime: number = 3000;
  fadeTime: number = 800;
  intervalId;
  displayTimeId;
  stats;

  attached() {
    this.currentScrollHeight = document.querySelector(this.selector)['offsetHeight'];
    let postBody = document.querySelector(this.selector).textContent;
    let minutesLeft = `${Math.round(readingTime(postBody).minutes)} minutes left`;
    this.stats = readingTime(postBody);
    this.eta = document.querySelector('.eta');

    clearInterval(this.intervalId);    
    this.intervalId = this.addEta(minutesLeft);

    let that = this;
    window.addEventListener('scroll', this.onScroll(function (event) {
      clearInterval(that.intervalId);
      let currentScrollPosition = event.target.scrollingElement.scrollTop + 65;
      let secondsLeft = Math.round(((that.currentScrollHeight-currentScrollPosition)/that.currentScrollHeight)*(that.stats.time/1000));
      let minutesLeft = Math.floor(secondsLeft/60);
      if (minutesLeft > 0) {
        that.intervalId = that.addEta(minutesLeft !== 0 ? `${minutesLeft} minutes left` : `Thanks for reading`);
      } else {
        that.intervalId = that.addEta(secondsLeft > 46 ? `< 1 minute left` : `Thanks for reading`);        
      }
    }, this.debounceTimout));
  }

  onScroll(func, wait, immediate?) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, event);
    };
  }

  addEta(eta: string) {
    clearTimeout(this.displayTimeId);
    this.intervalId = undefined;
    this.eta.textContent = eta;
    this.eta.style.opacity = '1';
    this.eta.style.display = 'block';
    eta !== 'Thanks for reading' ? this.delayHide(this.eta, this.displayTime) : null;
  }

  delayHide(el, readingTime) {
    let that = this;
    this.displayTimeId = setTimeout(() => {
      el.style.display = 'none';
      that.intervalId = util.fadeOut(el, that.fadeTime);
    }, readingTime);
  }
}
