import { Component } from '@angular/core';
import { Chart } from 'chart.js';

// import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-rateofemissions',
  templateUrl: './rateofemissions.component.html',
  styleUrls: ['./rateofemissions.component.scss']
})
export class RateofemissionsComponent {
  // chart=new Chart({
  //   chart:{
  //     type:'line',
  //     height:475,
  //     backgroundColor: '#fff',
  //     // borderTopRightRadius:12
  //     borderRadius: 12,
  //     width: 1000
  //     // style:{
  //     //   borderTopRightRadius: 10
  //     // }

  //   },
  //   title:{
  //     text:'Rate of emissions'
  //   },

  //   xAxis:{
  //     categories:['jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec']
  //   },
  //   yAxis:{
  //     tickPositions: [0, 50, 100, 150, 200, 250,300],
  //     title:{
  //       text:'Rate of emissions'
  //     }
  //   },
  //   series:[
  //     {
  //       name:"Time of emissions",
  //       type:"line",
  //       color:'green',
  //       data:[200,115,220,235,250,300,270,285,290,105,110,105,130,135]
  //     },

  //   ],
  //   credits:{
  //     enabled:false
  //   }
  // })

  public chart: any;
  constructor(){}
  ngOnInit(): void {
    this.createChart();
  }


  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
	       datasets: [
          {
            label: "Sales",
            data: [370,473,492,500,535,550,570,690],
            backgroundColor: 'blue'
          },
          // {
          //   label: "Profit",
          //   data: [550,573,592,600,635,650,670,690],
          //   backgroundColor: 'limegreen'
          // }
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }


}
