import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JswhomeComponent } from './jswhome/jswhome.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  {path:'',component:JswhomeComponent},
  {
    path:'forgetpassword',component:ForgetpasswordComponent
  },
  {
    path:'resetpassword/:email',component:ResetpasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JswhomeRoutingModule { }
