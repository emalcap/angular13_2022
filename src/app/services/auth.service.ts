import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseAPI } from '../interfaces/ResposeAPI';
import { IUsuario } from '../interfaces/IUsuario';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
 constructor( private http:HttpClient){ }
 
 baseServeURL = 'https://localhost:7212/api/'

loginUser(loginInfo:Array<string>){  
  
  return this.http.get<ResponseAPI>(`${this.baseServeURL}Usuario?email=${loginInfo[0]}&clave=${loginInfo[1]}`)

  }

  onRegisterUser(request:IUsuario){    
    
    return this.http.post<ResponseAPI>(`${this.baseServeURL}Usuario`, request, { headers: { 'Content-Type': 'application/json;charset=utf-8' }})
  
    }
    



}
