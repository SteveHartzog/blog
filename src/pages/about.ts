import { autoinject } from 'aurelia-framework';
import * as ApplicationConfig from '../config/application.config.json';
import * as SocialConfig from '../config/social.config.json';

import {SiteConfigInterface} from '../interfaces';

@autoinject
export class About{
  private config: SiteConfigInterface | any = ApplicationConfig;
  private socialConfig = SocialConfig;
}
