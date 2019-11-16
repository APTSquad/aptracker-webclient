import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchProject: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }

    return items.filter(item => {
      return Object.keys(item).some(key => {
        if (searchText) {
          return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
        } else {
            return String(item[key]).toLowerCase().includes(searchProject.toLowerCase());
        }
      });
    });
   }
}