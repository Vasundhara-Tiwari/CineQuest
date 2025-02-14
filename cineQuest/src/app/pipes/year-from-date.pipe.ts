import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearFromDate'
})
export class YearFromDatePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    const year = value.split('-')[0];
    return year;
  }

}
