import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('password') passwordRef!:ElementRef;
  @ViewChild('togglePassword') togglePasswordRef!:ElementRef;
  
  loginForm= this.fb.group({
    email:[localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password:['', [Validators.required,Validators.minLength(6)]],
    remember:[localStorage.getItem('remember') || '' ]
  })

  constructor( private fb:FormBuilder, private router:Router,private loginAuthService: AuthService,private storeservice:LocalstorageService) { }

  ngOnInit(): void {
    this.storeservice.clear();

    this.loginForm= this.fb.group({
      email: "emalcap@gmail.com",
      password: "3Lmermesias"
    })
  
  }
  async login(){
     //console.log(this.loginForm.value)
     this.loginAuthService.loginUser([
      this.loginForm.value.email,
      this.loginForm.value.password
    ]).subscribe({
      next: (data) => {
    
        console.log(data)
        if (data.isExitoso == true ){
          this.router.navigate(['dashboard'])
          this.storeservice.set('localStoreUsuario',data.resultado)
        }
        else{
         alert( 'Ingrese credenciales validos')
        }
      }
    })
    
  }
} 
 
