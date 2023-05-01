import { Component,OnInit } from '@angular/core';
import { Chart } from "angular-highcharts";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lossofconsumption',
  templateUrl: './lossofconsumption.component.html',
  styleUrls: ['./lossofconsumption.component.scss']
})
export class LossofconsumptionComponent {
  firstArray:any;
  stringsArray: string[] = [];
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
        data:[200,215,220,235,250,265,270,285,290,105,110,105,130,130]
      },

    ],
    credits:{
      enabled:false
    }
  })
  constructor(){}
  ngOnInit(): void {
    console.log(this.chart['options'].series[0].data);
    this.firstArray=this.chart['options'].series[0].data
    this.stringsArray=this.chart['options'].series[0].data
    console.log(this.firstArray);
    console.log(this.stringsArray);

    if (this.firstArray[this.firstArray.length - 1] > 129) {
      alert("Decrease pressure");
      console.log("Alert Alert");

    }
    if (parseInt(this.stringsArray[this.stringsArray.length - 1]) > 129) {
      alert("Decrease pressure quickly");
      console.log("Alert Alert");
      Swal.fire({
        title: '🚨ALERT🚨',
        text: "High level of pressure",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Decrese it now',
        
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Optimized!',
            'Pressure level has been optimized',
            'success'
          )
        }
      })
    }


  }
}
