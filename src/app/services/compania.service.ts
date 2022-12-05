import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compania, IDataCompania } from '../interfaces/IDatacompania';

@Injectable({
  providedIn: 'root'
})
export class CompaniaService {

  constructor(private http:HttpClient) { }

  companiaUrl:string = 'https://localhost:7212/api/'; 
  dataCompania: Compania[] = [];
  
  listarCompania(){    
   return this.http.get<IDataCompania>(this.companiaUrl+'Compania')    
 }
}
