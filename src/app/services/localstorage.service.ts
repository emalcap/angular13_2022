import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  set (key:string ,data:any){    
     try{
        localStorage.setItem(key,JSON.stringify(data));
     } catch(e){
     console.log(e)
     }
  }
   // decodificar 
   
   get (key:string){
      
    try{
       //return  JSON.parse(localStorage.getItem(key));
       return JSON.parse(localStorage.getItem(key) || '');
        } catch(e){
        console.log(e);
        }
   }
   
   remove (key:string):void{
    try{
      localStorage.removeItem(key);
    }    

     catch(e){
      console.log('Error Removing key',e);
      }
   }
   // eliminar todo
   clear ():void{
    try{
      localStorage.clear();
    }    

     catch(e){
      console.log('Error Cleaning',e);
      }
   }

}
