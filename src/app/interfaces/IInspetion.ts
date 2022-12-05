export interface IInspetion{
    isExitoso: boolean;
    resultado: Inspetion[];
    mensaje:   string;
}

export interface Inspetion{
    id :number ,
    status: string ,
    comments: string, 
    inspectionTypeId :number,
}

