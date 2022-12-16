import { Component, OnInit } from '@angular/core';

import { Tarea } from 'src/app/interfaces/ITarea';
import { TareaService } from 'src/app/services/tarea.service';


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  persona:any[] =[];
  lstPersona:any[]= []; 
  lstMantTarea: Tarea []= [];
  lstTarea: Tarea[] = [];

  constructor(private tareaServices:TareaService) { }

  ngOnInit(): void {
 
    this.listarTarea()
    this.listaPerson()
  }

  listarTarea(){
    this.tareaServices.listarTarea()
    .subscribe(response => {
      this.lstTarea = response.resultado;
  });
    
  }
  
  listaPerson(){

 
  this.persona = [
    {
      id :1,
      nombre :'Elmer Malca',
      edad :46,
      direccion :'El suro Chumbil',
      estado :1,
      sueldo :5500.00,
      mantenimiento:null
    },
    {
      id :2,
      nombre :'Luisa Paredes',
      edad :30,
      direccion :'Los Ecualitos',
      estado :1,
      sueldo :7700.89,
      mantenimiento:null
    },
    {
      id :3,
      nombre :'Jaimito Beily',
      edad :52,
      direccion :'Los EE UU',
      sueldo :9700.00,
      mantenimiento:null
    },
  ]
  // agregar nuevo
 this.persona.map(re =>{ 
  re.checked = false
 })

  //console.log(this.persona)
}
   
checkedAll(evento:any)
{ 

   //evento.type === 'checkbox' 
  //alert(evento.value+'::'+evento.checked)
 //this.persona.forEach(element => element.checked = evento.checked);
 this.persona.map(element => element.checked = evento.checked);

}
isCheckedAll(){
  // todos cumplen la condicion every
  return this.persona.every(re => re.checked)
}

valorchecked(persona: any,eveto:any)
{
 if (persona.estado ===0)
  {
    persona.estado = 1
    persona.mantenimiento = 'U'
  }   
 else {
  persona.estado = 0
  persona.mantenimiento = 'U'
 } 
  //alert(persona.estado)
}

nuevoSueldo(persona: any,eveto:any){
  persona.mantenimiento = 'U'
  persona.sueldo = eveto.value

}



save(){

  //const array = this.persona.filter(che =>che.checked===true)
  //this.lstPersona = this.persona.filter(che =>che.checked===true)
  this.lstPersona = this.persona.filter(pe =>pe.mantenimiento != null)
  console.log(this.lstPersona)
  this.listaPerson()
 //console.log(array,'enviar')

}



estadoTareaChecked(tarea:any,event:any){
  if (tarea.estado === true)
  {
    tarea.estado = false
    tarea.mantenimiento = 'U'
  }   
 else {
  tarea.estado = true
  tarea.mantenimiento = 'U'
 } 

}



mantTarea(){
  this.lstMantTarea = this.lstTarea.filter(t =>t.mantenimiento != '' && t.mantenimiento != null)
  /*
  this.lstMantTarea.forEach(function (value) {
    console.log(value.estado);
  });
*/
  this.tareaServices.mantTarea(this.lstMantTarea)
  .subscribe({
      next: (data) => {
          console.log(data)
          if (data.isExitoso == true ){
            this.listarTarea()  
            this.lstMantTarea=[]               
          }
          else{
          alert(data.mensaje)
          }
      }
  })
  
}


}


