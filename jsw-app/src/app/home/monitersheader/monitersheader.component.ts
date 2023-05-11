import { Component, OnInit } from '@angular/core';
import { Monitor } from '../monitor';
import { RegisterService } from 'src/app/jswhome/service/register.service';
import jwtDecode from 'jwt-decode';
import { Gasalert } from 'src/app/jswhome/model/gasalert';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-monitersheader',
  templateUrl: './monitersheader.component.html',
  styleUrls: ['./monitersheader.component.scss']
})

export class MonitersheaderComponent implements OnInit {
  ngOnChanges(){
    const token = localStorage.getItem('jwtToken');
    console.log(token);

    if (token) {
      try {
        // Decode the token
        const decodedToken: any = jwtDecode(token);

        // Extract the "sub" claim from the decoded token
        const sub = decodedToken.sub;

        // Log the "sub" claim
        console.log(sub);
        this.extractEmail=sub
        this.gassu=sub;
        console.log(this.extractEmail);

      } catch (error) {
        console.log('Invalid token:', error);
      }
    } else {
      console.log('Token not found in local storage');
    }

  }
  gassu:Gasalert=new Gasalert();

 extractEmail!:string;
 token!:any;
 payloadSub!:any;

  myData = [
    { slno: '1', location: 'BF-1 GCP', ppm: '201' },
    { slno: '2', location: 'BF-1 GCP', ppm: '200' },
    { slno: '3', location: 'BF-1 CONTROL ROOM', ppm: '160' },
    { slno: '4', location: 'BF-1 FURNACE', ppm: '130' },
    { slno: '5', location: 'BF-1 HUSK STORAGE', ppm: '50' }
  ];


  ngOnInit(): void {

    this.mydata = this.myData;
    for (let item of this.myData) {
      if (parseInt(item.ppm) > 200) {
        alert("ppm high level")
        this.triggerAlert();
        break;
      }
    }

  }
  displayedColumns:string[]=['slno','location','ppm']
  public mydata : any;

  constructor(private registerService : RegisterService) {
    this.token = localStorage.getItem('token');
    console.log(this.token);
    this.payloadSub = jwt_decode(this.token);
    console.log(this.payloadSub);
    console.log(this.payloadSub.sub);
    this.gassu.email=this.payloadSub.sub
    console.log(this.gassu.email);




}

triggerAlert(){
  console.log(this.gassu);

  this.registerService.showAlert(this.gassu).subscribe((data:any)=>{

    console.log(data);

  })
}











}
