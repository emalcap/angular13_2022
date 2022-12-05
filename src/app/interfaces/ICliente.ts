export interface ICliente{
    isExitoso: boolean;
    resultado: Cliente[];
    mensaje:   string;
}

export interface Cliente{
    id :number ,
    name: string ,
    contry: string,   
}
