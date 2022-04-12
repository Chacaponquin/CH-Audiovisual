import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(category: boolean): string {
    if (category) return 'To Adults';
    else return 'All Public';
  }
}
