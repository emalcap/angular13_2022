import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasaService {

  constructor() { }


  convertirtasa(valorTasa:number, tipo:string ):number{
    var tasa = valorTasa;
    var anioMes:number;
    var mesDia : number;
    var valorTea:number;
    var valorTem:number
    var resulatado:number;
 
    
 
     if (tipo == 'TeaTem'){
         tasa        =   (tasa / 100);
         anioMes     =   (1.0 / 12);
         valorTea    =   tasa +1 ;
         resulatado  =   Math.pow(valorTea, anioMes);
         //resulatado  =   Math.round(resulatado-1);
         resulatado  =   (resulatado -1);    
         //console.log('2 ok:'+resulatado)
       return resulatado ;      
     }
     else if (tipo == 'TemTed'){
      
      tasa         = (tasa / 100);
      mesDia      = (1.0 / 30);
      valorTem = (1 + tasa);           
      resulatado = Math.pow(valorTem, mesDia);
      resulatado = (resulatado - 1);

      return resulatado;
      
     }
     else if (tipo == 'TeaTed'){
 
       
     }
 
     return 45.23;
   }

}
