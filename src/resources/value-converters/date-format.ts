import * as moment from 'moment';

export class DateFormatValueConverter {
  toView(value, format) {
    if (value === null) {
      return '';
    }
    return moment(value).format(format);
  }
}