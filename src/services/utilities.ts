export function extend(...args): {} {
  let extended = {};
  let deep = false;
  let i = 0;
  let length = args.length;

  // Check if a deep merge
  if (Object.prototype.toString.call( args[0] ) === '[object Boolean]') {
    deep = args[0];
    i++;
  }

  // Merge the object into the extended object
  let merge = function (obj) {
    for (let prop in obj) {
      if (Object.prototype.hasOwnProperty.call( obj, prop )) {
        // If deep merge and property is an object, merge properties
        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          extended[prop] = this.extend( true, extended[prop], obj[prop]);
        } else {
          extended[prop] = obj[prop];
        }
      }
    }
  };

  // Loop through each object and conduct a merge
  for ( ; i < length; i++ ) {
    let obj = args[i];
    merge(obj);
  }

  return extended;
}

export function fadeIn(el, time) {
  el.style.opacity = '0';
  el.style.display = 'block';
  let timer = time || 400;
  let timeForSetInterval = 20;
  let opacityStart = 0;
  let count = timer / timeForSetInterval;
  let step = 1 / count;
  let i = 0;

  let forClear = setInterval(function(){
    let opacity = getComputedStyle(el).opacity;
    el.style.opacity = parseFloat(opacity) + parseFloat(step.toString());
    i++;
    if(i === count){
      clearInterval(forClear);
      el.style.opacity = 1;
    }
  }, timeForSetInterval)
}

export function fadeOut(el, time) {
  el.style.display = 'block';
  let timer = time || 400;
  let timeForSetInterval = 20;
  let opacityStart = getComputedStyle(el).opacity;
  let count = timer / timeForSetInterval;
  let step = parseFloat(opacityStart) / count;
  let i = 0;

  let intervalId = setInterval(function(){
    let opacity = getComputedStyle(el).opacity;
    el.style.opacity = parseFloat(opacity) - parseFloat(step.toString());
    i++;
    if(i === count){
      clearInterval(intervalId);
      el.style.opacity = 0;
      el.style.display = 'none';
    }
  }, timeForSetInterval);

  return intervalId;
}
