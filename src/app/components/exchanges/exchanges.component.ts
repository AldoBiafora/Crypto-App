import { Component, OnInit } from '@angular/core';
import { Exchange } from 'src/app/models/exchanges.model';
import { CryptoService } from 'src/app/service/crypto.service';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.css']
})
export class ExchangesComponent implements OnInit {

  exchange: Exchange[] = [];
  loading: boolean = false;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.getExchanges();
  }

  getExchanges(): void {
    this.loading = true;
    this.cryptoService.getExchanges().subscribe(res => {
      this.exchange = res;
      this.loading = false;
    });
  }

}
