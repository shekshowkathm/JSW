import { Component } from '@angular/core';
import { Chart } from "angular-highcharts";
import { DashboardService } from '../service/dashboard.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // opened=this.dashboardService.isSideNavOpen;
  opened=false




  showFiller = false;

  public color="red";
  intervalId: any;

  chart=new Chart({
    chart:{
      type:'line',
      height:325

    },
    title:{
      text:'month wise sale'
    },
    xAxis:{
      categories:['jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec']
    },
    yAxis:{
      title:{
        text:'Revenue in $'
      }
    },
    series:[
      {
        name:"Arizona",
        type:"line",
        color:'yellow',
        data:[200,215,220,235,250,265,270,285,290,305,310,105,130,135]
      },
      {
        name:"brazil",
        type:"line",
        color:'gray',
        data:[23,29,33,39,42,49,52,59,62,69,120,125,130,135]
      },
      {
        name:"germany",
        type:"line",
        color:'blue',
        data:[72,79,82,89,92,99,102,109,112,118,122,129,132,139]
      }
    ],
    credits:{
      enabled:false
    }
  })
  hasBackdrop=true;
  // clickEventSubscription:Subscription;

  constructor(private dashboardService:DashboardService){
    // this.opened=this.dashboardService.isSideNavOpen
    // this.clickEventSubscription=this.dashboardService.getEvent().subscribe(()=>{
    //   this.ggggg();
    // })
    // this.intervalId = setInterval(() => {
    //   console.log('Logging a message every second.');
    //   this.opened
    // }, 22200);
  }
  ngonit(){

  }
  ggggg(){
    console.log("1111111111111111111111111111111");
  }
  //  isSideNavOpen(): boolean {
  //   return this.dashboardService.isSideNavOpen;
  onOpenSideNav() {
    this.opened = !this.opened;
  }

  // }
  method1(){
    this.color="red"
  }
  method2(){
    this.color="blue"
  }
  method3(){
    this.color="green"
  }
  method4(){
    this.color="yellow"
  }
  method5(){
    this.color="pink"
  }
}
