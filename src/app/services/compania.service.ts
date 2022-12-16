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

 onRegisterCampania(request:Compania){   
  return this.http.post<Compania>(`${this.companiaUrl}Compania`, request, { headers: { 'Content-Type': 'application/json;charset=utf-8' }})
  }

 updateCampania(id :number, request:Compania){   
  return this.http.put<IDataCompania>(`${this.companiaUrl}Compania/${id}`, request, { headers: { 'Content-Type': 'application/json;charset=utf-8' }})
  }

  deleteCampania(id :number){
    alert(`${id}`)   
    return this.http.delete<IDataCompania>(`${this.companiaUrl}Compania/${id}`)
    }
  
  

}
