// Mock data for the IVTS trading platform

export const VIRTUAL_BALANCE = 100000;

export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  high: number;
  low: number;
}

export interface Trade {
  id: string;
  symbol: string;
  name: string;
  type: "BUY" | "SELL";
  quantity: number;
  price: number;
  total: number;
  pnl: number;
  date: string;
  status: "EXECUTED" | "PENDING" | "CANCELLED";
}

export interface Position {
  symbol: string;
  name: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  pnl: number;
  pnlPercent: number;
}

export const topGainers: Stock[] = [
  { symbol: "TATAMOTORS", name: "Tata Motors Ltd", price: 987.45, change: 42.30, changePercent: 4.48, volume: "12.5M", high: 992.10, low: 940.20 },
  { symbol: "ADANIENT", name: "Adani Enterprises", price: 3245.60, change: 112.80, changePercent: 3.60, volume: "8.2M", high: 3260.00, low: 3120.50 },
  { symbol: "BAJFINANCE", name: "Bajaj Finance Ltd", price: 7120.90, change: 198.50, changePercent: 2.87, volume: "5.1M", high: 7150.00, low: 6900.00 },
  { symbol: "HDFCBANK", name: "HDFC Bank Ltd", price: 1685.30, change: 38.70, changePercent: 2.35, volume: "15.3M", high: 1690.00, low: 1640.00 },
  { symbol: "INFY", name: "Infosys Ltd", price: 1542.80, change: 28.40, changePercent: 1.87, volume: "9.7M", high: 1550.00, low: 1510.00 },
];

export const topLosers: Stock[] = [
  { symbol: "WIPRO", name: "Wipro Ltd", price: 412.30, change: -18.90, changePercent: -4.38, volume: "11.2M", high: 435.00, low: 410.00 },
  { symbol: "TECHM", name: "Tech Mahindra Ltd", price: 1289.45, change: -45.60, changePercent: -3.42, volume: "6.8M", high: 1340.00, low: 1285.00 },
  { symbol: "SUNPHARMA", name: "Sun Pharma Industries", price: 1156.20, change: -32.10, changePercent: -2.70, volume: "4.5M", high: 1195.00, low: 1150.00 },
  { symbol: "COALINDIA", name: "Coal India Ltd", price: 387.60, change: -9.80, changePercent: -2.46, volume: "7.9M", high: 400.00, low: 385.00 },
  { symbol: "ONGC", name: "Oil & Natural Gas Corp", price: 256.90, change: -5.40, changePercent: -2.06, volume: "13.1M", high: 265.00, low: 255.00 },
];

export const recentTrades: Trade[] = [
  { id: "T001", symbol: "RELIANCE", name: "Reliance Industries", type: "BUY", quantity: 10, price: 2456.30, total: 24563.00, pnl: 1230.00, date: "2026-02-17 10:30", status: "EXECUTED" },
  { id: "T002", symbol: "TCS", name: "Tata Consultancy", type: "SELL", quantity: 5, price: 3890.50, total: 19452.50, pnl: -450.00, date: "2026-02-17 11:15", status: "EXECUTED" },
  { id: "T003", symbol: "HDFCBANK", name: "HDFC Bank", type: "BUY", quantity: 15, price: 1685.30, total: 25279.50, pnl: 780.00, date: "2026-02-16 14:20", status: "EXECUTED" },
  { id: "T004", symbol: "INFY", name: "Infosys", type: "BUY", quantity: 20, price: 1542.80, total: 30856.00, pnl: 2100.00, date: "2026-02-16 09:45", status: "EXECUTED" },
  { id: "T005", symbol: "ICICIBANK", name: "ICICI Bank", type: "SELL", quantity: 8, price: 1098.60, total: 8788.80, pnl: -320.00, date: "2026-02-15 13:10", status: "EXECUTED" },
];

export const openPositions: Position[] = [
  { symbol: "RELIANCE", name: "Reliance Industries", quantity: 10, avgPrice: 2456.30, currentPrice: 2579.60, pnl: 1233.00, pnlPercent: 5.02 },
  { symbol: "HDFCBANK", name: "HDFC Bank", quantity: 15, avgPrice: 1685.30, currentPrice: 1710.50, pnl: 378.00, pnlPercent: 1.49 },
  { symbol: "INFY", name: "Infosys", quantity: 20, avgPrice: 1542.80, currentPrice: 1590.20, pnl: 948.00, pnlPercent: 3.07 },
  { symbol: "TATAMOTORS", name: "Tata Motors", quantity: 25, avgPrice: 950.00, currentPrice: 987.45, pnl: 936.25, pnlPercent: 3.94 },
];

export const watchlistStocks: Stock[] = [
  { symbol: "RELIANCE", name: "Reliance Industries", price: 2579.60, change: 23.40, changePercent: 0.92, volume: "18.2M", high: 2590.00, low: 2550.00 },
  { symbol: "TCS", name: "Tata Consultancy", price: 3890.50, change: -12.30, changePercent: -0.32, volume: "6.4M", high: 3910.00, low: 3875.00 },
  { symbol: "HDFCBANK", name: "HDFC Bank", price: 1685.30, change: 38.70, changePercent: 2.35, volume: "15.3M", high: 1690.00, low: 1640.00 },
  { symbol: "INFY", name: "Infosys", price: 1542.80, change: 28.40, changePercent: 1.87, volume: "9.7M", high: 1550.00, low: 1510.00 },
  { symbol: "ICICIBANK", name: "ICICI Bank", price: 1098.60, change: 15.20, changePercent: 1.40, volume: "10.8M", high: 1105.00, low: 1080.00 },
  { symbol: "SBIN", name: "State Bank of India", price: 756.40, change: -8.60, changePercent: -1.12, volume: "22.1M", high: 770.00, low: 752.00 },
  { symbol: "BHARTIARTL", name: "Bharti Airtel", price: 1432.80, change: 45.60, changePercent: 3.29, volume: "7.5M", high: 1440.00, low: 1385.00 },
  { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank", price: 1876.30, change: -22.10, changePercent: -1.16, volume: "4.2M", high: 1905.00, low: 1870.00 },
];

export const marketIndices = [
  { name: "NIFTY 50", value: 22456.80, change: 156.30, changePercent: 0.70 },
  { name: "SENSEX", value: 73892.45, change: 487.20, changePercent: 0.66 },
  { name: "NIFTY BANK", value: 47234.60, change: -123.40, changePercent: -0.26 },
  { name: "NIFTY IT", value: 38120.90, change: 234.50, changePercent: 0.62 },
];

export const newsItems = [
  { id: 1, title: "RBI Keeps Repo Rate Unchanged at 6.5%, GDP Growth Forecast at 7%", source: "Economic Times", time: "2 hours ago", category: "Economy" },
  { id: 2, title: "Reliance Industries Q3 Results: Net Profit Rises 12% to ₹18,540 Cr", source: "MoneyControl", time: "3 hours ago", category: "Earnings" },
  { id: 3, title: "FIIs Turn Net Buyers After 3 Months, Pump ₹4,200 Cr Into Indian Equities", source: "LiveMint", time: "4 hours ago", category: "Markets" },
  { id: 4, title: "Tata Motors EV Sales Surge 45% in January, Leads Market Share", source: "Business Standard", time: "5 hours ago", category: "Auto" },
  { id: 5, title: "IT Sector Outlook: Analysts Expect Revival in FY27 on AI-Driven Demand", source: "NDTV Profit", time: "6 hours ago", category: "Technology" },
  { id: 6, title: "Gold Prices Hit Record High at ₹72,500 Per 10g Amid Global Uncertainty", source: "Economic Times", time: "7 hours ago", category: "Commodities" },
];

export function isMarketOpen(): boolean {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const ist = new Date(now.getTime() + istOffset + now.getTimezoneOffset() * 60 * 1000);
  const day = ist.getDay();
  const hours = ist.getHours();
  const minutes = ist.getMinutes();
  const time = hours * 60 + minutes;
  return day >= 1 && day <= 5 && time >= 555 && time <= 930; // 9:15 - 15:30
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}
