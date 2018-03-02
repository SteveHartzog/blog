import { autoinject } from "aurelia-framework";
let ApplicationConfig = require("../config/application.config.json");
let SocialConfig = require("../config/social.config.json");

import { SiteConfigInterface } from "../common/interfaces";

@autoinject
export class About {
  private config: SiteConfigInterface = ApplicationConfig as SiteConfigInterface;
  private socialConfig = SocialConfig;
}
