import { Component,OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';

import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from '../model/custom-validators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Register } from '../model/register';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  register:any;
email!:String
hide=true;
disabled = true;
displaypassword= true;
displayconfirmpassword= true;
public confirmPassword:String=""
public password :String=""
CustomValidators!:String;
color = true;
  colord = true;
  changeTypepassword: boolean = true;
  changeTypeconfirmpassword: boolean = true;
  passwordChange: boolean = true;
  changeTyped: boolean = true;
  pass = true;
  passcp = true;


 public  formGroup: FormGroup;

  constructor(private registerService :RegisterService , private activeRouter:ActivatedRoute) {
    this.formGroup=new FormGroup({
    password:new FormControl("",[Validators.required]),
    confirmPassword:new FormControl("",[Validators.required])
    },
    [CustomValidators.MatchValidator('password', 'confirmPassword')]
    );

  }


  ngOnInit(): void {
    this.register=new Register();

  }
  updatePassword(){
    console.log(this.register,"1");
    this.email=this.activeRouter.snapshot.params['email'];
    console.log(this.email,"2");
    this.register.email = this.email;
    console.log( this.register.email,"3");

    // this.registerService.Update(this.register).subscribe((doc:any)=>{})
    // console.log(this.register,123456789);

  }
  get passwordMatchError() {
    return (
      this.formGroup.getError('mismatch') &&
      this.formGroup.get('confirmPassword')?.touched
    );
  }
  confirmPasswordError(){
    this.displayconfirmpassword=false
  }
  PasswordError(){
    this.displaypassword=false
  }
  sweetalert(){


      Swal.fire({
        position:'center',
        icon: 'success',
        title: 'Password updated successfully',
        showConfirmButton: false,
        timer: 1500
      })

  }

  visible() {
    this.changeTypepassword = !this.changeTypepassword;
    this.color = !this.color;
    this.pass = !this.pass;
  }
  cpvisible() {
    this.changeTypeconfirmpassword = !this.changeTypeconfirmpassword;
    this.passcp = !this.passcp;
    this.colord = !this.colord;
  }


}
