import { Component, OnInit } from '@angular/core';
import { AnimalDTO } from 'src/app/models/farm.model';
import { CryptoService } from 'src/app/service/crypto.service';
import { FarmService } from 'src/app/service/farm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  test: any;
  constructor(private cryptoService: CryptoService, private farmService: FarmService) { }

  ngOnInit(): void {
  }

  getTest(): void {
    this.cryptoService.getTest().subscribe(res => {
      this.test = res;
    });    
  }

}
