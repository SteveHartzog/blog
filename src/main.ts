﻿// import './styles/site.scss';
import 'aurelia-bootstrapper';
import {Aurelia} from 'aurelia-framework';

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
  await aurelia.setRoot(/* @import */ 'app');
}