import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'', loadChildren:()=>import('./jswhome/jswhome.module').then(m=>m.JswhomeModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
