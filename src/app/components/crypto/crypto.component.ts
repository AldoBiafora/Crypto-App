import { Component, OnInit } from '@angular/core';
import { Crypto } from 'src/app/models/crypto.model';
import { CryptoService } from 'src/app/service/crypto.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

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
