import { Component, OnInit } from '@angular/core';
import { Crypto } from 'src/app/models/crypto.model';
import { CryptoService } from 'src/app/service/crypto.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  loading: boolean = false;
  crypto: Crypto[] = [];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.getCrypto();
  }

  getCrypto(): void {
    this.loading = true;
    this.cryptoService.getCrypto().subscribe(res => {
      this.crypto = res;
      this.loading = false;
    });
  }

}
