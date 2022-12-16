
export interface IDataCredito{
    isExitoso: boolean;
    resultado: DataCredito[];
    mensaje:   string;
  }     

  export interface DataCredito{
    montoCredito:Number ,
    nroCuotas:Number,
    fecha:Date
  }     

export interface IDetalleCredito{
    isExitoso: boolean;
    resultado: DetalleCredito[];
    mensaje:   string;
}

export interface DetalleCredito{
    nroCuota :number ,
    saldoCapital: number ,
    
}


