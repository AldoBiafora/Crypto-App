import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/service/crypto.service';
import { Crypto } from 'src/app/models/crypto.model';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  loading: boolean = false;
  crypto: Crypto[] = [];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.getTrending();
  }

  getTrending(): void {
    this.loading = true;
    this.cryptoService.getTrending().subscribe(res => {
      this.crypto = res;
      this.loading = false;
    });
  }

}
