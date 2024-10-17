import { CommonModule, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../../custompipe/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule, NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {

  firstName: string = 'this is my dummy text';

  currentDate: Date = new Date();
  amount: number = 123.45;

  currentTime: Observable<Date> = new Observable<Date>;

  student: any ={
    studId: '1',
    name: 'sagar',
    city: 'surat',
    state: 'Gujarat'
  };

  constructor(){
    this.currentTime = interval(1000).pipe(map(()=> new Date));
  }
}
