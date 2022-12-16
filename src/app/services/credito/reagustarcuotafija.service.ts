import { DecimalPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { FechasiguienteService } from './fechasiguiente.service';
import { TasaService } from './tasa.service';

@Injectable({
  providedIn: 'root'
})
export class ReagustarcuotafijaService {

  constructor(private tasaServicios : TasaService,
             private fechaPagoServicio: FechasiguienteService,
             private decimalPipe :DecimalPipe
       ) { }

  public  reduceCuota(montoCredito:number, nroCuotas:number,Tem :number, fecha:string ):number {

    var  row = 1;
    var diaFijo ,diferenciaDias;
    var dias,Ted,ResPotencia;
    var valorTed,saldoCapital,CalculoInteres,PagoFinalCuota = 0,DifUltimoPago, CuotaFija, lrdPotencia;
    var MontoFactor,amortizacion,ValorResidual,montoValorResidual;
    var fechaInico, fechaSiguente;
          
    var oldFecha   = fecha.split('-');  
    
    diaFijo   = parseInt(oldFecha[2])

    valorTed    =   this.tasaServicios.convertirtasa(Tem * 100,'TemTed');
    
    //alert('valorTed :'+valorTed)
    ResPotencia =   Math.pow((1 + Tem),nroCuotas);
    lrdPotencia =   ResPotencia;

    MontoFactor = (Tem * lrdPotencia) / (lrdPotencia - 1);

    CuotaFija   =  (montoCredito * ((Tem * lrdPotencia) / (lrdPotencia - 1)));
    CuotaFija = Number(this.decimalPipe.transform(CuotaFija, '0.0-6'));
    //alert('CuotaFija::'+CuotaFija)
    saldoCapital = montoCredito;

    ResPotencia = 0;

    while (row <= 15) {

        fechaInico = fecha;

        for (let  i = 1; i <= nroCuotas; i++)  {
                                           
            fechaSiguente = this.fechaPagoServicio.nuevaFecha( fechaInico,diaFijo.toString());
            // Difference in days
            var fechaInicio = new Date(fecha).getTime();
            var fechaFin    = new Date(fechaSiguente).getTime();            
            var diff = fechaFin - fechaInicio; 

            diferenciaDias =  diff/(1000*60*60*24) ;

            dias = (diferenciaDias);
            Ted  = (1 + valorTed);
            ResPotencia = Math.pow(Ted, dias);  
            console.log('ResPotencia::'+ResPotencia)          
            ResPotencia = Number(this.decimalPipe.transform(ResPotencia, '0.0-6'))
            console.log('22ResPotencia::'+ResPotencia)  
            CalculoInteres = ((saldoCapital * ResPotencia) - saldoCapital)
            
            amortizacion = (CuotaFija - CalculoInteres);

            //si es la ultima cuota

            if (i == nroCuotas) {
                PagoFinalCuota = saldoCapital;
                PagoFinalCuota = PagoFinalCuota + CalculoInteres;
            }



            saldoCapital = saldoCapital - amortizacion;
            fechaInico  =  fechaSiguente; 
        }

        DifUltimoPago = PagoFinalCuota - CuotaFija;

        if (row <= 15 && DifUltimoPago != 0 ){

            ValorResidual       =   this.valorResidual(DifUltimoPago, Tem, nroCuotas);
            montoValorResidual  =   (MontoFactor * ValorResidual);
            CuotaFija           =   CuotaFija + montoValorResidual;
        }

        //console.log(row+'cuota:'+CuotaFija)
        saldoCapital = montoCredito;                        
        row++;  
    }
    
    
             
    return Number(this.decimalPipe.transform(CuotaFija, '0.0-6'));

}

// metodo para teronar valor Residual 
public  valorResidual( monto:number, tem:number, nroCuotas:number):number {

    var MtoValor:number;
    var resPotencia:number;

    resPotencia  =  Math.pow( (1 + tem) , nroCuotas);
    MtoValor = monto / resPotencia;
    //return Math.Round(MtoValor,9);
    return Number(this.decimalPipe.transform(MtoValor, '0.0-6')); 
}

}
