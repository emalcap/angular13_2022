import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SiderbarService {

  constructor(private http:HttpClient) { }

  

  menu:any[]=[
    {
      titulo : "Dashboard",
      icono:"right fas fa-angle-left",
      submenu:[
        {titulo:"Employee",url:"employee",icono:"fa fa-user" ,idMenu : 2,idparde : 1},
        {titulo:"Usaurios",url:"usuarios",icono:"fa fa-user" ,idMenu : 3,idparde : 1},
        {titulo:"Productos",url:"producto",icono:"fa fa-cubes" ,idMenu : 4,idparde : 1},
        {titulo:"Compania",url:"compania",icono:"fa fa-cubes" ,idMenu : 5,idparde : 1},
        {titulo:"Clientes",url:"cliente",icono:"fa fa-user-circle",idMenu : 6,midparde : 1},
        {titulo:"Inspection",url:"inspection",icono:"fa fa-user-circle",idMenu : 7,midparde : 1}
      ]
      ,idMenu : 1
      ,idPadre :  0
    }
  ]

  modulos: any[] = [    
    {titulo:"Dashboard",url:"Dashboard",icono:"fa fa-user" ,idMenu : 1,idParde : 0,Nivel : 1},
    {titulo:"Usaurios",url:"usuarios",icono:"fa fa-user" ,idMenu : 2,idParde : 1,Nivel : 1},
    {titulo:"Productos",url:"producto",icono:"fa fa-cubes" ,idMenu : 3,idParde : 1,Nivel : 1},
    {titulo:"Clientes",url:"cliente",icono:"fa fa-user-circle",idMenu : 4,idParde : 1,Nivel : 1},
    {titulo:"Perfil",url:"Perfil",icono:"fa fa-user-circle",idMenu : 5,idParde : 0,Nivel : 2},
    {titulo:"PerfilMenu",url:"PerfilMenu",icono:"fa fa-user-circle",idMenu : 6,idParde : 5,Nivel : 2},
    {titulo:"Manteminiento",url:"Manteminiento",icono:"fa fa-user-circle",idMenu : 7,idParde : 0,Nivel : 3},
  ]
 
 

}
