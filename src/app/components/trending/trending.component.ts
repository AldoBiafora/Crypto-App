import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/service/crypto.service';
import { Crypto, Trending } from 'src/app/models/crypto.model';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  loading: boolean = false;
  trending!: Trending;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.getTrending();
  }

  getTrending(): void {
    this.loading = true;
    this.cryptoService.getTrending().subscribe(res => {
      this.trending = res;
      this.loading = false;
    });
  }

}
