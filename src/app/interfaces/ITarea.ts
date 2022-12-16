export interface ITarea{
    isExitoso: boolean;
    resultado: Tarea[];
    mensaje:   string;
}

export interface Tarea{
    idTarea :number ,
    nombre: string ,
    estado: boolean, 
    mantenimiento: string  
}
