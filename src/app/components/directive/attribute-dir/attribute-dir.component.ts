import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.scss'
})
export class AttributeDirComponent {
  div1BGColor: string = 'bg-primary';
  isDiv2Active: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;

  studentList: any[] = [
    { studentId: 1, name: 'AAA', gender: 'male', city: 'Surat', totalMarks: 23, isActive: false},
    { studentId: 2, name: 'BBB', gender: 'female', city: 'Mumbai', totalMarks: 33, isActive: false},
    { studentId: 3, name: 'CCC', gender: 'male', city: 'Pune', totalMarks: 68, isActive: true},
    { studentId: 4, name: 'DDD', gender: 'female', city: 'Delhi', totalMarks: 97, isActive: false},
    { studentId: 5, name: 'EEE', gender: 'male', city: 'Jaipur', totalMarks: 20, isActive: false},
    { studentId: 6, name: 'FFF', gender: 'male', city: 'Chennai', totalMarks: 30, isActive: false},
    { studentId: 7, name: 'GGG', gender: 'male', city: 'Kolkata', totalMarks: 50, isActive: false}
  ];

  addRedClass(){
    this.div1BGColor = 'bg-danger'
  }

  addBlueClass(){
    this.div1BGColor = 'bg-primary'
  }

  changeDiv2Color(){
    this.isDiv2Active = !this.isDiv2Active;
  }

}
