import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ClientesComponent } from './clientes/clientes.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthService } from '../services/auth.service';
import { LocalstorageService } from '../services/localstorage.service';
import { SiderbarService } from '../services/siderbar.service';
import { InspectionComponent } from './inspection/inspection.component';
import { InspecionService } from '../services/inspecion.service';
import { CompaniaComponent } from './compania/compania.component';
import { CompaniaService } from '../services/compania.service';
import { PopuInspectionComponent } from './inspection/popu-inspection/popu-inspection.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    PagesComponent,
    ClientesComponent,
    EmployeeComponent,
    InspectionComponent,
    CompaniaComponent,
    PopuInspectionComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule, 
    //EMP
    HttpClientModule, 
    FormsModule,  
    ReactiveFormsModule,
    
  ],
  exports:[
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,  
    ClientesComponent,
    InspectionComponent,
    CompaniaComponent,
    PopuInspectionComponent,
    
    
  ],
  providers:[
    SiderbarService,
    AuthService,
    LocalstorageService,
    InspecionService,
    CompaniaService
  ]
})
export class PagesModule { }
