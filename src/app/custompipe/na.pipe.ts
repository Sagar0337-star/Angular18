import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na',
  standalone: true
})
export class NaPipe implements PipeTransform {

  // constructor(private datePipe: DatePipe) {
  // }

  // transform(value: any, formate: string): any {
  //   debugger
  //   // return this.datePipe.transform(value,formate);
  //   return "";
  // }

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value !== null && value !== undefined && value !== ''){
      return value;
    }
    else{
      return 'NA';
    }
  }

}
