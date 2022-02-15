import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crypto } from '../models/crypto.model';
import { Exchange } from '../models/exchanges.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  crypto: Crypto[] = [];

  private url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'

  
  constructor(public http: HttpClient) { }

  getCrypto(): Observable<Crypto[]> {
    return this.http.get<Crypto[]>(this.url);
  }

  getCryptoById(name: string): Observable<Crypto> {
    return this.http.get<Crypto>('https://api.coingecko.com/api/v3/coins/'+ name +'?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false')
  }

  getExchanges(): Observable<Exchange[]> {
    return this.http.get<Exchange[]>('https://api.coingecko.com/api/v3/exchanges')
  }

  getCoinDate(date: string, name: string): Observable<Crypto> {
    return this.http.get<Crypto>('https://api.coingecko.com/api/v3/coins/' + name+ '/history?date=' + date)
  }

  getTrending(): Observable<Crypto[]> {
    return this.http.get<Crypto[]>('https://api.coingecko.com/api/v3/search/trending')
  }

}
