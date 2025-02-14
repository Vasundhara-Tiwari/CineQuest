import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oneDecimal'
})
export class OneDecimalPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value)) {
      return '';
    }
    return value.toFixed(1);
  }
}
