import { Component, OnInit } from '@angular/core';
import { FactoryAnimalDTO, FarmerFactoryDTO } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/service/farm.service';

@Component({
  selector: 'app-associa',
  templateUrl: './associa.component.html',
  styleUrls: ['./associa.component.css']
})
export class AssociaComponent implements OnInit {

  farmerFactory: FarmerFactoryDTO[] = [];
  animalFactory: FactoryAnimalDTO[] = [];

  constructor(private farmService: FarmService) { }

  ngOnInit(): void {
    this.getFarmerFactory();
    this.getFactoryAnimal();
  }

  getFarmerFactory(): void {
    this.farmService.getFarmerFactory().subscribe(res => {
      this.farmerFactory = res;
    });
  }

  getFactoryAnimal(): void {
    this.farmService.getFactoryAnimal().subscribe(res => {
      this.animalFactory = res;
    });
  }
}
