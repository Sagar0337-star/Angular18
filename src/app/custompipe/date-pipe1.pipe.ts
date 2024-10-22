import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe1',
  standalone: true
})
export class DatePipe1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
