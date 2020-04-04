import { Pipe, PipeTransform } from '@angular/core';


export interface IKeysPipe {
  transform(value: any, args: string[]): any;
}

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform, IKeysPipe {

  transform(value: any, args: string[]): any {
    let keys = [];
    if (typeof value === 'object') {
      for (let key in value) {
        keys.push({key: key, value: value[key]});
      }
    }
    return keys;
  }

}