import { Component } from '@angular/core';
import { Chart } from "angular-highcharts";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  firstArray:any;
  chart=new Chart({
    chart:{
      type:'line',
      height:475,
      backgroundColor: '#fff',
      // borderTopRightRadius:12
      borderRadius: 12
      // style:{
      //   borderTopRightRadius: 10
      // }

    },
    title:{
      text:'Total analysis'
    },

    xAxis:{
      categories:['jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec']
    },
    yAxis:{
      tickPositions: [0, 50, 100, 150, 200, 250,300,350],
      title:{
        text:'Revenue in $'
      }
    },
    series:[
      {
        name:"Consumption",
        type:"line",
        color:'yellow',
        data:[200,215,220,235,250,265,270,285,290,305,310,105,130,135]

      },
      {
        name:"Diffusion",
        type:"line",
        color:'gray',
        data:[23,29,33,39,42,49,52,59,62,69,120,125,130,135]
      },
      {
        name:"Effusion",
        type:"line",
        color:'blue',
        data:[72,79,82,89,92,99,102,109,112,118,122,129,132,139]
      }
    ],
    credits:{
      enabled:false
    }
  })
  lossofconsumption=new Chart({
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
      text:'Loss of consumption'
    },

    xAxis:{
      categories:['jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec']
    },
    yAxis:{
      tickPositions: [0, 50, 100, 150, 200, 250,300],
      title:{
        text:'Rate of consumption'
      }
    },
    series:[
      {
        name:"Time of consumption",
        type:"line",
        color:'yellow',
        data:[200,215,220,235,250,265,270,285,290,105,110,105,130,135]
      },

    ],
    credits:{
      enabled:false
    }
  })
  rateofdiffusion=new Chart({
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
  rateofeffusion=new Chart({
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
  rateofemission=new Chart({
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



  constructor(){

  }
  ngonit(){}

}
