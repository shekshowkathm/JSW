import { Component } from '@angular/core';
import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-rateofemissions',
  templateUrl: './rateofemissions.component.html',
  styleUrls: ['./rateofemissions.component.scss']
})
export class RateofemissionsComponent {
  chart=new Chart({
    chart:{
      type:'line',
      height:475,
      backgroundColor: '#fff',
      // borderTopRightRadius:12
      borderRadius: 12,
      width: 1000
      // style:{
      //   borderTopRightRadius: 10
      // }

    },
    title:{
      text:'Rate of emissions'
    },

    xAxis:{
      categories:['jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec']
    },
    yAxis:{
      tickPositions: [0, 50, 100, 150, 200, 250,300],
      title:{
        text:'Rate of emissions'
      }
    },
    series:[
      {
        name:"Time of emissions",
        type:"line",
        color:'green',
        data:[200,115,220,235,250,300,270,285,290,105,110,105,130,135]
      },

    ],
    credits:{
      enabled:false
    }
  })
  constructor(){}
  ngonit(){}
}
