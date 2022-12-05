import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { SiderbarService } from 'src/app/services/siderbar.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent implements OnInit {

  menuItems?:any[];
  modulos?:any[];

  datoUsuario ={
    usuario :'',
    idUsaurio: 0
    
  };


  constructor( private siderbarService: SiderbarService, private router:Router,storeUsuario:LocalstorageService) { 
   this.menuItems= this.siderbarService.menu;
   //console.log(this.menuItems)
   this.modulos =  this.siderbarService.modulos;
   this.datoUsuario =  storeUsuario.get('localStoreUsuario');
    //console.log(this.datoUsuario); 
   //console.log(this.datoUsuario.usuario);
   
       
  }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl('/login');
  }

}
