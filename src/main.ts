// we want font-awesome to load as soon as possible to show the fa-spinner
import 'font-awesome/css/font-awesome.min.css';
// import '../node_modules/tether/dist/js/tether.min'
import './styles/site.scss';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .instance('firebaseRoot', 'https://blog-e668a.firebaseio.com/');
    // .developmentLogging();

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(/* @import */ 'aurelia-animator-css');
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(/* @import */ 'aurelia-html-import-template-loader')

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}