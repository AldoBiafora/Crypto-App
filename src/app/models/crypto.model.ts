export interface Crypto {
    id: number;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    total_supply: string;
    market_cap_rank: number;
    market_data: MarketData;
    description: Description;
}

export interface MarketData {
    current_price: CurrentPrice
}

export interface CurrentPrice {
    usd: number;
}

export interface Description {
    en: string;
}

export interface Trending {
    coins: Coin[];
    exchanges: any[];
}

export interface Coin {
    item: Item;
}

export interface Moneta {
    id: string;
    symbol: string;
    name: string;
    market_cap_rank: number;
    thumb: string;
    price_btc: number;
}

export interface Item {
    id: string;
    symbol: string;
    name: string;
    market_cap_rank: number;
    thumb: string;
    price_btc: number;
}

export interface Search {
    coins: Moneta[];
    icos: any[];
    categories: any[];
    nfts: Nfts[];
}

export interface Nfts {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
}
