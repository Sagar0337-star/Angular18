import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.scss'
})
export class GetApiComponent {

  empList: any[] = [];
  constructor(private httpClient: HttpClient){

  }

  getAllEmployee(){
    debugger
    this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any) =>{
      debugger
      this.empList = result;
    },error =>{
      alert("Error")
    })
  }
}
