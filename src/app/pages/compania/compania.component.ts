import { Component, OnInit } from '@angular/core';
import { Compania } from 'src/app/interfaces/IDatacompania';
import { CompaniaService } from '../../services/compania.service';

@Component({
  selector: 'app-compania',
  templateUrl: './compania.component.html',
  styleUrls: ['./compania.component.css']
})
export class CompaniaComponent implements OnInit {

  constructor(private companiaServices:CompaniaService) { }

  dataCompania: Compania[] = [];

  ngOnInit(): void {
    this.mostrarComapania();
    
  }
 
  mostrarComapania (){
    this.companiaServices.listarCompania()
      .subscribe({
      next: (data) => {
        if (data.isExitoso){
          this.dataCompania = data.resultado;
          console.log(this.dataCompania)
        }
          
        else
        this.dataCompania = [];
      },
      error: (e) => {
      },
      complete: () => {

      }
    })
    
  }
}
