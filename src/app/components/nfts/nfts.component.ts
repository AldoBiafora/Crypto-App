import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/service/crypto.service';
import { Crypto, Nfts, Search } from 'src/app/models/crypto.model';


@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css']
})
export class NftsComponent implements OnInit {

  loading: boolean = false;
  nft!: Search;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.getNfts();
  }

  getNfts(): void {
    this.loading = true;
    this.cryptoService.getNfts().subscribe(res => {
      this.nft = res;
      this.loading = false;
    });
  }

}
