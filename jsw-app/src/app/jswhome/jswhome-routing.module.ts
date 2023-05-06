import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JswhomeComponent } from './jswhome/jswhome.component';

const routes: Routes = [
  {path:'',component:JswhomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JswhomeRoutingModule { }
