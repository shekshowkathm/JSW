import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { Monitor } from '../monitor';
import { RegisterService } from 'src/app/jswhome/service/register.service';
import jwtDecode from 'jwt-decode';
import { Gasalert } from 'src/app/jswhome/model/gasalert';
import jwt_decode from 'jwt-decode';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-monitersheader',
  templateUrl: './monitersheader.component.html',
  styleUrls: ['./monitersheader.component.scss'],
})
@Injectable()
export class MonitersheaderComponent implements OnInit {
  dataSource!: MatTableDataSource<Monitor>;

  alertData!: any[];

  gassu: Gasalert = new Gasalert();
  extractEmail!: string;
  token!: any;
  payloadSub!: any;
  ppmLevel!:string
  relevantLocation!:string





  displayedColumns: string[] = ['slno', 'location', 'ppm', 'date', 'time'];
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) matsort!: MatSort;






  constructor(private registerService: RegisterService) {
    this.token = localStorage.getItem('token');
    this.payloadSub = jwt_decode(this.token);
    this.gassu.email = this.payloadSub.sub;


  }
  ngOnChanges() {
    const token = localStorage.getItem('jwtToken');
    // console.log(token);
    if (token) {
      try {
        // Decode the token
        const decodedToken: any = jwtDecode(token);
        // Extract the "sub" claim from the decoded token
        const sub = decodedToken.sub;
        // Log the "sub" claim
        // console.log(sub);
        this.extractEmail = sub;
        this.gassu = sub;
        // console.log(this.extractEmail);
      } catch (error) {
        console.log('Invalid token:', error);
      }
    } else {
      console.log('Token not found in local storage');
    }
  }
  ngOnInit(): void {
    this.registerService.getAll().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      // console.log(this.dataSource);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matsort;
      this.alertData = response;
      console.log(this.alertData)
      for (let item of this.alertData) {
        console.log(item)
        if (parseInt(item.ppm)>=-30) {
          console.log("High level of ppm: " + item.ppm);
          console.log("Location: " + item.location);
          this.ppmLevel=item.ppm

          this.relevantLocation=item.location
          console.log(this.ppmLevel);
          console.log(this.relevantLocation);
          this.gassu.location=this.relevantLocation
          this.gassu.ppm=item.ppm

          this.triggerAlert();
          // break;
        }
      }
    });





  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  triggerAlert() {
    this.registerService.showAlert(this.gassu).subscribe((data: any) => {
      console.log(data);
    });
  }
  getGasWarnData(){
    this.registerService.getAll().subscribe((doc:any)=>{
      this.alertData=doc

    })
  }
}
