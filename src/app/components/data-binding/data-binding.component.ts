import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  courseName: string = "Angular 18";

  inputType = "radio";

  rollNo: number = 123;

  isIndian: boolean = false;

  currentData: Date = new Date();

  myClassName: string = "bg-primary";

  constructor(){

  }

  showMessage(message: string){
    alert(message);
  }

  changeCourseName(){
    this.courseName = "React.js";
  }

}
