import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/service/crypto.service';
import { Crypto, Search } from 'src/app/models/crypto.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  loading: boolean = false;
  crypto: Crypto[] = [];
  cryptoId!: Search;


  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
  }

  getCryptoById(name: string): void {
    this.loading = true;
    this.cryptoService.getCryptoById(name).subscribe(res => {
      this.cryptoId = res;
      this.loading = false;
    });
  }

  
}
