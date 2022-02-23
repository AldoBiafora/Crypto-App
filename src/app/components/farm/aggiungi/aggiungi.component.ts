import { Component, OnInit } from '@angular/core';
import { AnimalDTO, FactoryDTO, FarmerDTO } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/service/farm.service';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css']
})
export class AggiungiComponent implements OnInit {
  
  farm: AnimalDTO[] = [];

  animalForm = this.formBuilder.group({
    type: ['', Validators.required],
    color: ['', Validators.required],
    age: ['', Validators.required],
  })

  farmerForm = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
  })

  
  factoryForm = this.formBuilder.group({
    name: ['', Validators.required],
    city: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private farmService: FarmService) { }

  ngOnInit(): void {
  }

  onSubmitAnimal(): void {
    let formData = this.animalForm.value;
    let returnData: AnimalDTO =  {
      Id: 0,
      Type: formData.type,
      Color: formData.color,
      Age: formData.age
    }
    this.farmService.InsertAnimal(returnData).subscribe(res => {
    });
  }

  onSubmitFarmer(): void {
    let formData = this.farmerForm.value;
    let returnData: FarmerDTO =  {
      id: 0,
      name: formData.name,
      age: formData.age
    }
    this.farmService.InsertFarmer(returnData).subscribe(res => {
    });
  }

  onSubmitFactory(): void {
    let formData = this.factoryForm.value;
    let returnData: FactoryDTO =  {
      Id: 0,
      name: formData.name,
      city: formData.city
    }
    this.farmService.InsertFactory(returnData).subscribe(res => {
    });
  }

}
