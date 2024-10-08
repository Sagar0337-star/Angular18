import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  courseName: string = "Angular 18";
  inputType = "radio";
  rollNo: number = 123;
  isIndian: boolean = true;
  currentDate: Date = new Date();
  myClassName: string = "bg-primary";
  selectStateName: string = "";

  firstName = signal("Sagar Jani");
  type = signal("textbox");

  changeCourseName(){
    this.courseName = "React.js";
    this.firstName.set("Hello Developer");
  }

  showAlert(message:string){
    alert(message);
  }

}
