import {FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./value-converters/date-format'),
    PLATFORM.moduleName('./elements/profile.html')
  ]);
}
