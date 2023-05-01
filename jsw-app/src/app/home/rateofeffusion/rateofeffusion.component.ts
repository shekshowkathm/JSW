import { Component } from '@angular/core';
import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-rateofeffusion',
  templateUrl: './rateofeffusion.component.html',
  styleUrls: ['./rateofeffusion.component.scss']
})
export class RateofeffusionComponent {
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
      text:'Rate of effusion'
    },

    xAxis:{
      categories:['jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec']
    },
    yAxis:{
      tickPositions: [0, 50, 100, 150, 200, 250,300],
      title:{
        text:'Rate of effusion'
      }
    },
    series:[
      {
        name:"Time of effusion",
        type:"line",
        color:'red',
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
