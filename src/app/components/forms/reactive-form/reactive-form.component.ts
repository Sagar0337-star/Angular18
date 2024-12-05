import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [MatInputModule, MatSelectModule, MatRadioModule, MatCheckboxModule, MatButtonModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  disableFirstOption: boolean = true;

  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("",[Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]+$')]),
    lastName: new FormControl("",[Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]+$')]),
    userName: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-z0-9+_\.]+@[A-Za-z]+\.[A-Za-z]{2,}$')]),
    gender: new FormControl("",[Validators.required]),
    city: new FormControl("",[Validators.required, Validators.pattern('^[A-Za-z]+$')]),
    state: new FormControl("",[Validators.required]),
    zip: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('^[0-9]{1,6}')]),
    isAcceptTerms: new FormControl("",[Validators.required]),
  });

  formValue: any;

  onSubmit(){
    debugger
    if(this.studentForm.valid){
      this.formValue = this.studentForm.value;
    }
    else{
      this.studentForm.markAllAsTouched();
    }
    
  }

  ResetForm(){
    this.studentForm.reset();
  }
}
