import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DepartmentserviceService } from '../../../service/departmentservice.service';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.scss'
})
export class PostApiComponent implements OnInit {
  ngOnInit(): void {
    debugger
    this.getDepartment();
  }

  department: FormGroup = new FormGroup({
    departmentId: new FormControl(0),
    departmentName: new FormControl(""),
    departmentLogo: new FormControl("")
  });

  data: any;

  http = inject(HttpClient);

  constructor(private deptService: DepartmentserviceService){

  }

  onSave(){
    debugger
    this.deptService.saveDepartment(this.department.value).subscribe((res: any) => {
      debugger
      if(this.department.value.departmentId == 0){
        debugger
        if(res.result){
          alert("Department created");
          this.getDepartment();
        }
        else{
          alert(res.error);
        }
      }
      else{
        debugger
        if(res.result){
          alert("Department updated");
          this.getDepartment();
        }
        else{
          alert(res.error);
        }
      }
    });
  }

  getDepartment(){
    debugger
    this.deptService.getDepartment().subscribe((res: any) => {
      debugger
      this.data = res.data;
    })
  }

  getDepartmentById(dept: any){
    this.department = new FormGroup({
      departmentId: new FormControl(dept.departmentId || 0),
      departmentName: new FormControl(dept.departmentName || ''),
      departmentLogo: new FormControl(dept.departmentLogo || ''),

    })
  }

  removeDepartment(deptId:any){
    debugger
    const isDelete = confirm('Are you sure you want to delete?');
    if(isDelete){
      this.deptService.removeDepartment(deptId).subscribe((res: any) => {
        if(res.result){
          debugger
          alert("delete successfully");
          this.getDepartment();
        }
        else{
          alert(res.error);
        }
      })
    }

  }
}
