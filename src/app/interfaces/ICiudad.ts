export interface ICiudad{
    isExitoso: boolean;
    resultado: Ciudad[];
    mensaje:   string;
}

export interface Ciudad{
    id :number ,
    name: string ,
    description: string,   
}
