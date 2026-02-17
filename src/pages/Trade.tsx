import { useState } from "react";
import { isMarketOpen, formatCurrency, formatNumber, watchlistStocks } from "@/data/mockData";
import { Search, AlertCircle } from "lucide-react";

const Trade = () => {
  const marketOpen = isMarketOpen();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(watchlistStocks[0]);
  const [orderType, setOrderType] = useState<"BUY" | "SELL">("BUY");
  const [quantity, setQuantity] = useState("");
  const [priceType, setPriceType] = useState<"MARKET" | "LIMIT">("MARKET");
  const [limitPrice, setLimitPrice] = useState("");

  const filtered = watchlistStocks.filter(
    (s) => s.symbol.toLowerCase().includes(search.toLowerCase()) || s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Trade</h1>

      {!marketOpen && (
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-loss/10 border border-loss/20">
          <AlertCircle className="w-5 h-5 text-loss shrink-0" />
          <p className="text-sm text-loss">Market is closed. Trades can only be placed during market hours (9:15 AM - 3:30 PM IST, Mon-Fri).</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stock Picker */}
        <div className="bg-card rounded-lg border border-border">
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search stocks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-md bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          <div className="max-h-[400px] overflow-y-auto">
            {filtered.map((s) => (
              <button
                key={s.symbol}
                onClick={() => setSelected(s)}
                className={`w-full flex items-center justify-between px-4 py-3 border-b border-border/50 hover:bg-muted/50 transition-colors text-left ${
                  selected.symbol === s.symbol ? "bg-primary/10" : ""
                }`}
              >
                <div>
                  <p className="text-sm font-medium text-card-foreground">{s.symbol}</p>
                  <p className="text-xs text-muted-foreground">{s.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-card-foreground">₹{formatNumber(s.price)}</p>
                  <p className={`text-xs ${s.change >= 0 ? "text-profit" : "text-loss"}`}>
                    {s.change >= 0 ? "+" : ""}{s.changePercent.toFixed(2)}%
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Order Form */}
        <div className="lg:col-span-2 bg-card rounded-lg border border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-card-foreground">{selected.symbol}</h2>
              <p className="text-sm text-muted-foreground">{selected.name}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-card-foreground">₹{formatNumber(selected.price)}</p>
              <p className={`text-sm font-medium ${selected.change >= 0 ? "text-profit" : "text-loss"}`}>
                {selected.change >= 0 ? "+" : ""}₹{formatNumber(Math.abs(selected.change))} ({selected.change >= 0 ? "+" : ""}{selected.changePercent.toFixed(2)}%)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-4 text-sm">
            <div className="bg-muted rounded-md p-3">
              <p className="text-xs text-muted-foreground">High</p>
              <p className="font-medium text-foreground">₹{formatNumber(selected.high)}</p>
            </div>
            <div className="bg-muted rounded-md p-3">
              <p className="text-xs text-muted-foreground">Low</p>
              <p className="font-medium text-foreground">₹{formatNumber(selected.low)}</p>
            </div>
            <div className="bg-muted rounded-md p-3">
              <p className="text-xs text-muted-foreground">Volume</p>
              <p className="font-medium text-foreground">{selected.volume}</p>
            </div>
            <div className="bg-muted rounded-md p-3">
              <p className="text-xs text-muted-foreground">Change</p>
              <p className={`font-medium ${selected.change >= 0 ? "text-profit" : "text-loss"}`}>{selected.changePercent.toFixed(2)}%</p>
            </div>
          </div>

          {/* Order type tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setOrderType("BUY")}
              className={`flex-1 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                orderType === "BUY" ? "bg-profit text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              BUY
            </button>
            <button
              onClick={() => setOrderType("SELL")}
              className={`flex-1 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                orderType === "SELL" ? "bg-loss text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              SELL
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <button
                onClick={() => setPriceType("MARKET")}
                className={`px-4 py-2 rounded-md text-sm border transition-colors ${
                  priceType === "MARKET" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"
                }`}
              >
                Market
              </button>
              <button
                onClick={() => setPriceType("LIMIT")}
                className={`px-4 py-2 rounded-md text-sm border transition-colors ${
                  priceType === "LIMIT" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"
                }`}
              >
                Limit
              </button>
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                className="w-full px-4 py-2.5 rounded-md bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {priceType === "LIMIT" && (
              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">Limit Price (₹)</label>
                <input
                  type="number"
                  value={limitPrice}
                  onChange={(e) => setLimitPrice(e.target.value)}
                  placeholder="Enter limit price"
                  className="w-full px-4 py-2.5 rounded-md bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            )}

            {quantity && (
              <div className="bg-muted rounded-md p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Estimated Total</span>
                  <span className="font-semibold text-foreground">
                    {formatCurrency(
                      Number(quantity) * (priceType === "LIMIT" && limitPrice ? Number(limitPrice) : selected.price)
                    )}
                  </span>
                </div>
              </div>
            )}

            <button
              disabled={!marketOpen || !quantity}
              className={`w-full py-3 rounded-md text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                orderType === "BUY"
                  ? "bg-profit text-primary-foreground hover:opacity-90"
                  : "bg-loss text-primary-foreground hover:opacity-90"
              }`}
            >
              {!marketOpen ? "Market Closed" : `Place ${orderType} Order`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
