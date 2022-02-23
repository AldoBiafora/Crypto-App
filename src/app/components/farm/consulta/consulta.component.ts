import { Component, OnInit } from '@angular/core';
import { FarmService } from 'src/app/service/farm.service';
import { AnimalDTO, ContadinoDTO, FactoryDTO, FarmerDTO } from 'src/app/models/farm.model';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  animal: AnimalDTO[] = [];
  farmer: ContadinoDTO[] = [];
  factory: FactoryDTO[] = [];

  constructor(private farmService: FarmService) { }

  ngOnInit(): void {
    this.getAnimal();
    this.getFarmer();
    this.getFactory();
  }

  getAnimal(): void {
    this.farmService.getAnimal().subscribe(res => {
      this.animal = res;
    });
  }

  getFarmer(): void {
    this.farmService.getFarmer().subscribe(res => {
      this.farmer = res;
    });
  }

  getFactory(): void {
    this.farmService.getFactory().subscribe(res => {
      this.factory = res;
    });
  }

}
