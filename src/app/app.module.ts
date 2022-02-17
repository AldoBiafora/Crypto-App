import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

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
import { NftsComponent } from './components/nfts/nfts.component';
import { FarmComponent } from './components/farm/farm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    CryptoComponent,
    MarketComponent,
    ExchangesComponent,
    DateSearchComponent,
    TrendingComponent,
    NftsComponent,
    FarmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
