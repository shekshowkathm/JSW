import { Component } from '@angular/core';
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';

import { BnNgIdleService } from 'bn-ng-idle';
import { Router } from '@angular/router';
import { GraphService } from 'src/app/jswhome/service/graph.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent {

  public chart: any;
  currentGrah:string='total';
  constructor(private bnIdle: BnNgIdleService,private router:Router,private graphService:GraphService){}

  ngOnInit(): void {

    // //60 = 1 minute
    // this.bnIdle.startWatching(10).subscribe((res) => {
    //   if (res) {
    //     alert("are you there")
    //     console.log('session expired');
    //     this.router.navigate(['']);
    //     // this.router.navigateByUrl('logout');
    //   }
    // });
    this.graphService.currentgraph.subscribe((docu:any)=>{
      this.currentGrah=docu
      console.log(this.currentGrah + " monitor comp");

    })
    this.createChart();


  }

  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['BF-1 GCP', 'BF-1 CONTROL ROOM', 'BF-1 FURNACE	','BF-1 HUSK STORAGE',
								  ],
	       datasets: [
          {
            label: "Sales",
            data: [ '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },

        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }

}
