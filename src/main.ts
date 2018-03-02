/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
// we want font-awesome to load as soon as possible to show the fa-spinner
import "font-awesome/css/font-awesome.min.css";
// import '../node_modules/tether/dist/js/tether.min'
import "./styles/site.scss";
import { Aurelia, PLATFORM } from "aurelia-framework";
import * as Bluebird from "bluebird";
import * as firebase from "firebase";

// Import Firebase config
let FirebaseConfig = require("./config/firebase.config.json");

// Store Firebase instance on global window
window.firebase = firebase.initializeApp(FirebaseConfig);

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export async function configure(aurelia: Aurelia) {
  aurelia.use.standardConfiguration().feature(PLATFORM.moduleName("resources/index"));
  // .developmentLogging();

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(/* @import */ 'aurelia-animator-css');
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(/* @import */ 'aurelia-html-import-template-loader')

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName("app"));
}
