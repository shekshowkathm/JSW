import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MonitorComponent } from './monitor/monitor.component';
import { AuthGuard } from '../jswhome/shared/auth.guard';

const routes: Routes = [
  {path:'dashboard',component:HomeComponent,canActivate: [AuthGuard]},
  {path:'monitor',component:MonitorComponent,canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
