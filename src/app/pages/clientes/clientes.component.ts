import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FechasiguienteService } from 'src/app/services/credito/fechasiguiente.service';
import { ReagustarcuotafijaService } from 'src/app/services/credito/reagustarcuotafija.service';
import { TasaService } from 'src/app/services/credito/tasa.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
 // https://www.youtube.com/watch?v=L36hDi_sIPA
 //https://www.youtube.com/watch?v=bjJZC452MPc&list=PLvdkhxb-bRLYb9-jPJNqLa4FkYdcGq_L3
  //fechaStrActual:string =  new Date().toLocaleDateString('en-US')
  //fechaDateActual = new Date().toDateString();
  num:number = 1.376527375896;
  format = '.0-6';




  fechaActual: any = Date; 
  fechaStrActual: any = String; 

  fechaDesde:any = Date;
  fechaHasta:any = Date;

  fechaStrDesde:any = String;
  fechaStrHasta:any = String;

  dataCredito:any[] = [{
    montoCredito:Number ,
    nroCuotas:Number,
    fecha:Date
  }     
  ];

  dataDetalleCredito:any[] = [
    {
      nroCuota : Number,
      saldoCapital:Number
    }
  ];

  lstDetalleCredito01:any[] = [];
  lstDetalleCredito:any[] = [];

  public frmMy:any = FormGroup;

  montoCredito: number = 60000.00;

  public frmSimulador= this.fb.group({
    monto: [null],
    fecha:[''],
    tea: [''], 
    nroCuotas:[''],
  })

 // emp DatePipe agregar en app module
  constructor(private fb :FormBuilder,private pd:DatePipe,
      private decimalPipe: DecimalPipe,      
      private tasaServices: TasaService,
      private fechapagoService: FechasiguienteService,
      private  cuotaFijaServicio :ReagustarcuotafijaService
      
      ) { }

  ngOnInit(): void {

   this.frmMy = this.createfrmMy()

  this.fechaActual = new Date( new Date().getFullYear(),new Date().getMonth(),new Date().getDay())

   this.fechaDesde = new Date( new Date().getFullYear(),new Date().getMonth() - 6 ,new Date().getDay())
   this.fechaHasta = new Date( new Date().getFullYear(),new Date().getMonth() ,new Date().getDay()+1)

   this.fechaStrActual = this.pd.transform(this.fechaActual,'yyyy-MM-dd')

   this.fechaStrDesde = this.pd.transform(this.fechaDesde,'yyyy-MM-dd')
   this.fechaStrHasta = this.pd.transform(this.fechaHasta,'yyyy-MM-dd')

    
   this.frmSimulador= this.fb.group({
      monto: [1000],
      fecha:[this.fechaStrActual],
      tea: [39.00],
      nroCuotas:[8],
    })
 
     //console.log( Number(this.decimalPipe.transform(this.num, this.format)));
     
  }
 
  createfrmMy(){
    return this.fb.group({
      fechaDesde:['',[Validators.required,validadorfecha.fechaValidar]],
      fechaHasta:['',[Validators.required]]
    })

  }

  enviarFormulario(){
    if (this.frmMy.invalid){
      alert('es invalido')
      return
    }
    alert('es valido')
  }

  simularCredito(){
   
    this.lstDetalleCredito = []; 
    //console.log(typeof this.frmSimulador.value.fecha);
    var diafijo = this.frmSimulador.value.fecha.split('-')
    var fecha = this.frmSimulador.value.fecha
    var Tea = this.frmSimulador.value.tea
    var montoCredito = this.frmSimulador.value.monto
    var nroCuotas = this.frmSimulador.value.nroCuotas
    var tem = this.tasaServices.convertirtasa(Tea,'TeaTem')
    //console.log(diafijo[2])
    var cuotaFija:number   =   this.cuotaFijaServicio.reduceCuota(montoCredito, nroCuotas,tem,fecha);

    cuotaFija =  Number(this.decimalPipe.transform(cuotaFija, '0.0-6'));
   
    var saldoCapital = montoCredito;

    for (let i = 1; i <=  this.frmSimulador.value.nroCuotas; i++) {

      let fechaCuota = this.fechapagoService.nuevaFecha(fecha,diafijo[2])

      var fechaInicio = new Date(fecha).getTime();
      var fechaFin    = new Date(fechaCuota).getTime();
      
      var diff = fechaFin - fechaInicio;
      var diffDias = diff/(1000*60*60*24) 

      var valTed = this.tasaServices.convertirtasa(tem * 100,'TemTed')     
          valTed = valTed + 1;
      var ValorPotencia = Math.pow(valTed, diffDias);
      ValorPotencia =  Number(this.decimalPipe.transform(ValorPotencia, '0.0-6'));

      var valorInteres = (saldoCapital * ValorPotencia) - saldoCapital;

      //var seguroDesgra = MetSeguroDesgra.ValorSeguro(saldoCapital, diferenciaDias);
     var amortizacion = cuotaFija - valorInteres;
            
      //console.log(tem)
      //let ted = this.servicioCredito.convertirtasa(Tea,'TeaTem')

      let detalleCredito ={
          nroCuota : i,
          nroDias :diffDias,
          fechaPago:fechaCuota,
          saldoCapital : saldoCapital,
          amortizacion:amortizacion,  
          interes:valorInteres,       
          cuotafija:cuotaFija
      }

      this.lstDetalleCredito.push(detalleCredito);

      fecha = fechaCuota;
      saldoCapital = saldoCapital - amortizacion;
    };
   
    
    
  }
 
 
}
// puede hacer desde un servicio
class validadorfecha{

  public static fechaValidar(elemento:FormControl){

     return 
  }

}


/*
getDate(): Te devuelve el día del mes.
getFullYear(): Te devuelve el año.
getHours(): Te devuelve la hora.
getMinutes(): Te devuelve los minutos.
getMonth(): Te devuelve el mes.
getSeconds(): Te devuelve los segundos.
setDate(): Establecer una nueva fecha.
setFullYear(): Establecer el año.
setHours(): Establecer la hora.
setMinutes(): Establecer los minutos.
toString(): Devuelve la fecha en formato texto.
toTimeString(): Devuelve la fecha en formato comprensible para los humanos.
*/