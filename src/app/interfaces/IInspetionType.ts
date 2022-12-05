export interface IInspetion{
    isExitoso: boolean;
    resultado: InspetionType[];
    mensaje:   string;
}

export interface InspetionType{
    id :number ,
    inspectionName: string ,  
}

