import { Component, OnInit } from '@angular/core';
import { Monitor } from '../monitor';
import { GraphService } from 'src/app/jswhome/service/graph.service';

@Component({
  selector: 'app-monitersheader',
  templateUrl: './monitersheader.component.html',
  styleUrls: ['./monitersheader.component.scss']
})
export class MonitersheaderComponent implements OnInit {

  ngOnInit(): void {
    this.mydata = this.myData;
  }
  displayedColumns:string[]=['slno','location','ppm','icons']
  public mydata : any;

  constructor(private graphService:GraphService){}

  myData = [
    { slno:'1',location:'BF-1 GCP',ppm:'210' },
    { slno:'2',location:'BF-1 GCP',ppm:'180' },
    { slno:'3',location:'BF-1 CONTROL ROOM',ppm:'160' },
    { slno:'4',location:'BF-1 FURNACE',ppm:'130' },
    { slno:'5',location:'BF-1 HUSK STORAGE',ppm:'50' }
  ];

  viewGraph(location: string) {
    console.log(location);
    this.graphService.changeGraph(location);
  }

}
