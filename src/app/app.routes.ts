import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './components/directive/attribute-dir/attribute-dir.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ControlFlowComponent } from './components/controlFlow/controlFlow.component';
import { PipeComponent } from './components/pipe-demo/pipe1/pipe.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { DropdownOptionsComponent } from './components/dropdown-options/dropdown-options.component';
import { GetApiComponent } from './components/apiIntegration/get-api/get-api.component';
import { PostApiComponent } from './components/apiIntegration/post-api/post-api.component';
import { FirstChildComponent } from './components/first-child/first-child.component';
import { SecondChildComponent } from './components/second-child/second-child.component';
import { AppComponent } from './app.component';

// export const routes: Routes = [
//     {
//         path: '',
//         component: AddEmployeeComponent,
//         pathMatch: 'full'
//     },
//     {
//         path: 'main-page',
//         component: AddEmployeeComponent
//     },
//     {
//         path: 'add-emp',
//         component: AddEmployeeComponent
//     },
//     {
//         path: 'data-binding',
//         component: DataBindingComponent
//     },
//     {
//         path: 'emp-list',
//         component: EmployeeListComponent
//     },
//     {
//         path: 'structuraldirective',
//         component: StructuralDirComponent
//     },
//     {
//         path: 'attributedirective',
//         component: AttributeDirComponent
//     },
//     {
//         path: 'if-else',
//         component: ControlFlowComponent
//     },
//     {
//         path: 'pipe',
//         component: PipeComponent
//     },
//     {
//         path: 'dropdownOptions',
//         component: DropdownOptionsComponent,
//         children:[
//             {
//                 path: 'templateForm',
//                 component: TemplateFormComponent
//             },
//             {
//                 path: 'reactiveForm',
//                 component: ReactiveFormComponent
//             }
//         ]
//     },
//     {
//         path: 'getAPI',
//         component: GetApiComponent
//     },
//     {
//         path: 'postAPI',
//         component: PostApiComponent
//     }
// ];


// export const routes: Routes = [
//   { path: '', redirectTo: '/firstChild', pathMatch: 'full' },
//   { path: 'firstChild', component: FirstChildComponent },
//   { 
//     path: 'secondChild', 
//     component: SecondChildComponent, 
//     data: { some_data: 'Static data passed via route' } 
//   },
// ];

export const routes: Routes = [
    {
        path: '',
        children:[
            {
                path: '',
                loadChildren: () => import('./module/module1/module1.module').then(m => m.Module1Module)
            },
            {
                path: 'module1',
                loadChildren: () => import('./module/module1/module1.module').then(m => m.Module1Module)
            }
        ]
    },
    // {path: '', redirectTo: 'module1', pathMatch: 'full'},
    // {path: 'module1', loadChildren: () => import('./module/module1/module1.module').then(m => m.Module1Module)},
    {path: 'module2', loadChildren: () => import('./module/module2/module2.module').then(m => m.Module2Module)},
    {
        path: 'emp-list',
        component: EmployeeListComponent
    },
];