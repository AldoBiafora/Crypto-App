import { Component, OnInit } from '@angular/core';
import { FarmService } from 'src/app/service/farm.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  

  constructor(private farmService: FarmService) { }

  ngOnInit(): void {
  }

 

  

}
