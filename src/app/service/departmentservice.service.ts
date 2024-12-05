import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from '../../endpoints/endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentserviceService {
  private sourceurl = endpoints.DEPT;
  constructor(private httpClient: HttpClient) { }

  getDepartment(): any{
    debugger
   return this.httpClient.get(`${this.sourceurl}\\GetParentDepartment`);
  }

  saveDepartment(obj: any): any{
    debugger
    if(obj.departmentId == 0){
      return this.httpClient.post(`${this.sourceurl}\\AddNewDepartment`,obj);
    }
    else{
      return this.httpClient.post(`${this.sourceurl}\\UpdateDepartment`,obj);
    }
  }

  removeDepartment(deptId: any): any{
    debugger
    return this.httpClient.delete(`${this.sourceurl}\\DeletedepartmentBydepartmentId?departmentId=${deptId}`);
  }
}
