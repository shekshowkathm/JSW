import { Component } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import  Swal from "sweetalert2";

interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  foods: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'others', viewValue: 'Others'},
  ];

  public color='red';
  displayProgressBar=false;
  currentColor: string = 'red';

  submitted=false;
  registrationForm!: FormGroup;
  loginForm!: FormGroup;
  constructor(private router: Router,private registerService:RegisterService,private formBuilder:FormBuilder){}
  ngOnInit(): void {

    this.registerService.currentColor.subscribe((color:any)=>{
      this.currentColor = color
    })
    this.registrationForm = new FormGroup({
      name: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(8)])
    });
    this.loginForm=new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(8)])
    });


  }
  switchToReg(){
    this.displayProgressBar=true
    setTimeout(() => {
      console.log("Submit clicked");
      this.displayProgressBar=false
      this.currentColor='blue'
      this.color='blue'

    }, 500);

  }
  switchToLog(){
    this.displayProgressBar=true
    setTimeout(() => {
      console.log("Submit clicked");
      this.displayProgressBar=false
      this.currentColor='red'
      this.color='red'

    }, 500);

  }

  onSubmit(){
    if (this.registrationForm.invalid) {
      alert("invalid form")
    }else{
      alert("Success")
    console.log(this.registrationForm.value);

      this.registerService.submitForm(this.registrationForm.value).subscribe((data:any)=>{
        console.log('POST request successful', data);
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        this.router.navigate(['/']);
      },error => console.log('Error', error)
      )
    }

  }

  loginSubmit(){
    console.log(this.loginForm.value);

  }
}
