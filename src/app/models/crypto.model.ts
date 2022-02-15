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
    coins: Coins;
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

export interface Coins {
    item: Item;
}

export interface Item {
    id: number;
    symbol: string;
    name: string;
    market_cap_rank: number;
    thumb: string;
    price_btc: number;
}