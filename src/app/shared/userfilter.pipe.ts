import { Pipe, PipeTransform } from '@angular/core';
import {filter} from 'lodash-es';

@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {

  transform(value: object[], isActive?: boolean, reload?: boolean): [] {
    return filter(value, (user) => user.status === isActive);
  }

}
