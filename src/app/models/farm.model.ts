export interface AnimalDTO {
    Id: number;
    Type: string;
    Color: string;
    Age: number;
}

export interface FarmerDTO {
    Id: number;
    name: string;
    age: number;
}

export interface FactoryDTO {
    Id: number;
    name: string;
    city: string;
}

export interface FarmerFactoryDTO {
    Farmer_Name: string;
    Factory_Name: string;
}

export interface FactoryAnimalDTO {
    Factory_Name: string;
    Animal_Type: string;
}

export interface ResponseModel<T> {
    count: number,
    data: T,
    status: number,
    info: string,
    totalCount: number
}