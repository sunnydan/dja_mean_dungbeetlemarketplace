import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(items: any[], reverse: boolean): any[] {
    if (!items) { return []; }
    return items.reverse();
  }

}
