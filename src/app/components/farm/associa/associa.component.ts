import { Component, OnInit } from '@angular/core';
import { FactoryAnimalDTO, FactoryDTO, FarmerFactoryDTO, FarmerAssociateDTO, FarmerDTO, ContadinoDTO } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/service/farm.service';


@Component({
  selector: 'app-associa',
  templateUrl: './associa.component.html',
  styleUrls: ['./associa.component.css']
})
export class AssociaComponent implements OnInit {

  farmerFactory: FarmerFactoryDTO[] = [];
  animalFactory: FactoryAnimalDTO[] = [];
  factory: FarmerAssociateDTO[] = [];
  contadinoDTO: ContadinoDTO[] = [];
  farmer: FarmerDTO[] = [];

  constructor(private farmService: FarmService) { }

  ngOnInit(): void {
    this.getFarmerFactory();
    this.getFactoryAnimal();
    this.getFarmer();
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

  searchFarmerAssociate(id: number): void {
    this.farmService.searchFarmerAssociate(id).subscribe(res => {
      this.factory = res;
    });
  }

  getFarmer(): void {
    this.farmService.getFarmer().subscribe(res => {
      this.contadinoDTO = res;
    });
  }
}
