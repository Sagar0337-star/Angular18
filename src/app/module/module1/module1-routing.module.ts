import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './component1/sign-in/sign-in.component';
import { SingOutComponent } from './component1/sing-out/sing-out.component';

const routes: Routes = [
  {path: '', component: SignInComponent},
  // {path: 'module1', component: SignInComponent},
  {path: 'signout', component: SingOutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
