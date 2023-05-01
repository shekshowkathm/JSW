import { Component } from '@angular/core';
import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-rateofdiffusion',
  templateUrl: './rateofdiffusion.component.html',
  styleUrls: ['./rateofdiffusion.component.scss']
})
export class RateofdiffusionComponent {
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
      text:'Rate of diffusion'
    },

    xAxis:{
      categories:['jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec']
    },
    yAxis:{
      tickPositions: [0, 50, 100, 150, 200, 250,300],
      title:{
        text:'Rate of diffusion'
      }
    },
    series:[
      {
        name:"Time of diffusion",
        type:"line",
        color:'blue',
        data:[200,215,120,235,250,265,270,285,290,105,110,105,130,135]
      },

    ],
    credits:{
      enabled:false
    }
  })
  constructor(){}
  ngonit(){}
}
