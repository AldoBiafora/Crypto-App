import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimalDTO, ResponseModel } from '../models/farm.model';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FarmService {

  animal!: AnimalDTO;

  constructor(public http: HttpClient) { }

  InsertAnimal(animalDTO: AnimalDTO): Observable<boolean> {
    console.log('onsubmit', animalDTO)
    return this.http.post<ResponseModel<boolean>>("/api/data/insertAnimal", animalDTO).pipe(
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
  
}

