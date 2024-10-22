import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NaPipe } from '../../../custompipe/na.pipe';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers:[NaPipe, DatePipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent{

  constructor(){

  }
  // ngOnInit(): void {
  //   debugger
  //   console.log(new NaPipe().transform(new Date,'dd-MM-yyyy'));
  // }

  student : any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zip: '',
    isAcceptTerms: false
  };

  formData:any;

  submitData(){
    this.formData = this.student;
  }

  resetForm(){
    this.student = {
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
      state: '',
      zip: '',
      isAcceptTerms: false
    };
  }
}
