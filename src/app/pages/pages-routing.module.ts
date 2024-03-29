import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EmployeeComponent } from './employee/employee.component';
import { InspectionComponent } from './inspection/inspection.component';
import { CompaniaComponent } from './compania/compania.component';
import { TareaComponent } from './tarea/tarea.component';
import { CreditoComponent } from './credito/credito.component';

//emp
const routers:Routes =[
  {path:'dashboard',component:PagesComponent,
  children:[
    {path:'',component:DashboardComponent,data:{titulo:'Dashboard'}},
    {path:'credito',component:CreditoComponent,data:{titulo:'Crédito'}},
    {path:'tarea',component:TareaComponent,data:{titulo:'tarea'}},
    {path:'compania',component:CompaniaComponent,data:{titulo:'Compania'}},
    {path:'inspection',component:InspectionComponent,data:{titulo:'Inspection'}},
    {path:'employee',component:EmployeeComponent,data:{titulo:'Employee'}},
    {path:'usuarios',component:UsuariosComponent,data:{titulo:'Usuario'}},
    {path:'producto',component:ProductosComponent,data:{titulo:'Producto'}},    
    {path:'cliente',component:ClientesComponent,data:{titulo:'Cliente'}},
    {path:'fecha',component:ClientesComponent,data:{titulo:'Fecha'}},
    
    /* para aparcer en el titulo
    {path:'',component:DashboardComponent},
    {path:'usuarios',component:UsuariosComponent},
    {path:'producto',component:ProductosComponent},
    {path:'cliente',component:ClientesComponent}
    */
  ]
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //emp
    RouterModule.forChild(routers)
  ],
  exports:[
    RouterModule
  ]
})
export class PagesRoutingModule { }
