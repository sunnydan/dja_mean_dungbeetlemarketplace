import { Pipe, PipeTransform } from '@angular/core';
import { Dungball } from './dungball.service';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], ordermethod: string): any {
    if (!items) { return []; }
    if (!ordermethod) { return items; }
    if (ordermethod == "alphabetical") {
      return items.sort((a, b) => {
        let aname = a.short_desc.toUpperCase();
        let bname = b.short_desc.toUpperCase();
        console.log(aname + " " + bname);
        return (aname < bname) ? -1 : (aname > bname) ? 1 : 0;
      });
    }
    if (ordermethod == "radius") {
      return items.sort((a, b) => {
        return a.radius - b.radius;
      });
    }
    if (ordermethod == "price") {
      return items.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (ordermethod == "chronological") {
      return items.sort((a, b) => {
        let adate = new Date(a.created_at).getTime();
        let bdate = new Date(b.created_at).getTime();
        return adate - bdate;
      });
    }
  }

}
