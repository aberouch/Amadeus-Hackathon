import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'datepipe'
})
export class MomentPipe implements PipeTransform {

  transform(input: any, args: any[]): any {
    let result  = moment(input, moment.ISO_8601);
    return result.format("ddd, MMM Do YYYY")
  
  }
}