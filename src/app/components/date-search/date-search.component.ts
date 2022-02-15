import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/service/crypto.service';
import { Crypto } from 'src/app/models/crypto.model';


@Component({
  selector: 'app-date-search',
  templateUrl: './date-search.component.html',
  styleUrls: ['./date-search.component.css']
})
export class DateSearchComponent implements OnInit {

  loading: boolean = false;
  crypto!: Crypto;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
  }

  getCryptoDate(name: string, date: string): void {
    this.loading = true;
    this.cryptoService.getCoinDate(date, name).subscribe(res => {
      this.crypto = res;
      this.loading = false;
    });
  }

}
