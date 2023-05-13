import { Component, OnInit, ViewChild } from '@angular/core';
    import { Chart } from 'chart.js';
// import { Chart } from "angular-highcharts";




@Component({
  selector: 'app-rateofeffusion',
  templateUrl: './rateofeffusion.component.html',
  styleUrls: ['./rateofeffusion.component.scss']
})
export class RateofeffusionComponent {
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
  //     text:'Rate of effusion'
  //   },

  //   xAxis:{
  //     categories:['jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec']
  //   },
  //   yAxis:{
  //     tickPositions: [0, 50, 100, 150, 200, 250,300],
  //     title:{
  //       text:'Rate of effusion'
  //     }
  //   },
  //   series:[
  //     {
  //       name:"Time of effusion",
  //       type:"line",
  //       color:'red',
  //       data:[200,115,220,235,250,300,270,285,290,105,110,105,130,135]
  //     },

  //   ],
  //   credits:{
  //     enabled:false
  //   }
  // })
  constructor(){}
  ngonit(){}
  canvas: any;
    ctx: any;
    @ViewChild('mychart') mychart: any;

    ngAfterViewInit() {
        this.canvas = this.mychart.nativeElement;
        this.ctx = this.canvas.getContext('2d');

        new Chart(this.ctx, {
            type: 'bar',
            // data: {
            //     datasets: [{
            //         label: 'Current Vallue',
            //         data: [0, 20, 40, 50],
            //         backgroundColor: "rgb(115 185 243 / 65%)",
            //         borderColor: "#007ee7",
            //         fill: true,
            //     },
            //     {
            //         label: 'Invested Amount',
            //         data: [0, 20, 40, 60, 80],
            //         backgroundColor: "#47a0e8",
            //         borderColor: "#007ee7",
            //         fill: true,
            //     }],
            //     labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
            // },
            data : {

              datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1
              },
              {
                label: 'My Second Dataset',
                data: [85, 79, 70, 66, 62, 58, 50],
                backgroundColor: [
                  'red',
                  'yellow',
                  'blue',
                  'green',
                  'purple',
                  'pink',
                  'black'
                ],
                borderColor: [
                  'red',
                  'yellow',
                  'blue',
                  'green',
                  'purple',
                  'pink',
                  'black'
                ],
                borderWidth: 1
              }
            ]
            }

        });
    }
}
