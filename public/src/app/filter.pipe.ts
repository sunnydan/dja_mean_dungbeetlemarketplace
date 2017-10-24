import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    return items.filter(item => {
      console.log(item);
      return (item.short_desc.toLowerCase().includes(searchText.toLowerCase()));
    });
  }
}