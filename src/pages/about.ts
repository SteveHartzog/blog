import { autoinject } from 'aurelia-framework';
import { Config } from '../services/config';

@autoinject
export class About{
  constructor(private bConf: Config) {
    
  }
}