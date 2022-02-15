import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { MarketComponent } from './components/market/market.component';
import { HttpClientModule } from '@angular/common/http';
import { ExchangesComponent } from './components/exchanges/exchanges.component';
import { DateSearchComponent } from './components/date-search/date-search.component';
import { TrendingComponent } from './components/trending/trending.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    CryptoComponent,
    MarketComponent,
    ExchangesComponent,
    DateSearchComponent,
    TrendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
