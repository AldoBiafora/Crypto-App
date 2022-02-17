import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/service/crypto.service';
import { FarmService } from 'src/app/service/farm.service';
import { AnimalDTO, ResponseModel } from 'src/app/models/farm.model';
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  farm: AnimalDTO[] = [];

  reportForm = this.formBuilder.group({
    type: ['', Validators.required],
    color: ['', Validators.required],
    age: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private cryptoService: CryptoService, private farmService: FarmService) { }

  ngOnInit(): void {
    this.getAnimal();
  }

  onSubmit(): void {
    let formData = this.reportForm.value;
    let returnData: AnimalDTO =  {
      Id: 0,
      Type: formData.type,
      Color: formData.color,
      Age: formData.age
    }
    
    this.farmService.InsertAnimal(returnData).subscribe(res => {
      this.getAnimal();
    });
  }

  getAnimal(): void {
    this.farmService.getAnimal().subscribe(res => {
      this.farm = res;
    });
  }

}
