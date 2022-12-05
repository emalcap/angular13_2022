import { Component, OnInit, ViewChild } from '@angular/core';
import { AnyARecord } from 'dns';
import { Inspetion } from 'src/app/interfaces/IInspetion';
import { InspetionType } from 'src/app/interfaces/IInspetionType';
import { InspecionService } from 'src/app/services/inspecion.service';

// emp
declare var window: any;


@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.css']
})
export class InspectionComponent implements OnInit {
 
  lista:string[]=["hola","que","tal", "estas"];  

  dataInspection:Inspetion[] = [];
  dataInspectionType:InspetionType[] = [];
 // para el foreing keys
 inspectiontypeMap:Map<number,string > = new Map();

 // modal
 formModal:any;

  constructor( private inspectionService:InspecionService) {    
     //alert(1)    
  }
  

  ngOnInit(): void {
   //alert(2)   
   this.nombreInspetionTypeMap();
   this.lstInspectionType();   
   this.lstInspection()

   //modal
   this.formModal = new window.bootstrap.Modal(
    document.getElementById('staticBackdrop')
   )

  }
  openModal(){
    this.formModal.show();
  }

  doSomeThing(){
    this.formModal.hide();
  }





  lstInspection (){
    this.inspectionService.loadInspection(0)
    .subscribe(resp =>{
       if (resp.isExitoso){
        this.dataInspection =resp.resultado;
        //console.log(this.dataInspection )
       }
       else{
        this.dataInspection = []
       }
    })    
  }

  lstInspectionType(){

    this.inspectionService.loadInspectionType(0)
    .subscribe(resp =>{
       if (resp.isExitoso){
        this.dataInspectionType =resp.resultado;
        //console.log(this.dataInspectionType )       
       }
       else{
        this.dataInspectionType = []
       }
    })  
  }

  nombreInspetionTypeMap(){
    this.inspectionService.loadInspectionType(0)
    .subscribe(resp =>{
       if (resp.isExitoso){      
        
        for (let i = 0 ; i< resp.resultado.length;i++ )
            {
              this.inspectiontypeMap.set(resp.resultado[i].id
                ,resp.resultado[i].inspectionName);
                  
            }
             console.log(this.inspectiontypeMap)
       }
       else{
        this.inspectiontypeMap.set(0,'')
       }
    }) 
  }


  functionedit(code:number){

    alert(code)
   // this.addview.LoadEditData(code);

  }


  functiondelete(code:Number){
    if(confirm("Do you want to remove?")){
     alert(code)
      /*
      this.service.RemoveEmployee(code).subscribe(result => {
        this.GetEmployee();
      });
      */
    }

  } 


}
