export interface AnimalDTO {
    Id: number;
    Type: string;
    Color: string;
    Age: number;
}

export interface ResponseModel<T>

{
    count: number,
    data: T,
    status: number,
    info: string,
    totalCount: number
}