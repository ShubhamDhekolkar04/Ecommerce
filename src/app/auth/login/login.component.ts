import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router,private apiService:ApiServiceService) { }

  ngOnInit(): void { }


  loginForm=new FormGroup({
    email: new FormControl("",[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password: new FormControl("",[Validators.required, Validators.minLength(8)]),

  })

  get email(){
    return this.loginForm.get('email');
  }

  get pass(){
    return this.loginForm.get('password');
  }

  login(){
    this.apiService.loginUser(this.loginForm.value).subscribe((res)=>{
      if(!res.error)
      {
        console.log(res.response.email);
        console.log(res.response.role);
        window.alert("login successfull")
        localStorage.setItem('token',JSON.stringify(res.token))
        if(res.response.role==='admin'){
          this.router.navigate(['/admin/adminpage'])
        }else{
          this.router.navigate(['/products','home'])
        }
        
      }
    })

  }

}
