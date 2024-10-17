import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './components/directive/attribute-dir/attribute-dir.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ControlFlowComponent } from './components/controlFlow/controlFlow.component';
import { PipeComponent } from './components/pipe-demo/pipe/pipe.component';

export const routes: Routes = [
    {
        path: 'add-emp',
        component: AddEmployeeComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'emp-list',
        component: EmployeeListComponent
    },
    {
        path: 'structuraldirective',
        component: StructuralDirComponent
    },
    {
        path: 'attributedirective',
        component: AttributeDirComponent
    },
    {
        path: 'if-else',
        component: ControlFlowComponent
    },
    {
        path: 'pipe',
        component: PipeComponent
    }
];
