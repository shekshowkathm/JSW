import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  @Output() openSideNav = new EventEmitter<void>();
  constructor(private dashboardService:DashboardService){}
  ngonit(){}
  toggleSideNav() {
    this.dashboardService.isSideNavOpen = !this.dashboardService.isSideNavOpen;
    // this.dashboardService.sendClickEvent();
    console.log(this.dashboardService.isSideNavOpen);

    console.log("22222222222222222222222222222222");

  }
}
