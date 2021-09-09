import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearsToNow'
})
export class YearsToNowPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): number {
    const valueDate = new Date(value);
    return new Date().getFullYear() - valueDate.getFullYear();
  }
}
