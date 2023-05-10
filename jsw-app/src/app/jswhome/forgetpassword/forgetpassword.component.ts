import { Component, OnInit } from '@angular/core';
// import { Register } from '../model/register';
import { Forgetpassword } from '../model/forgetpassword';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from '../model/register';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  // forgetpassword!:Forgetpassword;

  register:any;

displayemail= true;
  public formGroup: FormGroup;

  constructor(private registerService : RegisterService,private router:Router ){
    this.formGroup=new FormGroup({
      email:new FormControl("",[Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]),
      })
   }

  ngOnInit(): void {
    this.register=new Register();


  }
getForgotPassword(_item: any){


  this.registerService.getEmail(_item).subscribe((ulrimg)=>{
    console.log(ulrimg,"email");
    const arr=ulrimg;

    if(arr.length){
      console.log("next page")
      this.router.navigateByUrl('/resetpassword');
      this.router.navigate(['/resetpassword',_item]);
      console.log(_item,"123456789123456789");
    }else{
    this.router.navigateByUrl('/forgotpassword');
    console.log(" page");
    window.location.reload();
    }

  })
  this.reset();

}
reset(){
  this.register.email="";
}

emailError(){
  this.displayemail=false

}
}



