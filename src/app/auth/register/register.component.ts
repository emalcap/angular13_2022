import { Component, ElementRef, OnInit, ViewChild,} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/IUsuario';

import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('password') passwordRef!:ElementRef;
  @ViewChild('togglePassword') togglePasswordRef!:ElementRef;
  
    registerForm= this.fb.group({
    usuario:['', [Validators.required,Validators.minLength(6)]],
    email:[localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password:['', [Validators.required]],
    remember:[localStorage.getItem('remember') || '' ]
  })

  constructor(private fb:FormBuilder, private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

   

  onRegister (){
          /*
          console.log(this.registerForm.value)
          this.registerForm.value.email,
          this.registerForm.value.password
        */
        const  _usuario: IUsuario = {
            Mantenimiento : "I",
            IdUsaurio:  this.registerForm.value.IdUsaurio == null ? 0 : this.registerForm.value.IdUsaurio ,
            IdPersona: this.registerForm.value.IdPersona == null ? 0 : this.registerForm.value.IdPersona ,
            usuario:  this.registerForm.value.usuario,    
            clave: this.registerForm.value.password,
            email:this.registerForm.value.email,
            registroActivo:1
          }



    this.authService.onRegisterUser(_usuario)
        .subscribe({
                  next: (data) => {
                      console.log(data)
                      if (data.isExitoso == true ){
                        this.router.navigate(['login'])                        
                      }
                      else{
                      alert( 'Ingrese credenciales validos')
                      }
      }
    })

    
  }

}
