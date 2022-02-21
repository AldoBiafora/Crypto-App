import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimalDTO, FactoryAnimalDTO, FactoryDTO, FarmerDTO, FarmerFactoryDTO, ResponseModel } from '../models/farm.model';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FarmService {

  animal!: AnimalDTO;

  constructor(public http: HttpClient) { }

  InsertAnimal(animalDTO: AnimalDTO): Observable<boolean> {
    return this.http.post<ResponseModel<boolean>>("/api/data/insertAnimal", animalDTO).pipe(
      map((response: ResponseModel<boolean>) => { return response.data})
    ) 
  }

  InsertFactory(factoryDTO: FactoryDTO): Observable<boolean> {
    return this.http.post<ResponseModel<boolean>>("/api/data/insertFactory", factoryDTO).pipe(
      map((response: ResponseModel<boolean>) => { return response.data})
    ) 
  }

  InsertFarmer(farmerDTO: FarmerDTO): Observable<boolean> {
    return this.http.post<ResponseModel<boolean>>("/api/data/insertFarmer", farmerDTO).pipe(
      map((response: ResponseModel<boolean>) => { return response.data})
    ) 
  }

  getTest(): Observable<any> {
    return this.http.get<any>('/api/data/getVersion')
  }

  getAnimal(): Observable<AnimalDTO[]> {
    return this.http.get<ResponseModel<AnimalDTO[]>>('/api/data/getAnimal').pipe(
      map((response: ResponseModel<AnimalDTO[]>) => { return response.data})
    ) 
  }

  getFarmer(): Observable<FarmerDTO[]> {
    return this.http.get<ResponseModel<FarmerDTO[]>>('/api/data/getFarmer').pipe(
      map((response: ResponseModel<FarmerDTO[]>) => { return response.data})
    ) 
  }

  getFactory(): Observable<FactoryDTO[]> {
    return this.http.get<ResponseModel<FactoryDTO[]>>('/api/data/getFactory').pipe(
      map((response: ResponseModel<FactoryDTO[]>) => { return response.data})
    ) 
  }

  getFarmerFactory(): Observable<FarmerFactoryDTO[]> {
    return this.http.get<ResponseModel<FarmerFactoryDTO[]>>('/api/data/getFarmerFactory').pipe(
      map((response: ResponseModel<FarmerFactoryDTO[]>) => { return response.data})
    ) 
  }

  getFactoryAnimal(): Observable<FactoryAnimalDTO[]> {
    return this.http.get<ResponseModel<FactoryAnimalDTO[]>>('/api/data/getFactoryAnimal').pipe(
      map((response: ResponseModel<FactoryAnimalDTO[]>) => { return response.data})
    ) 
  }
  
}

