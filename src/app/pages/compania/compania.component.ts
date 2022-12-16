import { Component, OnInit,Input } from '@angular/core';
import { Compania, IDataCompania } from 'src/app/interfaces/IDatacompania';
import { CompaniaService } from '../../services/compania.service';
import { FormBuilder, Validators ,FormControl,FormGroup} from '@angular/forms';


@Component({
  selector: 'app-compania',
  templateUrl: './compania.component.html',
  styleUrls: ['./compania.component.css']
})
export class CompaniaComponent implements OnInit {



  lista:string[]=["hola","que","tal", "estas"]; 
  
  //@Input() dataEntranteInput:any;

  constructor(private companiaServices:CompaniaService,private fb :FormBuilder) { }

  lstCompania: Compania[] = [];
  dataCompania: Compania []= [];

  frmComapia= this.fb.group({
    id:             ['0'],
    nombreCompania:[''],
    direccion:      [''],
    telefono:       [''],
    telefono2:     [''],
  })

  ngOnInit(): void {
    this.mostrarComapania();
    
  }

 
  mostrarComapania (){
    this.companiaServices.listarCompania()
      .subscribe({
      next: (data) => {
        if (data.isExitoso){
          this.lstCompania = data.resultado;
          //console.log(this.lstCompania)
        }
          
        else
        this.lstCompania = [];
      },
      error: (e) => {
      },
      complete: () => {

      }
    })
    
  }
  modalNewCampania(){
    this.frmComapia= this.fb.group({
      id:             [0],
      nombreCompania:[''],
      direccion:      [''],
      telefono:       [''],
      telefono2:     [''],
      mantenimiento: ['I']
    })
  }
  modalEdit (dataCompania:Compania){
      if (dataCompania.id > 0){

        this.frmComapia= this.fb.group({
          id:             [dataCompania.id],
          nombreCompania:[dataCompania.nombreCompania],
          direccion:      [dataCompania.direccion],
          telefono:       [dataCompania.telefono],
          telefono2:     [dataCompania.telefono2],
          mantenimiento: ['U']
          
        })

      }

  }

  mantComapnia(){
    const  _compania: Compania = {
      id: this.frmComapia.value.id == null ? 0 : this.frmComapia.value.id ,
      mantenimiento : this.frmComapia.value.mantenimiento,
      nombreCompania:  this.frmComapia.value.nombreCompania ,
      direccion: this.frmComapia.value.direccion ,
      telefono:  this.frmComapia.value.telefono,      
      telefono2:this.frmComapia.value.telefono2,
     
    }
    //console.log(_compania)
    
  
  

    this.companiaServices.updateCampania( _compania.id, _compania)
  .subscribe({
            next: (data) => {
                console.log(data)
                if (data.isExitoso == true ){
                  this.frmComapia.reset();
                  this.mostrarComapania()                  
                }
                else{
                alert(data.mensaje)
                }
            }
        })
 }


  delete(compania:Compania){
    //alert(compania.id)
    this.companiaServices.deleteCampania( compania.id)
    .subscribe({
      next: (data) => {
          console.log(data)
          if (data.isExitoso == true ){
            this.mostrarComapania()                  
          }
          else{
          alert( data.mensaje)
          }
      }
  })

  }

}
