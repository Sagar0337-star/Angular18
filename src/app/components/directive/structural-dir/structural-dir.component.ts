import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.scss'
})
export class StructuralDirComponent {

  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = false;
  isChecked: boolean = false;
  selectedValue: string = "";

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
    this.isDiv2Visible = !this.isDiv2Visible;
  }
}
