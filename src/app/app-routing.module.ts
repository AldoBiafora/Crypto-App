import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoComponent } from './components/crypto/crypto.component';
import { ExchangesComponent } from './components/exchanges/exchanges.component';
import { HomeComponent } from './components/home/home.component';
import { MarketComponent } from './components/market/market.component';
import { SearchComponent } from './components/search/search.component';
import { DateSearchComponent } from './components/date-search/date-search.component';
import { TrendingComponent } from './components/trending/trending.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'crypto',
    component: CryptoComponent
  },
  {
    path: 'market',
    component: MarketComponent
  },
  {
    path: 'exchanges',
    component: ExchangesComponent
  },
  {
    path: 'data',
    component: DateSearchComponent
  },
  {
    path: 'trending',
    component: TrendingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
