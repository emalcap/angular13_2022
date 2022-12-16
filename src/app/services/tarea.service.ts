import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITarea, Tarea } from '../interfaces/ITarea';

@Injectable({
  providedIn: 'root'
})

export class TareaService {

  constructor( private http:HttpClient) { }

  tareaUrl:string = 'https://localhost:7212/api/';  
  
  listarTarea(){    
   
   return this.http.get<ITarea>(this.tareaUrl+'Tareas')    
 }
 mantTarea(request:Tarea[]){
  return this.http.post<ITarea>(`${this.tareaUrl}Tareas`, request, { headers: { 'Content-Type': 'application/json;charset=utf-8' }})
   
 }


}
