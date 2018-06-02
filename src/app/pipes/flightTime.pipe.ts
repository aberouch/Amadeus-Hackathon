import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'timepipe'
})
export class TimePipe implements PipeTransform {

  transform(input: any, args: any[]): any {
    let result  = moment(input, moment.ISO_8601);
    return result.format("HH:mm")
  
  }
}