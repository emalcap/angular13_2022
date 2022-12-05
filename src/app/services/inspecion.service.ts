import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInspetion, Inspetion } from '../interfaces/IInspetion';
import { Istatus } from '../interfaces/Istatus';
import { ResponseAPI } from '../interfaces/ResposeAPI';

@Injectable({
  providedIn: 'root'
})
export class InspecionService {

 

 constructor(private http:HttpClient) { }

  baseServeURL = 'https://localhost:7212/api/'
  iIspetion : IInspetion[] =[]
  listaIspection: Inspetion[] = [];
  lsitarIstatus : Istatus[] = [];

  
  loadSatatus(){
    this.baseServeURL =   this.baseServeURL +'fgfgfg';
    this.http.get<ResponseAPI>(this.baseServeURL)
    .subscribe(resp => {
      this.lsitarIstatus = resp.resultado;
      
    })
 

  }


    loadInspectionType(id:number){  
   
      if (id ===0){
          return this.http.get<ResponseAPI>(`${this.baseServeURL}InspectionType`)
       }
       else {
 
         return this.http.get<ResponseAPI>(`${this.baseServeURL}InspectionType?id=${id}`)
       }
 
     }


    loadInspection(id:number){  
      
      if (id === 0){
        return this.http.get<IInspetion>(`${this.baseServeURL}Inspection`)
       }
       else {
   
         return this.http.get<IInspetion>(`${this.baseServeURL}Inspection/${id}`)
       }
       
     }
/*
     loadInspetion(id:number){
   
      if (id ===0){    
      
      this.http.get<IIspetion>(this.baseServeURL+'Inspection')
      .subscribe(resp => {       
         if (resp.isExitoso == true){
           //console.log(resp.resultado);
            this.listaIspection = resp.resultado;           
         }
         else 
         {
          this.listaIspection = [];
         }
          
      })
      
     } 
  
     if (id > 0){
      
      this.http.get<IIspetion>(this.baseServeURL+`Inspection/${id}`)
      .subscribe({
        next: (data) => {
          //console.log(data)
          if (data.isExitoso == true ){
            this.listaIspection = data.resultado
            //console.log(this.listaIIspetion)
          }
          else{
            this.listaIspection=[];
           }
        }
      })
     }
  
    }
    */

    addInspection(data:any){

      return this.http.post(this.baseServeURL+'Inspection',data)
     }

     updateInspection(id:number|string,   data:any){
      return this.http.put(this.baseServeURL+`Inspection/${id}`,data)
     }
     deleteInspection(id:number|string){
      return this.http.delete(this.baseServeURL+`Inspection/${id}`)
     }

}
