import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlFlow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './controlFlow.component.html',
  styleUrl: './controlFlow.component.scss'
})
export class ControlFlowComponent {
  isDiv1Visible: boolean = true;
  isWarningDivVisible: boolean = false;
  selectedValue: string = '';
  dayNumber: string = '';


  num1: string = '';
  num2: string = '';

  cityArray: string[] = ['Surat', 'Mumbai', 'Pune', 'Delhi'];

  studentList: any[] = [
    { studentId: 1, name: 'AAA', city: 'Surat', isActive: false},
    { studentId: 2, name: 'BBB', city: 'Mumbai', isActive: false},
    { studentId: 3, name: 'CCC', city: 'Pune', isActive: true},
    { studentId: 4, name: 'DDD', city: 'Delhi', isActive: false},
    { studentId: 5, name: 'EEE', city: 'Jaipur', isActive: false},
    { studentId: 6, name: 'FFF', city: 'Chennai', isActive: false},
    { studentId: 7, name: 'GGG', city: 'Kolkata', isActive: false}
  ];

  showDiv1(){
    this.isDiv1Visible = true;
  }

  hideDiv1(){
    this.isDiv1Visible = false;
  }

  toggleDiv2(){
    this.isWarningDivVisible = !this.isWarningDivVisible;
  }
}
